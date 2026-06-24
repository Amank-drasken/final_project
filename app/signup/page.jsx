"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const strength = (p) => { let s = 0; if (!p) return 0; if (p.length >= 6) s++; if (p.length >= 10) s++; if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++; if (/[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p)) s++; return s; };
  const sLevel = strength(form.password);
  const sMeta = [{ w: "0%", c: "transparent", l: "" }, { w: "25%", c: "#EF4444", l: "Weak" }, { w: "50%", c: "#F59E0B", l: "Fair" }, { w: "75%", c: "#4ADE80", l: "Good" }, { w: "100%", c: "#22C55E", l: "Strong" }][sLevel];

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    ["first","last","email","phone","password"].forEach((k) => { if (!form[k]) errs[k] = "Required"; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try { localStorage.setItem("gm-justSignedIn", "1"); localStorage.setItem("gm-kycDone", "0"); } catch {}
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
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Start Managing Your Utility Business Today</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 24 }}>Everything you need in one platform</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            {[
              { ic: "ti-bolt", c: "#4ADE80", bg: "rgba(74,222,128,0.15)", t: "Auto-fetch bills from 50+ providers" },
              { ic: "ti-wallet", c: "#06B6D4", bg: "rgba(6,182,212,0.15)", t: "Built-in GMPay wallet for instant transfers" },
              { ic: "ti-trophy", c: "#F59E0B", bg: "rgba(245,158,11,0.15)", t: "Retailers earn commissions on every transaction" },
              { ic: "ti-users", c: "#3B82F6", bg: "rgba(59,130,246,0.15)", t: "5 user roles — Admin to Retailer — built in" },
            ].map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, opacity: 0, animation: `fadeUp 600ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 100}ms forwards, float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 18 }} aria-hidden="true" />
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{c.t}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
            No credit card required · Free to start · Setup in 10 minutes
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 40px 60px", background: "#fff" }} className="auth-right">
        <div style={{ width: "100%", maxWidth: 440 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>Create Your Account</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>Start managing your utility payment business</p>
          <form onSubmit={submit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              <Field label="First Name" value={form.first} onChange={h("first")} err={errors.first} />
              <Field label="Last Name" value={form.last} onChange={h("last")} err={errors.last} />
            </div>
            <Field label="Email Address" type="email" value={form.email} onChange={h("email")} err={errors.email} />
            <div style={{ marginBottom: 14 }}>
              <label className="label">Phone Number</label>
              <div style={{ display: "flex", alignItems: "stretch", background: "#fff", border: `1.5px solid ${errors.phone ? "var(--accent-red)" : "var(--border-default)"}`, borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "12px 14px", background: "var(--bg-section-alt)", color: "var(--text-secondary)", fontSize: 14, fontWeight: 600, borderRight: "1px solid var(--border-default)" }}>+91</div>
                <input type="tel" value={form.phone} onChange={h("phone")} placeholder="XXXXX XXXXX" style={{ flex: 1, border: "none", outline: "none", padding: "12px 14px", fontSize: 15, fontFamily: "inherit", color: "var(--text-primary)" }} />
              </div>
              {errors.phone && <div style={errStyle}>{errors.phone}</div>}
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="label">Password</label>
              <div style={{ position: "relative" }}>
                <input className="input" type={show ? "text" : "password"} value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
                <button type="button" onClick={() => setShow(!show)} aria-label="Toggle" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
                  <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
                </button>
              </div>
              {form.password && (
                <div style={{ marginTop: 8 }}>
                  <div style={{ height: 4, background: "var(--bg-section-alt)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: sMeta.w, height: "100%", background: sMeta.c, transition: "all 200ms" }} />
                  </div>
                  <div style={{ color: sMeta.c, fontSize: 11, fontWeight: 600, marginTop: 4, textAlign: "right" }}>{sMeta.l}</div>
                </div>
              )}
              {errors.password && <div style={errStyle}>{errors.password}</div>}
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "0 0 18px", lineHeight: 1.5 }}>
              By signing up, you agree to our <Link href="#" style={{ color: "var(--brand-green)", fontWeight: 500 }}>Terms of Service</Link> and <Link href="#" style={{ color: "var(--brand-green)", fontWeight: 500 }}>Privacy Policy</Link>
            </p>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", padding: 14, fontSize: 15 }}>{loading ? "Signing up..." : "Sign Up"}</button>
            <p style={{ textAlign: "center", marginTop: 22, fontSize: 14, color: "var(--text-muted)" }}>
              Already have an account? <Link href="/signin" style={{ color: "var(--brand-green)", fontWeight: 600 }}>Sign in →</Link>
            </p>
          </form>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .auth-grid { grid-template-columns: 1fr !important; } .auth-left { padding: 32px !important; min-height: 280px; } }`}</style>
    </main>
  );
}

const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };
function Field({ label, err, ...rest }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label className="label">{label}</label>
      <input className="input" {...rest} style={err ? { borderColor: "var(--accent-red)" } : {}} />
      {err && <div style={errStyle}>{err}</div>}
    </div>
  );
}
