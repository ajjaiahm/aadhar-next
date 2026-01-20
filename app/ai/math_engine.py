def apply_operation(df, operation, column):
    if operation == "sum":
        return df[column].sum()

    if operation == "average":
        return df[column].mean()

    if operation == "max":
        return df[column].max()

    if operation == "min":
        return df[column].min()

    return df[column].sum()
