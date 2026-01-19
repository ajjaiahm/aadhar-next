import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>Aadhaar-NEXT Dashboard</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Explainability • Fairness • Ghost Cleanup • Auth Testing
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        <Card title="Auth Tester" desc="Send /authenticate and view actions + risk." href="/auth" />
        <Card title="Explainability" desc="Why did the system ALLOW/ESCALATE/BLOCK?" href="/explain" />
        <Card title="Fairness" desc="Group-wise rates & warnings (method)." href="/fairness" />
        <Card title="Ghost Cleanup" desc="Flag inactive VIDs with last seen timestamps." href="/ghost" />
      </div>
    </main>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 16,
        padding: 18,
        display: "block",
        textDecoration: "none",
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
      <div style={{ marginTop: 6, opacity: 0.75 }}>{desc}</div>
      <div style={{ marginTop: 12, opacity: 0.9 }}>Open →</div>
    </Link>
  );
}
