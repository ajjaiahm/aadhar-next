"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";

export default function GhostPage() {
  const [inactiveDays, setInactiveDays] = useState(30);
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  async function seed() {
    setErr(null);
    try {
      await fetch(`${API_BASE}/debug/seed-ghost`);
    } catch (e: any) {
      setErr(e?.message || "Seed failed");
    }
  }

  async function scan() {
    setErr(null);
    setData(null);
    try {
      const res = await fetch(`${API_BASE}/cleanup/ghost-scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inactive_days: inactiveDays }),
      });
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setErr(e?.message || "Scan failed");
    }
  }

  const rows = data?.ghost_candidates ?? [];

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>Ghost Cleanup</h1>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label>
          Inactive Days
          <input
            type="number"
            value={inactiveDays}
            onChange={(e) => setInactiveDays(parseInt(e.target.value || "0", 10))}
            style={inp}
          />
        </label>

        <div style={{ display: "flex", gap: 12 }}>
          <button style={btn} onClick={scan}>Scan</button>
          <button style={btn2} onClick={seed}>Seed Old VID (demo)</button>
        </div>
      </div>

      {err && <p style={{ color: "tomato", marginTop: 16 }}>{err}</p>}

      {data && (
        <div style={card}>
          <p>Scanned: {data.scanned} | Flagged: {data.flagged}</p>

          <div style={{ overflowX: "auto", marginTop: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={th}>VID</th>
                  <th style={th}>Risk</th>
                  <th style={th}>Last Seen</th>
                  <th style={th}>Reason</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r: any) => (
                  <tr key={r.vid}>
                    <td style={td}>{r.vid}</td>
                    <td style={td}>{r.risk}</td>
                    <td style={td}>{r.last_seen || "-"}</td>
                    <td style={td}>{r.reason}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td style={td} colSpan={4}>No ghost candidates.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
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
};

const btn2: React.CSSProperties = { ...btn, opacity: 0.85 };

const card: React.CSSProperties = {
  marginTop: 18,
  padding: 16,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
};

const th: React.CSSProperties = {
  textAlign: "left",
  padding: 10,
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const td: React.CSSProperties = {
  padding: 10,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};
