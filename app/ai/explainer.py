def explain_results(query, results):
    lines = []
    lines.append("📊 Aadhaar Data Analysis Result\n")
    lines.append(f"🧠 Your query: {query}\n")

    for r in results[:5]:
        lines.append(
            f"• Dataset: {r['dataset']} | "
            f"Metric: {r['column']} | "
            f"Value: {round(r['value'], 2)}"
        )

    lines.append("\n✅ Aggregated UIDAI data only")
    return "\n".join(lines)
