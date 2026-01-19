from .loader import load_data

# auto-detect demographic columns
def _demographic_columns(df):
    return [c for c in df.columns if c.startswith("demo_")]

def summary():
    df = load_data()
    demo_cols = _demographic_columns(df)

    total_updates = int(df[demo_cols].sum().sum())

    top_demo = (
        df[demo_cols].sum()
        .sort_values(ascending=False)
        .index[0]
    )

    return {
        "total_updates": total_updates,
        "top_demographic_category": top_demo
    }

def demographic_wise():
    df = load_data()
    demo_cols = _demographic_columns(df)

    return df[demo_cols].sum().to_dict()

def state_wise():
    df = load_data()
    demo_cols = _demographic_columns(df)

    return (
        df.groupby("state")[demo_cols]
        .sum()
        .sum(axis=1)
        .sort_values(ascending=False)
        .to_dict()
    )

def district_wise(state: str):
    df = load_data()
    demo_cols = _demographic_columns(df)

    filtered = df[df["state"] == state]

    return (
        filtered.groupby("district")[demo_cols]
        .sum()
        .sum(axis=1)
        .sort_values(ascending=False)
        .to_dict()
    )

def pin_wise(pincode: int):
    df = load_data()
    demo_cols = _demographic_columns(df)

    filtered = df[df["pincode"] == pincode]
    return filtered[demo_cols].sum().to_dict()

def trends():
    df = load_data()
    demo_cols = _demographic_columns(df)

    trend = (
        df.groupby(["year", "month"])[demo_cols]
        .sum()
        .reset_index()
    )

    return trend.to_dict(orient="records")
