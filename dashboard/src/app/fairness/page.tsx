"use client";

import { useEffect, useState } from "react";
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

export default function FairnessPage() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setErr(null);
    try {
      const res = await fetch(`${API_BASE}/fairness?group=method`);
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setErr(e?.message || "Failed to fetch fairness");
    }
  }

  useEffect(() => {
    load();
  }, []);

  const methods = data ? Object.keys(data.counts || {}) : [];
  const counts = methods.map((m) => data.counts[m] ?? 0);
  const esc = methods.map((m) => data.escalate_rate?.[m] ?? 0);
  const blk = methods.map((m) => data.block_rate?.[m] ?? 0);

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>Fairness</h1>

      <button style={btn} onClick={load}>Refresh</button>
      {err && <p style={{ color: "tomato", marginTop: 16 }}>{err}</p>}

      {data && (
        <>
          <div style={card}>
            <h3 style={{ fontWeight: 800 }}>Counts by Method</h3>
            <Bar data={{ labels: methods, datasets: [{ label: "Count", data: counts }] }} />
          </div>

          <div style={card}>
            <h3 style={{ fontWeight: 800 }}>Escalate Rate</h3>
            <Bar data={{ labels: methods, datasets: [{ label: "Escalate Rate", data: esc }] }} />
          </div>

          <div style={card}>
            <h3 style={{ fontWeight: 800 }}>Block Rate</h3>
            <Bar data={{ labels: methods, datasets: [{ label: "Block Rate", data: blk }] }} />
          </div>

          <div style={card}>
            <h3 style={{ fontWeight: 800 }}>Warnings</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data.warnings || [], null, 2)}</pre>
          </div>
        </>
      )}
    </main>
  );
}

const btn: React.CSSProperties = {
  marginTop: 14,
  padding: 12,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
};

const card: React.CSSProperties = {
  marginTop: 18,
  padding: 16,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
};
