from fastapi import APIRouter
from app.ai.intent_model import detect_intent
from app.ai.router import route_dataset
from app.ai.insight_engine import generate_insight

router = APIRouter(prefix="/ai", tags=["AI Analytics"])

@router.post("/query")
def ai_query(payload: dict):
    query = payload.get("query", "")

    intent = detect_intent(query)
    dataset = route_dataset(intent)
    insight = generate_insight(dataset)

    return {
        "query": query,
        "intent": intent,
        "dataset_used": dataset,
        "insight": insight
    }
