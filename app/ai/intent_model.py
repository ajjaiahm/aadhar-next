from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# load small, fast model
model = SentenceTransformer("all-MiniLM-L6-v2")

INTENTS = {
    "biometric_analysis": [
        "biometric update",
        "fingerprint update",
        "iris update",
        "face update",
        "child biometric"
    ],
    "demographic_analysis": [
        "address update",
        "name correction",
        "dob change",
        "gender update"
    ],
    "enrolment_analysis": [
        "aadhaar enrolment",
        "new enrolments",
        "enrolment trend"
    ]
}

# pre-compute embeddings
intent_embeddings = {
    intent: model.encode(phrases)
    for intent, phrases in INTENTS.items()
}

def detect_intent(query: str) -> str:
    """
    Detects which UIDAI dataset the query refers to.
    """
    query_embedding = model.encode([query])

    scores = {}
    for intent, emb in intent_embeddings.items():
        scores[intent] = float(
            np.max(cosine_similarity(query_embedding, emb))
        )

    return max(scores, key=scores.get)
