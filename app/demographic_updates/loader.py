import pandas as pd
from pathlib import Path

# Folder containing all UIDAI demographic CSV chunks
DATA_DIR = Path("data/aadhaar_demographic_updates")

_df = None

def load_data():
    """
    Loads and caches the UIDAI Aadhaar Demographic Update dataset.
    Automatically reads and merges all CSV files present in the
    data/aadhaar_demographic_updates directory.
    """
    global _df

    if _df is None:
        csv_files = sorted(DATA_DIR.glob("*.csv"))

        if not csv_files:
            raise FileNotFoundError(
                "No demographic CSV files found in "
                "data/aadhaar_demographic_updates/"
            )

        # Read and merge all CSV files
        frames = [pd.read_csv(f) for f in csv_files]
        df = pd.concat(frames, ignore_index=True)

        # Normalize column names
        df.columns = [c.strip().lower() for c in df.columns]

        # Parse date (UIDAI format: DD-MM-YYYY)
        if "date" in df.columns:
            df["date"] = pd.to_datetime(df["date"], dayfirst=True, errors="coerce")

            # Extract time dimensions
            df["year"] = df["date"].dt.year
            df["month"] = df["date"].dt.month

        # Cache dataframe
        _df = df

    return _df
