import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <section style={{ position: "relative", padding: "100px 24px 60px", textAlign: "center", background: "var(--bg-base)" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", border: "1px solid var(--border-green)", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 20 }}><span className="dot" />OUR STORY</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16, animationDelay: ".1s" }}>Built for the backbone of utility payments</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, maxWidth: 500, margin: "0 auto", animationDelay: ".2s" }}>
              Gatimaan Payments was built to solve a real problem — businesses managing utility bill payments were drowning in portals, spreadsheets, and WhatsApp messages. We built one platform to replace all of that.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="card" style={{ borderLeft: "4px solid var(--brand-green-mid)", borderRadius: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-target" style={{ color: "var(--brand-green-light)", fontSize: 22 }} aria-hidden="true" />
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>Our Mission</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>To simplify utility billing and payment operations for every business in India — large distributor networks and independent retailers alike. We believe managing utility payments should feel as simple as using a single dashboard, not juggling ten tools.</p>
            </div>
            <div className="card" style={{ borderLeft: "4px solid var(--brand-navy)", borderRadius: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(27,43,107,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-telescope" style={{ color: "var(--brand-navy)", fontSize: 22 }} aria-hidden="true" />
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>Our Vision</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>To become India's most trusted utility billing operations platform — the infrastructure layer that powers every utility payment business, from small-town retailers to large multi-state distributor networks.</p>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Why businesses choose Gatimaan Payments</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="grid-3">
              {[
                { ic: "ti-layout-grid", c: "var(--brand-green-light)", t: "All-in-one, not bolt-on", b: "Bills, wallets, treasury, commissions, analytics and compliance built together from the ground up — not patched together from separate tools." },
                { ic: "ti-settings-2", c: "var(--accent-cyan)", t: "Built for operators, not consumers", b: "Every feature is designed around how utility payment businesses actually operate — multi-role teams, retailer networks, real-time settlements." },
                { ic: "ti-shield-check", c: "var(--brand-navy)", t: "Financial control built in", b: "From wallet operations to treasury management to bank account linking — the financial depth goes far beyond what a typical billing CRM offers." },
              ].map((c) => (
                <div key={c.t} className="card hover-lift" style={{ borderRadius: 14 }}>
                  <i className={`ti ${c.ic}`} style={{ color: c.c, fontSize: 28, marginBottom: 14, display: "block" }} aria-hidden="true" />
                  <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600 }}>{c.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.grid-3{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* Values */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>What drives us</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="grid-4">
              {[
                { ic: "ti-bolt", t: "Speed", b: "Fast transactions, faster support" },
                { ic: "ti-lock", t: "Security", b: "Every rupee tracked, every action logged" },
                { ic: "ti-sparkles", t: "Simplicity", b: "Complex operations, simple interface" },
                { ic: "ti-trending-up", t: "Growth", b: "Your growth is our benchmark" },
              ].map((v) => (
                <div key={v.t} className="card hover-lift" style={{ borderRadius: 14, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <i className={`ti ${v.ic}`} style={{ color: "var(--brand-green-light)", fontSize: 24 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600 }}>{v.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>{v.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.grid-4{grid-template-columns:repeat(2,1fr) !important}}`}</style>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 24px", textAlign: "center", background: "var(--bg-base)" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 20 }}>Want to see Gatimaan Payments in action?</h2>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "12px 30px", display: "inline-block" }}>Book a Demo</Link>
              <Link href="/signup" style={{ color: "var(--brand-green-light)", fontSize: 14, alignSelf: "center" }}>or Get Started Free →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
