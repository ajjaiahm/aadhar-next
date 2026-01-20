from fastapi import FastAPI, HTTPException
import pandas as pd
from pathlib import Path

# -----------------------------
# Routers
# -----------------------------
from app.demographic_updates.routes import router as demographic_router
from app.api.insight_bot import router as insight_bot_router

# -----------------------------
# App init (ONLY ONCE)
# -----------------------------
app = FastAPI(
    title="UIDAI Aadhaar Analytics Platform",
    description="Aggregated enrolment, demographic & biometric insights",
    version="1.0.0"
)

# -----------------------------
# Include routers
# -----------------------------
app.include_router(
    insight_bot_router
)

app.include_router(
    demographic_router,
    prefix="/demographic",
    tags=["Aadhaar Demographic Updates"]
)

app.include_router(
    demographic_router,
    prefix="/biometric",
    tags=["Biometric Analytics"]
)

# -----------------------------
# Load enrolment dataset
# -----------------------------
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "aadhaar_enrolment" / "enrolment_cleaned.csv"

if not DATA_PATH.exists():
    raise RuntimeError(
        "❌ enrolment_cleaned.csv not found. "
        "Run scripts/load_aadhaar_enrolment.py first."
    )

df = pd.read_csv(DATA_PATH)

# -----------------------------
# Core endpoints
# -----------------------------

@app.get("/")
def root():
    return {"message": "UIDAI Aadhaar Analytics API is running"}

@app.get("/enrolments/summary")
def enrolment_summary():
    total = int(df[["age_0_5", "age_5_17", "age_18_plus"]].sum().sum())
    return {
        "total_enrolments": total,
        "records": len(df)
    }

@app.get("/enrolments/age-wise")
def age_wise_distribution():
    return {
        "age_0_5": int(df["age_0_5"].sum()),
        "age_5_17": int(df["age_5_17"].sum()),
        "age_18_plus": int(df["age_18_plus"].sum())
    }

@app.get("/enrolments/state/{state}")
def enrolment_by_state(state: str):
    state_df = df[df["state"].str.lower() == state.lower()]
    if state_df.empty:
        raise HTTPException(status_code=404, detail="State not found")

    total = int(
        state_df[["age_0_5", "age_5_17", "age_18_plus"]].sum().sum()
    )

    return {
        "state": state.title(),
        "total_enrolments": total
    }

@app.get("/enrolments/district/{district}")
def enrolment_by_district(district: str):
    district_df = df[df["district"].str.lower() == district.lower()]
    if district_df.empty:
        raise HTTPException(status_code=404, detail="District not found")

    total = int(
        district_df[["age_0_5", "age_5_17", "age_18_plus"]].sum().sum()
    )

    return {
        "district": district.title(),
        "total_enrolments": total
    }

@app.get("/enrolments/trends")
def enrolment_trends():
    trend_df = (
        df.groupby("date")[["age_0_5", "age_5_17", "age_18_plus"]]
        .sum()
        .reset_index()
    )
    return trend_df.to_dict(orient="records")

@app.get("/biometric")
def biometric_root():
    return {"message": "Biometric Analytics API is running"}
