import re

OPERATIONS = {
    "sum": ["total", "sum", "overall"],
    "average": ["average", "mean"],
    "percentage": ["percentage", "percent", "%"],
    "compare": ["compare", "difference", "change"],
    "max": ["highest", "maximum", "most"],
    "min": ["lowest", "minimum", "least"]
}

def detect_operation(query: str):
    q = query.lower()
    for op, words in OPERATIONS.items():
        if any(w in q for w in words):
            return op
    return "sum"
