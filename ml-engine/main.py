from fastapi import FastAPI
import random

app = FastAPI()

@app.post("/face-quality")
def face_quality():
    return {
        "quality_score": round(random.uniform(0.5, 0.95), 2)
    }

@app.post("/liveness-check")
def liveness():
    return {
        "live": True,
        "confidence": round(random.uniform(0.7, 0.99), 2)
    }

@app.post("/dedupe-score")
def dedupe():
    return {
        "match_score": round(random.uniform(0.0, 1.0), 2)
    }
