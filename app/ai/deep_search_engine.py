from app.ai.dataset_scanner import scan_all_datasets
from app.ai.query_parser import detect_operation
from app.ai.math_engine import apply_operation
import pandas as pd

def deep_search(query: str):
    scanned = scan_all_datasets()
    operation = detect_operation(query)

    results = []

    for item in scanned:
        df = pd.read_csv(item["path"])

        for col in item["numeric_columns"]:
            try:
                value = apply_operation(df, operation, col)
                results.append({
                    "dataset": item["dataset"],
                    "column": col,
                    "value": float(value)
                })
            except Exception:
                continue

    return results
