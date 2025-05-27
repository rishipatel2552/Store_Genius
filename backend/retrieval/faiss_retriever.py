import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

class FAISSRetriever:
    def __init__(self, corpus):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.embeddings = self.model.encode(corpus)
        self.index = faiss.IndexFlatL2(self.embeddings.shape[1])
        self.index.add(np.array(self.embeddings))
    def retrieve(self, query, top_k=5):
        vec = self.model.encode([query])
        D, I = self.index.search(np.array(vec), top_k)
        return I[0].tolist()
