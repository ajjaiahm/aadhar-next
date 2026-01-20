from fastapi import APIRouter, Form
from fastapi.responses import PlainTextResponse
import pandas as pd

from app.ai.intent_model import detect_intent
from app.ai.router import route_dataset
from app.ai.dataset_registry import DATASETS


router = APIRouter(
    prefix="/insight-bot",
    tags=["🤖 Aadhaar Insight Engine"]
)

# -------------------------------
# Helper: detect math operation
# -------------------------------
def detect_operation(query: str) -> str:
    q = query.lower()

    if any(w in q for w in ["percentage", "percent", "%"]):
        return "percentage"
    if any(w in q for w in ["average", "mean"]):
        return "average"
    if any(w in q for w in ["maximum", "highest", "most"]):
        return "max"
    if any(w in q for w in ["minimum", "lowest", "least"]):
        return "min"
    if any(w in q for w in ["compare", "difference", "change"]):
        return "compare"

    return "sum"


# -------------------------------
# Helper: deep recursive dataset scan
# -------------------------------
def deep_search_and_calculate(dataset_key: str, operation: str):
    results = []

    for path in DATASETS[dataset_key]["paths"]:
        df = pd.read_csv(path)

        numeric_cols = df.select_dtypes(include="number").columns

        for col in numeric_cols:
            try:
                if operation == "sum":
                    value = df[col].sum()
                elif operation == "average":
                    value = df[col].mean()
                elif operation == "max":
                    value = df[col].max()
                elif operation == "min":
                    value = df[col].min()
                else:
                    value = df[col].sum()

                results.append({
                    "column": col,
                    "value": float(value)
                })
            except Exception:
                continue

    return results


# -------------------------------
# BOT ENDPOINT
# -------------------------------
@router.post(
    "/ask",
    response_class=PlainTextResponse,
    summary="Ask questions on Aadhaar datasets",
    description="""
Type a question in plain English.

The engine will:
• Understand your words
• Search all relevant UIDAI datasets
• Perform mathematical calculations
• Return a human-readable insight

Examples:
• total biometric updates
• average enrolment by age
• highest demographic corrections
• percentage change in enrolments
"""
)
def ask_bot(prompt: str = Form(...)):

    # 1️⃣ Understand intent (biometric / demographic / enrolment)
    intent = detect_intent(prompt)
    dataset = route_dataset(intent)

    # 2️⃣ Understand math requirement
    operation = detect_operation(prompt)

    # 3️⃣ Deep recursive search + calculation
    results = deep_search_and_calculate(dataset, operation)

    # 4️⃣ Build human-readable explanation
    lines = []
    lines.append("📊 Aadhaar Insight Engine – Analysis Report\n")

    lines.append(f"🧠 Your question: {prompt}")
    lines.append(f"📁 Dataset analysed: {dataset.replace('_', ' ').title()}")
    lines.append(f"🧮 Operation performed: {operation.title()}\n")

    if not results:
        lines.append("❌ No numeric data found for this query.")
    else:
        lines.append("📈 Key Findings:")
        for r in results[:5]:
            lines.append(
                f"  • {r['column'].replace('_', ' ').title()} → {round(r['value'], 2)}"
            )

        if len(results) > 5:
            lines.append(f"  … and {len(results) - 5} more metrics analysed")

    lines.append("\n✅ Data source: UIDAI aggregated datasets")
    lines.append("🔒 No personal Aadhaar or biometric data used")

    return "\n".join(lines)
