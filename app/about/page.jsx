import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import AppDownload from "../../components/AppDownload";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 68 }}>
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-page)", overflow: "hidden", minHeight: 480 }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div className="blob" style={{ top: -50, left: -50, width: 300, height: 300, background: "radial-gradient(circle, rgba(134,239,172,0.4), transparent 70%)", animation: "blobMorph 16s ease-in-out infinite alternate" }} />
            <div className="blob" style={{ top: 100, right: -50, width: 250, height: 250, background: "radial-gradient(circle, rgba(147,197,253,0.3), transparent 70%)", animation: "blobMorph 14s ease-in-out 3s infinite alternate" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", pointerEvents: "none" }}>
            {[
              { d: 180, dur: 4, dly: 0, c: "rgba(22,163,74,0.18)" },
              { d: 300, dur: 4.5, dly: 0.4, c: "rgba(22,163,74,0.13)" },
              { d: 440, dur: 5, dly: 0.8, c: "rgba(22,163,74,0.09)" },
              { d: 600, dur: 5.5, dly: 1.2, c: "rgba(22,163,74,0.06)" },
              { d: 780, dur: 6, dly: 1.6, c: "rgba(22,163,74,0.03)" },
            ].map((r, i) => (
              <div key={i} style={{ position: "absolute", width: r.d, height: r.d, borderRadius: "50%", border: "1px solid transparent", top: 0, left: 0, transform: "translate(-50%,-50%)", animation: `ringPulse ${r.dur}s ease-in-out ${r.dly}s infinite`, "--rc": r.c }} />
            ))}
          </div>
          <div style={{ position: "relative", maxWidth: 620, margin: "0 auto", zIndex: 1 }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />OUR STORY</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, animationDelay: ".1s", color: "var(--text-primary)" }}>Built for the backbone of utility payments</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.65, maxWidth: 520, margin: "0 auto", animationDelay: ".22s" }}>We built Gatimaan Payments because utility payment businesses deserve better than juggling portals, spreadsheets, and WhatsApp messages.</p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container mv-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div data-animate="left" className="card-hoverable" style={{ background: "#fff", borderLeft: "4px solid var(--brand-green)", border: "1px solid var(--border-default)", borderLeftWidth: 4, borderRadius: 20, padding: 36, boxShadow: "var(--shadow-md)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <i className="ti ti-target-arrow" style={{ color: "var(--brand-green)", fontSize: 30 }} aria-hidden="true" />
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>Our Mission</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>To simplify utility billing and payment operations for every business in India — from large distributor networks to independent retailers. We believe managing utility payments should feel as simple as using a single dashboard, not juggling ten tools.</p>
            </div>
            <div data-animate="right" className="card-hoverable" style={{ background: "#fff", borderLeft: "4px solid var(--brand-navy)", border: "1px solid var(--border-default)", borderLeftWidth: 4, borderRadius: 20, padding: 36, boxShadow: "var(--shadow-md)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(27,43,107,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <i className="ti ti-telescope" style={{ color: "var(--brand-navy)", fontSize: 30 }} aria-hidden="true" />
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>Our Vision</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>To become India's most trusted utility billing operations platform — the infrastructure layer that powers every utility payment business, from small-town retailers to large multi-state distributor networks.</p>
            </div>
          </div>
          <style>{`@media(max-width:780px){.mv-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Why businesses choose Gatimaan Payments</h2>
            <div data-stagger className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {[
                { ic: "ti-layout-grid", c: "var(--brand-green)", bg: "var(--brand-green-pale)", t: "All-in-one, not bolt-on", b: "Bills, wallets, treasury, commissions, analytics and compliance built together from the ground up — not patched together from separate tools." },
                { ic: "ti-settings-2", c: "var(--accent-blue)", bg: "rgba(59,130,246,0.1)", t: "Built for operators, not consumers", b: "Every feature is designed around how utility payment businesses actually operate — multi-role teams, retailer networks, real-time settlements." },
                { ic: "ti-shield-check", c: "var(--brand-navy)", bg: "rgba(27,43,107,0.08)", t: "Financial control built in", b: "From wallet operations to treasury management to bank account linking — the financial depth goes far beyond a typical billing CRM." },
              ].map((c) => (
                <div key={c.t} className="card card-hoverable">
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 28 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{c.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>What drives us</h2>
            <div data-stagger className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
              {[
                { ic: "ti-rocket", c: "var(--brand-green)", bg: "var(--brand-green-pale)", t: "Speed at Every Step", b: "From instant bill fetching to real-time wallet transfers and same-day settlements — every operation is built for speed." },
                { ic: "ti-shield", c: "var(--brand-navy)", bg: "rgba(27,43,107,0.08)", t: "Every Rupee Tracked", b: "Complete activity logs track every action. Login logs record every access. Your data is encrypted, audited, and compliant." },
                { ic: "ti-sparkles", c: "var(--accent-cyan)", bg: "rgba(6,182,212,0.1)", t: "Complex Ops, Simple Interface", b: "Managing 50+ providers, hundreds of retailers, wallets, and treasury behind one clean dashboard." },
                { ic: "ti-trending-up", c: "var(--accent-amber)", bg: "rgba(245,158,11,0.1)", t: "Your Growth Is Our Benchmark", b: "Commission engine and rewards grow your retailer network. Analytics show where to double down." },
              ].map((v) => (
                <div key={v.t} className="card card-hoverable" style={{ padding: "32px 24px" }}>
                  <div style={{ width: 72, height: 72, borderRadius: 18, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <i className={`ti ${v.ic}`} style={{ color: v.c, fontSize: 36 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{v.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:1000px){.values-grid{grid-template-columns:repeat(2,1fr) !important}}@media(max-width:520px){.values-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section style={{ background: "linear-gradient(135deg, #0F1B24 0%, #1a3a28 100%)", padding: "100px 24px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
            {[-15, 0, 15].map((x, i) => (<div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 130 : 100, background: "linear-gradient(to bottom, rgba(74,222,128,0.5), transparent)" }} />))}
          </div>
          <div data-animate="scale" style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 20, color: "#fff" }}>Want to see Gatimaan Payments in action?</h2>
            <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "14px 36px" }}>Book a Demo</Link>
              <Link href="/signup" style={{ color: "#4ADE80", fontSize: 15, fontWeight: 500 }}>or Get Started Free →</Link>
            </div>
          </div>
        </section>
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
