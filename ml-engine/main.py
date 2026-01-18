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
    score = round(random.uniform(0.0, 1.0), 2)

    return {
        "match_score": score,
        "potential_duplicate": score > 0.85,
        "action": "HUMAN_REVIEW" if score > 0.85 else "NO_ACTION"
    }

