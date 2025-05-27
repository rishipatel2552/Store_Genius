from rank_bm25 import BM25Okapi

class BM25Retriever:
    def __init__(self, corpus):
        self.tokenized_corpus = [doc.lower().split() for doc in corpus]
        self.bm25 = BM25Okapi(self.tokenized_corpus)
    def retrieve(self, query, top_k=5):
        tokens = query.lower().split()
        scores = self.bm25.get_scores(tokens)
        top_idx = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:top_k]
        return top_idx
