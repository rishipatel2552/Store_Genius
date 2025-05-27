import openai
import os
from dotenv import load_dotenv

load_dotenv()


client = openai.OpenAI()

def generate_response(prompt, context):
    messages = [
        {"role": "system", "content": "You are a helpful 7-Eleven assistant. Answer ONLY with the info below if possible."},
        {"role": "user", "content": f"Customer Query: {prompt}\n\nRelevant Information:\n{context}"}
    ]
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0.3,
        max_tokens=200
    )
    return response.choices[0].message.content