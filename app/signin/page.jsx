"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.password) errs.password = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try { localStorage.setItem("gm-justSignedIn", "1"); } catch {}
      setTimeout(() => router.push("/dashboard"), 500);
    }
  };
  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <main style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--bg-page)" }} className="auth-grid">
      <div style={{ position: "relative", background: "linear-gradient(160deg, #0F1B24 0%, #1a3a28 60%, #0F2B1B 100%)", color: "#fff", padding: 48, display: "flex", flexDirection: "column", overflow: "hidden" }} className="auth-left">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -50, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(134,239,172,0.3), transparent 70%)", filter: "blur(50px)" }} />
          <div style={{ position: "absolute", bottom: -50, right: -50, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(147,197,253,0.25), transparent 70%)", filter: "blur(50px)" }} />
          {[-20, 0, 20].map((x, i) => (
            <div key={i} style={{ position: "absolute", top: 80, left: `calc(50% + ${x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 160 : 120, background: "linear-gradient(to bottom, rgba(74,222,128,0.6), transparent)" }} />
          ))}
        </div>

        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", zIndex: 2 }}>
          <img src="/img/logo.jpeg" alt="Gatimaan" style={{ height: 48, borderRadius: 7 }} />
          <span style={{ fontSize: 16, fontWeight: 700 }}>
            <span style={{ color: "#fff" }}>Gati</span><span style={{ color: "#fff" }}>Maan</span><span style={{ color: "#4ADE80", fontWeight: 600 }}> Payments</span>
          </span>
        </Link>

        <div style={{ margin: "auto 0", position: "relative", zIndex: 2, maxWidth: 380 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 8 }}>Welcome Back</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 28 }}>Sign in to continue managing your operations</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {[
              { ic: "ti-layout-dashboard", c: "#4ADE80", bg: "rgba(74,222,128,0.12)", t: "Dashboard overview", s: "Revenue, bills, and retailer metrics live" },
              { ic: "ti-wallet", c: "#06B6D4", bg: "rgba(6,182,212,0.12)", t: "GMPay Wallet", s: "Transfers, balances, and audit trail" },
              { ic: "ti-trophy", c: "#F59E0B", bg: "rgba(245,158,11,0.12)", t: "Commission tracking", s: "Your network's earnings, auto-calculated" },
            ].map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, opacity: 0, animation: `fadeUp 600ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 100}ms forwards, float ${5 + i}s ease-in-out ${i * 0.3}s infinite` }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 18 }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{c.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{c.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Secure role-based access", "Real-time dashboard", "Trusted by 200+ retailers"].map((t) => (
              <div key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 8, padding: "6px 12px", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                <i className="ti ti-check" style={{ color: "#4ADE80" }} aria-hidden="true" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 40, background: "#fff" }} className="auth-right">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>Welcome Back</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 28 }}>Sign in to your Gatimaan Payments account</p>
          <form onSubmit={submit} noValidate>
            <div style={{ marginBottom: 16 }}>
              <label className="label">Email Address</label>
              <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={h("email")} style={errors.email ? { borderColor: "var(--accent-red)" } : {}} />
              {errors.email && <div style={errStyle}>{errors.email}</div>}
            </div>
            <div style={{ marginBottom: 8 }}>
              <label className="label">Password</label>
              <div style={{ position: "relative" }}>
                <input className="input" type={show ? "text" : "password"} placeholder="Enter password" value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
                <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
                  <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
                </button>
              </div>
              {errors.password && <div style={errStyle}>{errors.password}</div>}
            </div>
            <div style={{ textAlign: "right", marginBottom: 24 }}>
              <Link href="#" style={{ fontSize: 13, color: "var(--brand-green)", fontWeight: 500 }}>Forgot password?</Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", padding: 14, fontSize: 15 }}>{loading ? "Signing in..." : "Sign In"}</button>
            <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12, margin: "20px 0" }}>— or —</div>
            <button type="button" style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid var(--border-default)", background: "#fff", color: "var(--text-primary)", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <i className="ti ti-brand-google" aria-hidden="true" /> Continue with Google
            </button>
            <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "var(--text-muted)" }}>
              Don't have an account? <Link href="/signup" style={{ color: "var(--brand-green)", fontWeight: 600 }}>Sign up →</Link>
            </p>
          </form>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .auth-grid { grid-template-columns: 1fr !important; } .auth-left { padding: 32px !important; min-height: 280px; } }`}</style>
    </main>
  );
}
const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };
