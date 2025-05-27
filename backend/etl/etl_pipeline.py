import json

def parse_uploaded_files(path, ext):
    docs = []
    if ext == ".json":
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            # Detect FAQ JSON
            if isinstance(data, list) and data and "question" in data[0]:
                for item in data:
                    docs.append(f"Q: {item['question']}\nA: {item['answer']}")
            # Detect Product JSON
            elif isinstance(data, list) and data and "name" in data[0]:
                for item in data:
                    price = float(item.get('price', 0))/100 if 'price' in item else ''
                    docs.append(f"{item['name']}, {item.get('size', '')}, ${price:.2f}")
    elif ext == ".txt":
        with open(path, "r", encoding="utf-8") as f:
            docs = [line.strip() for line in f if line.strip()]
    return docs

def get_corpus(docs):
    return docs
