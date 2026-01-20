import pandas as pd
from app.ai.dataset_registry import DATASETS

def scan_all_datasets():
    scanned = []

    for dataset_key, meta in DATASETS.items():
        for path in meta["paths"]:
            df = pd.read_csv(path)

            scanned.append({
                "dataset": dataset_key,
                "path": str(path),
                "columns": df.columns.tolist(),
                "numeric_columns": df.select_dtypes(include="number").columns.tolist()
            })

    return scanned
