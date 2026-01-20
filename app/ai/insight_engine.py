import pandas as pd
from app.ai.dataset_registry import DATASETS

def load_dataset(dataset_key: str) -> pd.DataFrame:
    frames = []
    for path in DATASETS[dataset_key]["paths"]:
        try:
            frames.append(pd.read_csv(path))
        except Exception:
            continue
    return pd.concat(frames, ignore_index=True)

def generate_insight(dataset_key: str):
    df = load_dataset(dataset_key)

    # choose safest numeric column
    numeric_cols = df.select_dtypes(include="number").columns
    if len(numeric_cols) == 0:
        return {"error": "No numeric columns found"}

    metric = numeric_cols[-1]

    if "year" in df.columns:
        grouped = df.groupby("year")[metric].sum()
    elif "state" in df.columns:
        grouped = df.groupby("state")[metric].sum()
    else:
        grouped = df[metric].sum()

    return {
        "dataset": dataset_key,
        "metric_used": metric,
        "aggregation": "UIDAI-safe aggregation",
        "records": (
            grouped.reset_index().to_dict(orient="records")
            if hasattr(grouped, "reset_index")
            else [{"value": grouped}]
        )
    }
