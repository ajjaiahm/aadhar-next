def match_columns(query: str, scanned_info):
    q = query.lower()
    matches = []

    for item in scanned_info:
        for col in item["columns"]:
            if col.lower().replace("_", " ") in q:
                matches.append((item["dataset"], col))

    return matches
