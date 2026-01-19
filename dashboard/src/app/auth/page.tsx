"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";

export default function AuthPage() {
  const [vid, setVid] = useState("VID123");
  const [confidence, setConfidence] = useState(0.35);
  const [method, setMethod] = useState("face");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function runAuth() {
    setLoading(true);
    setErr(null);
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/authenticate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vid, confidence, method }),
      });

      const data = await res.json();
      setResult(data);
    } catch (e: any) {
      setErr(e?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>Auth Tester</h1>

      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <label>
          VID
          <input value={vid} onChange={(e) => setVid(e.target.value)} style={inputStyle} />
        </label>

        <label>
          Method
          <select value={method} onChange={(e) => setMethod(e.target.value)} style={inputStyle}>
            <option value="face">face</option>
            <option value="finger">finger</option>
            <option value="otp">otp</option>
          </select>
        </label>

        <label>
          Confidence: {confidence.toFixed(2)}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={confidence}
            onChange={(e) => setConfidence(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>

        <button onClick={runAuth} disabled={loading} style={btnStyle}>
          {loading ? "Running..." : "Authenticate"}
        </button>
      </div>

      {err && <p style={{ marginTop: 16, color: "tomato" }}>{err}</p>}

      {result && (
        <div style={{ marginTop: 20, padding: 16, borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)" }}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: 10,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "transparent",
  color: "inherit",
};

const btnStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
  cursor: "pointer",
};
