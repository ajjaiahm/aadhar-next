"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ExplainPage() {
  const [vid, setVid] = useState("VID123");
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  async function loadExplain() {
    setErr(null);
    setData(null);

    try {
      const res = await fetch(`${API_BASE}/explain?id=${encodeURIComponent(vid)}`);
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setErr(e?.message || "Failed to fetch explainability");
    }
  }

  const reasons = data?.reasons ?? [];
  const chartData = {
    labels: reasons.map((r: any) => r.rule),
    datasets: [
      {
        label: "Weight",
        data: reasons.map((r: any) => r.weight),
      },
    ],
  };

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>Explainability</h1>

      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <label>
          VID
          <input value={vid} onChange={(e) => setVid(e.target.value)} style={inp} />
        </label>

        <button style={btn} onClick={loadExplain}>Explain</button>
      </div>

      {err && <p style={{ color: "tomato", marginTop: 16 }}>{err}</p>}

      {data && (
        <>
          <div style={card}>
            <h3 style={{ fontWeight: 800 }}>Decision Snapshot</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data, null, 2)}</pre>
          </div>

          {reasons.length > 0 && (
            <div style={card}>
              <h3 style={{ fontWeight: 800 }}>Reason Weights</h3>
              <Bar data={chartData} />
            </div>
          )}
        </>
      )}
    </main>
  );
}

const inp: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: 10,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "transparent",
  color: "inherit",
};

const btn: React.CSSProperties = {
  padding: 12,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
  cursor: "pointer",
};

const card: React.CSSProperties = {
  marginTop: 18,
  padding: 16,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
};
