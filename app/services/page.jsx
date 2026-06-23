import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import AppDownload from "../../components/AppDownload";
import Link from "next/link";

const CATS = [
  { ic: "ti-bolt", c: "#F59E0B", t: "Electricity", b: "All state DISCOMs supported" },
  { ic: "ti-droplet", c: "#06B6D4", t: "Water", b: "Municipal water boards" },
  { ic: "ti-flame", c: "#EF4444", t: "Gas", b: "Piped + cylinder providers" },
  { ic: "ti-phone", c: "#22C55E", t: "Telecom", b: "All major operators" },
  { ic: "ti-wifi", c: "#8B5CF6", t: "Broadband", b: "ISPs across India" },
  { ic: "ti-device-tv", c: "#1B2B6B", t: "DTH", b: "All DTH operators" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 68 }}>
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-page)", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div className="blob" style={{ top: -50, left: -50, width: 300, height: 300, background: "radial-gradient(circle, rgba(134,239,172,0.35), transparent 70%)", animation: "blobMorph 14s ease-in-out infinite alternate" }} />
            {CATS.map((c, i) => (
              <i key={i} className={`ti ${c.ic}`} style={{ position: "absolute", left: ["8%","20%","78%","88%","12%","82%"][i], top: ["18%","68%","22%","60%","78%","12%"][i], fontSize: [44, 38, 52, 36, 40, 46][i], color: c.c, opacity: 0.08, animation: `floatRot ${6 + i}s ease-in-out ${i * 0.4}s infinite` }} aria-hidden="true" />
            ))}
          </div>
          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />BILL PAYMENTS</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, animationDelay: ".1s", color: "var(--text-primary)" }}>Automatic utility bill fetching &amp; management</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.65, maxWidth: 540, margin: "0 auto 28px", animationDelay: ".2s" }}>Connect once, auto-fetch forever — across electricity, water, gas, telecom, broadband, and DTH.</p>
            <Link href="/signup" className="btn-primary fade-up" style={{ animationDelay: ".3s" }}>Get Started</Link>
            <div className="fade-up" style={{ marginTop: 32, animationDelay: ".4s", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24 }}>
              {CATS.map((c) => (
                <div key={c.t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 28 }} aria-hidden="true" />
                  <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 64 }}>How bill fetching works</h2>
            <div data-stagger className="steps-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, position: "relative" }}>
              <div className="timeline-line" style={{ position: "absolute", top: 36, left: "12%", right: "12%" }} />
              {[
                { ic: "ti-plug-connected", t: "Connect Providers", b: "Add utility providers (electricity, water, gas, telecom, DTH, broadband)" },
                { ic: "ti-refresh", t: "Auto-Fetch", b: "Bills pulled automatically at configured intervals" },
                { ic: "ti-eye", t: "Review & Process", b: "Bills appear in your dashboard, categorized and ready" },
                { ic: "ti-circle-check", t: "Settle & Track", b: "Payment processed, ledger updated, customer notified" },
              ].map((s, i) => (
                <div key={i} className="card card-hoverable" style={{ textAlign: "center", padding: "28px 20px", position: "relative" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: "3px solid var(--bg-section-alt)", position: "relative", zIndex: 1 }}>
                    <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green)", fontSize: 28 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700 }}>{i + 1}. {s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.steps-4{grid-template-columns:1fr 1fr !important}.steps-4 .timeline-line{display:none}}@media(max-width:480px){.steps-4{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Supported categories</h2>
            <div data-stagger className="cat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {CATS.map((c) => (
                <div key={c.t} className="card card-hoverable category-card" style={{ textAlign: "center", padding: 28, "--cat": c.c }}>
                  <div className="cat-icon" style={{ width: 64, height: 64, borderRadius: "50%", background: `${c.c}1A`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", transition: "transform 250ms, background 250ms" }}>
                    <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 30 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 700 }}>{c.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`.category-card:hover{border-color:var(--cat) !important}.category-card:hover .cat-icon{transform:scale(1.12)}@media(max-width:900px){.cat-grid{grid-template-columns:1fr 1fr !important}}@media(max-width:480px){.cat-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Everything you need for billing operations</h2>
            <div data-stagger className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["Bill submission and draft management", "Save bills as drafts, edit before submit"],
                ["Multi-provider single dashboard", "All providers, one screen"],
                ["Category-wise billing controls", "Granular rules per category"],
                ["Configurable billing rules", "Set your own logic"],
                ["Outstanding dues tracking", "Never miss a payment"],
                ["Payment status monitoring", "Real-time status updates"],
                ["Billing history and audit trail", "Every action logged"],
                ["Provider management tools", "Add, configure, deactivate"],
              ].map(([t, b]) => (
                <div key={t} className="billing-row" style={{ display: "flex", gap: 12, padding: "14px 18px", borderRadius: 10, transition: "background 200ms, transform 200ms", alignItems: "center" }}>
                  <i className="ti ti-check check-icon" style={{ color: "var(--brand-green-mid)", fontSize: 20, flexShrink: 0, transition: "color 200ms" }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2, color: "var(--text-primary)" }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`.billing-row:hover{background:var(--brand-green-ultra);transform:translateX(4px)}@media(max-width:768px){.feat-grid{grid-template-columns:1fr !important}}`}</style>
        </section>
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
