class HybridRetriever:
    def __init__(self, bm25, faiss, alpha=0.5):
        self.bm25 = bm25
        self.faiss = faiss
        self.alpha = alpha
    def retrieve(self, query, top_k=3):
        bm_idx = self.bm25.retrieve(query, top_k=top_k*2)
        faiss_idx = self.faiss.retrieve(query, top_k=top_k*2)
        combined = bm_idx + faiss_idx
        ranked = []
        for i in combined:
            if i not in ranked:
                ranked.append(i)
        return ranked[:top_k]
