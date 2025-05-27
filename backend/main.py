from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from etl.etl_pipeline import parse_uploaded_files, get_corpus
from retrieval.bm25_retriever import BM25Retriever
from retrieval.faiss_retriever import FAISSRetriever
from retrieval.hybrid_retriever import HybridRetriever
from llm.openai_inference import generate_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pipeline
PIPELINE = {
    "corpus": [],
    "bm25": None,
    "faiss": None,
    "hybrid": None
}

def load_all_data():
    docs = []
    faq_path = os.path.join("data", "faq.json")
    if os.path.exists(faq_path):
        docs.extend(parse_uploaded_files(faq_path, ".json"))
    product_path = os.path.join("data", "products.json")
    if os.path.exists(product_path):
        docs.extend(parse_uploaded_files(product_path, ".json"))
    corpus = get_corpus(docs)
    PIPELINE["corpus"] = corpus
    PIPELINE["bm25"] = BM25Retriever(corpus)
    PIPELINE["faiss"] = FAISSRetriever(corpus)
    PIPELINE["hybrid"] = HybridRetriever(PIPELINE["bm25"], PIPELINE["faiss"])
    print(f"Loaded {len(corpus)} passages from {faq_path} and {product_path}")


@app.on_event("startup")
def on_startup():
    load_all_data()

class QueryIn(BaseModel):
    query: str

@app.post("/chat")
async def chat(query_in: QueryIn):
    query = query_in.query
    if not PIPELINE["hybrid"]:
        return {"response": "No documents loaded."}
    idxs = PIPELINE["hybrid"].retrieve(query, top_k=3)
    context = "\n".join([PIPELINE["corpus"][i] for i in idxs])
    answer = generate_response(query, context)
    return {"response": answer}
