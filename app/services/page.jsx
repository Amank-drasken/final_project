import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <section style={{ padding: "100px 24px 60px", textAlign: "center", background: "var(--bg-base)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 20 }}><span className="dot" />BILL PAYMENTS</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16, animationDelay: ".1s" }}>Automatic utility bill fetching & management</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, maxWidth: 520, margin: "0 auto 28px", animationDelay: ".2s" }}>Connect once to 50+ utility providers and let Gatimaan Payments handle the rest — automatic fetching, categorization, processing and tracking.</p>
            <Link href="/signup" className="btn-primary" style={{ display: "inline-block" }}>Get Started</Link>
          </div>
        </section>

        {/* How it works */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 56 }}>How bill fetching works</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="steps-4">
              {[
                { ic: "ti-plug-connected", t: "Connect Provider", b: "Add utility providers to your account (electricity, water, gas, telecom, DTH, broadband)" },
                { ic: "ti-refresh", t: "Auto-Fetch", b: "Bills are pulled automatically at configured intervals, no manual logging in" },
                { ic: "ti-eye", t: "Review & Process", b: "Bills appear in your dashboard, categorized and ready for payment action" },
                { ic: "ti-circle-check", t: "Settle & Track", b: "Payment is processed, ledger updated, customer notified" },
              ].map((s, i) => (
                <div key={i} className="card" style={{ borderRadius: 12, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green-light)", fontSize: 24 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600 }}>{i + 1}. {s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.55, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.steps-4{grid-template-columns:1fr 1fr !important}}@media(max-width:480px){.steps-4{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* Categories */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 40 }}>Supported categories</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="cat-grid">
              {[
                { ic: "ti-bolt", c: "#F59E0B", t: "Electricity", b: "All state DISCOMs supported" },
                { ic: "ti-droplet", c: "#06B6D4", t: "Water", b: "Municipal water boards" },
                { ic: "ti-flame", c: "#EF4444", t: "Gas", b: "Piped + cylinder providers" },
                { ic: "ti-phone", c: "#1E8C45", t: "Telecom", b: "All major operators" },
                { ic: "ti-wifi", c: "#8B5CF6", t: "Broadband", b: "ISPs across India" },
                { ic: "ti-device-tv", c: "#1B2B6B", t: "DTH", b: "All DTH operators" },
              ].map((c) => (
                <div key={c.t} className="card hover-lift" style={{ borderRadius: 12, display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `${c.c}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 22 }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{c.t}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: 13, margin: "4px 0 0" }}>{c.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.cat-grid{grid-template-columns:1fr 1fr !important}}@media(max-width:480px){.cat-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* Feature list */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 40 }}>Everything you need for billing operations</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="feat-grid">
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
                <div key={t} style={{ display: "flex", gap: 12 }}>
                  <i className="ti ti-check" style={{ color: "var(--brand-green-mid)", fontSize: 22, flexShrink: 0 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.feat-grid{grid-template-columns:1fr !important}}`}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
