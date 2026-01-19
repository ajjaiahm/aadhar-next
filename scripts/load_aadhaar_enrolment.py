import pandas as pd
from pathlib import Path

# --------------------------------------------------
# Base paths (Windows-safe, run-from-anywhere)
# --------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

RAW_DIR = BASE_DIR / "data" / "aadhaar_enrolment" / "raw_parts"
RAW_PATH = BASE_DIR / "data" / "aadhaar_enrolment" / "enrolment_raw.csv"
CLEAN_PATH = BASE_DIR / "data" / "aadhaar_enrolment" / "enrolment_cleaned.csv"

# --------------------------------------------------
# Canonical required columns
# --------------------------------------------------
REQUIRED_COLUMNS = [
    "date",
    "state",
    "district",
    "pincode",
    "age_0_5",
    "age_5_17",
    "age_18_plus"
]

# --------------------------------------------------
# Main ETL pipeline
# --------------------------------------------------
def main():
    # 1. Locate raw CSV files
    csv_files = list(RAW_DIR.glob("*.csv"))
    if not csv_files:
        raise FileNotFoundError(f"No CSV files found in {RAW_DIR}")

    print(f"📂 Found {len(csv_files)} raw CSV files")

    # 2. Read and merge all CSVs
    dfs = []
    for file in csv_files:
        print(f"➡️ Reading: {file.name}")
        df = pd.read_csv(file)
        dfs.append(df)

    df = pd.concat(dfs, ignore_index=True)

    # 3. Save merged raw dataset (audit trail)
    df.to_csv(RAW_PATH, index=False)

    print("📄 Columns found in merged dataset:")
    print(df.columns.tolist())
    possible_18_cols = [
    c for c in df.columns
    if "18" in c and any(
        k in c.lower()
        for k in ["above", "plus", "greater", "more", "and_above"]
        )
    ]

    if not possible_18_cols:
        raise ValueError(
            f"❌ Could not auto-detect 18+ age column. Found columns: {df.columns.tolist()}"
        )

    df = df.rename(columns={possible_18_cols[0]: "age_18_plus"})
    print(f"🔁 Mapped '{possible_18_cols[0]}' → 'age_18_plus'")

   
    # 5. Validate schema
    missing = [c for c in REQUIRED_COLUMNS if c not in df.columns]
    if missing:
        raise ValueError(f"❌ Missing required columns: {missing}")

    # 6. Keep only required columns
    df = df[REQUIRED_COLUMNS]

    # 7. Clean data
    df = df.dropna()

    # Convert numeric columns safely
    for col in ["age_0_5", "age_5_17", "age_18_plus"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    df = df.dropna()

    # Normalize text fields
    df["state"] = df["state"].astype(str).str.strip().str.title()
    df["district"] = df["district"].astype(str).str.strip().str.title()

    # 8. Save cleaned dataset
    df.to_csv(CLEAN_PATH, index=False)

    print("✅ Aadhaar enrolment data successfully cleaned and prepared")

# --------------------------------------------------
# Entry point
# --------------------------------------------------
if __name__ == "__main__":
    main()
