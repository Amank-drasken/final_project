import Link from "next/link";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg-base)" }} className="auth-grid">
      <div style={{ position: "relative", background: "#060E12", color: "#fff", padding: 48, display: "flex", flexDirection: "column", overflow: "hidden" }} className="auth-left">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", zIndex: 2 }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: "linear-gradient(135deg,#1B2B6B,#1E8C45)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>GM</div>
          <span style={{ fontSize: 16, fontWeight: 500 }}>
            <span style={{ color: "#fff" }}>Gati</span><span style={{ color: "#4ADE80" }}>Maan</span><span style={{ color: "rgba(255,255,255,0.3)" }}> Payments</span>
          </span>
        </Link>

        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", width: 500, height: 400, transform: "translate(-50%,-30%)", background: "radial-gradient(ellipse, rgba(30,140,69,0.18), transparent 70%)", pointerEvents: "none" }} />
        {[ -30, -10, 10, 30 ].map((x,i) => (
          <div key={i} aria-hidden="true" style={{ position: "absolute", top: 0, left: `calc(50% + ${x}px)`, width: i % 2 ? 2 : 1, height: 200, background: "linear-gradient(to bottom,#22C55E,transparent)", opacity: 0.6, animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${i * 0.4}s infinite` }} />
        ))}

        <div style={{ margin: "auto 0", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: 8 }}>Swift. Secure. Simple.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 32, maxWidth: 360 }}>Your complete utility billing & operations platform</p>
          {[
            "Secure, role-based access",
            "Real-time operations dashboard",
            "Trusted by 200+ retailers",
          ].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <i className="ti ti-circle-check" style={{ color: "#4ADE80", fontSize: 18 }} aria-hidden="true" />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 40, background: "var(--bg-surface)" }} className="auth-right">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px" }}>{title}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>{subtitle}</p>
          {children}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .auth-grid { grid-template-columns: 1fr !important; }
          .auth-left { padding: 32px !important; min-height: 280px; }
        }
      `}</style>
    </main>
  );
}
