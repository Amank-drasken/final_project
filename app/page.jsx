import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroViber from "../components/HeroViber";
import ScrollReveal from "../components/ScrollReveal";
import AppDownload from "../components/AppDownload";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main style={{ paddingTop: 68 }}>
        <HeroViber />

        {/* INDIA'S FIRST — Ticker strip */}
        <section style={{ background: "linear-gradient(135deg, #16A34A 0%, #15803D 50%, #14532D 100%)", padding: "26px 0", overflow: "hidden" }}>
          <div style={{ display: "flex", width: "max-content", animation: "ticker 30s linear infinite", whiteSpace: "nowrap" }}>
            {[0,1].map((rep) => (
              <div key={rep} style={{ display: "flex", gap: 40, paddingRight: 40 }}>
                {[
                  "⭐ India's First B2B & B2B2C Utility Platform",
                  "🏆 Guaranteed Commission on Every Transaction",
                  "💰 Rewards on Every Sale",
                  "⚡ Auto-Bill Fetching from 50+ Providers",
                  "🔒 Built-in Wallet & Treasury",
                  "👥 Trusted by 200+ Retailers",
                ].map((t, i) => (
                  <span key={i} style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 0.3 }}>{t} ·</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container" data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { ic: "ti-plug-connected", n: "50+", l: "Utility Providers Connected", t: "+18% vs last month" },
              { ic: "ti-coin", n: "₹2Cr+", l: "Monthly Transactions Processed", t: "+24% vs last month" },
              { ic: "ti-users", n: "218+", l: "Active Retailers on Platform", t: "+34% vs last month" },
              { ic: "ti-check", n: "99.8%", l: "Payment Settlement Rate", t: "Best in class" },
            ].map((s) => (
              <div key={s.l} className="card card-hoverable">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green)", fontSize: 22 }} aria-hidden="true" />
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 10 }}>{s.l}</div>
                <span style={{ display: "inline-block", fontSize: 11, color: "var(--brand-green-dark)", background: "var(--brand-green-pale)", padding: "3px 8px", borderRadius: 6, fontWeight: 600 }}>{s.t}</span>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 1000px) { .container[data-stagger] { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 560px) { .container[data-stagger] { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* FEATURE 1 — Auto Bill Fetching */}
        <section className="section" id="bill-payments" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }}>
            <div data-animate="left" style={{ position: "relative" }}>
              <div className="card" style={{ position: "relative", textAlign: "center", maxWidth: 360, margin: "0 auto", padding: 28 }}>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 6 }}>Bills Fetched Today</div>
                <div style={{ fontSize: 44, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>423</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>From 6 categories</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10, marginTop: 24, maxWidth: 360, marginInline: "auto" }}>
                {[
                  ["ti-bolt", "#F59E0B"],
                  ["ti-droplet", "#06B6D4"],
                  ["ti-flame", "#EF4444"],
                  ["ti-phone", "#22C55E"],
                  ["ti-wifi", "#8B5CF6"],
                  ["ti-device-tv", "#1B2B6B"],
                ].map(([ic,c],i) => (
                  <div key={i} style={{ aspectRatio: "1 / 1", borderRadius: 10, background: "#fff", boxShadow: "var(--shadow-sm)", display: "flex", alignItems: "center", justifyContent: "center", animation: `floatRot ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` }}>
                    <i className={`ti ${ic}`} style={{ color: c, fontSize: 22 }} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            <div data-animate="right">
              <div className="eyebrow">BILL MANAGEMENT</div>
              <h2 className="sec-h">Auto-Fetch Bills From Every Provider, Instantly</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>Connect Gatimaan Payments once to 50+ utility providers — electricity, water, gas, telecom, broadband, DTH. Bills appear in your dashboard automatically. No more portal-hopping. No more manual entry.</p>
              <div style={{ marginTop: 20 }}>
                <span className="feature-pill">50+ Providers</span>
                <span className="feature-pill">Auto-sync</span>
                <span className="feature-pill">All categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE 2 — GMPay Wallet */}
        <section className="section" id="wallet" style={{ background: "var(--bg-page)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
            <div data-animate="left">
              <div className="eyebrow" style={{ color: "var(--accent-cyan)" }}>GMPAY WALLET</div>
              <h2 className="sec-h">Instant Wallet-To-Wallet Transfers With GMPay</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>Every retailer and customer on the platform gets a GMPay wallet. Transfer funds instantly across your network, handle credit requests, manage fund additions, and pull back when needed. Every single movement is logged with a full audit trail — no disputes, no confusion.</p>
              <div style={{ marginTop: 20 }}>
                <span className="feature-pill">Instant transfers</span>
                <span className="feature-pill">Credit requests</span>
                <span className="feature-pill">Full audit trail</span>
              </div>
            </div>
            <div data-animate="right">
              <div className="card" style={{ border: "1px solid rgba(6,182,212,0.2)", animation: "float 5s ease-in-out infinite" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="ti ti-wallet" style={{ color: "var(--accent-cyan)", fontSize: 20 }} aria-hidden="true" />
                    <span style={{ fontSize: 15, fontWeight: 600 }}>GMPay Wallet</span>
                  </div>
                  <span style={{ background: "var(--accent-cyan)", color: "#fff", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>GMPAY</span>
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--text-primary)" }}>₹8,45,200</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Available balance</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 16 }}>
                  {["Add Funds","Transfer","Request Credit"].map((t) => (
                    <button key={t} style={{ padding: "8px 6px", border: "1px solid var(--border-default)", background: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 500, color: "var(--text-secondary)" }}>{t}</button>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid var(--border-default)", paddingTop: 12 }}>
                  {[
                    { ic: "ti-arrow-up-right", c: "#16A34A", t: "Fund added from Rajesh Kumar", v: "+₹25,000" },
                    { ic: "ti-arrows-exchange", c: "#06B6D4", t: "Transfer to Priya Sharma", v: "₹12,500" },
                    { ic: "ti-clock", c: "#F59E0B", t: "Credit request pending", v: "₹50,000" },
                  ].map((r,i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border-default)" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 16 }} aria-hidden="true" />
                        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{r.t}</span>
                      </div>
                      <span style={{ color: r.c, fontSize: 13, fontWeight: 600 }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDIA'S FIRST HIGHLIGHT */}
        <section style={{ background: "linear-gradient(135deg, #F0FFF4 0%, #DCFCE7 50%, #F0FDF4 100%)", borderTop: "1px solid rgba(22,163,74,0.15)", borderBottom: "1px solid rgba(22,163,74,0.15)", padding: "100px 0", textAlign: "center" }}>
          <div className="container" data-animate="scale">
            <i className="ti ti-trophy" style={{ color: "var(--accent-amber)", fontSize: 36, marginBottom: 14 }} aria-hidden="true" />
            <div style={{ display: "inline-block", background: "#14532D", color: "#fff", padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 18 }}>INDIA'S FIRST</div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 12px", lineHeight: 1.1 }}>India's First B2B &amp; B2B2C Utility Platform</h2>
            <p style={{ fontSize: 22, fontWeight: 500, color: "var(--brand-green-dark)", margin: "0 0 24px" }}>Guaranteeing Rewards &amp; Commission On Every Transaction</p>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 580, margin: "0 auto 36px" }}>While other platforms simply process bills, Gatimaan Payments pays your retailer network on every transaction — automatically. Configurable commission rules, loyalty rewards, and milestone bonuses keep your partners engaged and your network growing.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, maxWidth: 880, margin: "0 auto" }} className="if-pills">
              {[
                ["₹1,87,340", "Average monthly commission per retailer"],
                ["34%", "Average network growth with commission engine"],
                ["100%", "Transactions that earn retailers something"],
              ].map(([n,l]) => (
                <div key={l} className="card card-hoverable" style={{ padding: "16px 20px", textAlign: "left", display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--brand-green-dark)" }}>{n}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width:700px){.if-pills{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* FEATURE 3 — Commission */}
        <section className="section" id="commission" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }}>
            <div data-animate="left" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card" style={{ border: "1px solid rgba(245,158,11,0.2)", animation: "float 5s ease-in-out infinite" }}>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Commission This Month</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#F59E0B" }}>₹1,87,340</div>
                <div style={{ fontSize: 12, color: "var(--brand-green-dark)", fontWeight: 600, marginBottom: 12 }}>+34% vs last month</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 70 }}>
                  {[40,55,48,62,58,82].map((h,i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? "linear-gradient(180deg,#FBBF24,#F59E0B)" : "linear-gradient(180deg,#DCFCE7,#86EFAC)", borderRadius: "4px 4px 0 0" }} />
                  ))}
                </div>
              </div>
              <div className="card" style={{ border: "1px solid var(--border-green)", animation: "float 7s ease-in-out 1s infinite" }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Rewards Program</div>
                <div style={{ height: 6, background: "var(--bg-section-alt)", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
                  <div style={{ width: "64%", height: "100%", background: "linear-gradient(90deg,#16A34A,#4ADE80)" }} />
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>320 / 500 transactions to next milestone</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ color: "var(--accent-amber)" }}>
                    {[1,2,3,4,5].map((i) => <i key={i} className="ti ti-star-filled" style={{ fontSize: 16, opacity: i <= 4 ? 1 : 0.4 }} aria-hidden="true" />)}
                  </div>
                  <span style={{ color: "#F59E0B", fontSize: 16, fontWeight: 700 }}>2,340 loyalty points</span>
                </div>
              </div>
            </div>
            <div data-animate="right">
              <div className="eyebrow" style={{ color: "var(--accent-amber)" }}>RETAILER EARNINGS</div>
              <h2 className="sec-h">Retailers Earn On Every Single Transaction</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>Configure commission percentages by transaction type. Every eligible sale automatically calculates and credits commission to the retailer's GMPay wallet. Reward programs, loyalty milestones, and coupon campaigns keep your network engaged and growing.</p>
            </div>
          </div>
        </section>

        {/* FEATURE 4 — Dashboard */}
        <section className="section" id="dashboard" style={{ background: "var(--bg-page)" }}>
          <div className="container">
            <div data-animate="up" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="sec-h">Your Real-Time Operations Command Center</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>Everything your team needs — from treasury to retailer commissions — visible and controllable in one place.</p>
            </div>
            <div data-animate="scale" style={{ maxWidth: 860, margin: "0 auto", borderRadius: 14, overflow: "hidden", border: "1px solid var(--border-default)", boxShadow: "0 24px 80px rgba(22,163,74,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 36, background: "var(--bg-section-alt)", display: "flex", alignItems: "center", padding: "0 14px", gap: 6, borderBottom: "1px solid var(--border-default)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ marginLeft: 16, fontSize: 12, color: "var(--text-muted)" }}>app.gatimaan.in/dashboard</span>
              </div>
              <div style={{ display: "flex", background: "#fff", minHeight: 360 }}>
                <div style={{ width: 130, background: "var(--bg-section-alt)", padding: 14, borderRight: "1px solid var(--border-default)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                    <img src="/img/logo.jpeg" alt="" style={{ height: 22, borderRadius: 4 }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-secondary)" }}>Gatimaan</span>
                  </div>
                  {[
                    ["ti-layout-dashboard","Dashboard",true],
                    ["ti-file-invoice","Bills"],
                    ["ti-wallet","Wallet"],
                    ["ti-users","Retailers"],
                    ["ti-coin","Commission"],
                    ["ti-building-bank","Treasury"],
                    ["ti-chart-bar","Reports"],
                  ].map(([ic,l,a]) => (
                    <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6, marginBottom: 3, background: a ? "var(--brand-green-pale)" : "transparent", color: a ? "var(--brand-green-dark)" : "var(--text-muted)", fontSize: 12, fontWeight: a ? 600 : 500 }}>
                      <i className={`ti ${ic}`} style={{ fontSize: 14 }} aria-hidden="true" />
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>Dashboard Overview</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Friday, 20 June 2026</div>
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "var(--brand-green-dark)" }}>A</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                    {[
                      ["Revenue Today","₹1,24,500","var(--brand-green-dark)"],
                      ["Wallet Balance","₹8,45,200","var(--accent-cyan)"],
                      ["Pending Bills","47","var(--accent-amber)"],
                      ["Settled Today","92%","var(--brand-green-dark)"],
                    ].map(([l,v,c]) => (
                      <div key={l} style={{ background: "var(--bg-section-alt)", padding: 12, borderRadius: 8 }}>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{l}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: c }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "var(--bg-section-alt)", padding: 12, borderRadius: 8 }}>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6 }}>Revenue Trend</div>
                    <svg viewBox="0 0 360 60" width="100%" height="60">
                      <polygon points="0,52 50,42 100,46 150,30 200,34 250,22 300,26 360,12 360,60 0,60" fill="rgba(34,197,94,0.15)" />
                      <polyline points="0,52 50,42 100,46 150,30 200,34 250,22 300,26 360,12" fill="none" stroke="#16A34A" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE 5 — Roles */}
        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <div data-animate="up" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="sec-h">One Platform, Every Team Member Covered</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>Each role sees exactly what they need — nothing more, nothing less.</p>
            </div>
            <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }} className="role-grid">
              {[
                { c: "#1B2B6B", ic: "ti-shield", t: "Super Admin",      items: ["Full platform control","Treasury management","Provider configuration","All reports","User management","Platform settings","Audit logs"] },
                { c: "#2563EB", ic: "ti-settings", t: "Operations",     items: ["Bill management","Customer management","Provider management","Bulk processing","Connection handling","Request management"] },
                { c: "#16A34A", ic: "ti-calculator", t: "Finance",      items: ["Wallet management","Ledger & transactions","Bank accounts","UPI IDs","Settlement tracking","Fee setup"] },
                { c: "#EF4444", ic: "ti-headset", t: "Support",         items: ["Complaint management","Refund processing","Notification dispatch","Escalation handling","KYC review"] },
                { c: "#F59E0B", ic: "ti-coin", t: "Retailer / Partner", items: ["Earn commissions","GMPay wallet","Submit bills","Track rewards","Loyalty points","Milestone targets","Commission history"] },
              ].map((r) => (
                <div key={r.t} className="card card-hoverable" style={{ borderTop: `3px solid ${r.c}`, padding: "28px 20px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${r.c}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 26 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{r.t}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {r.items.map((it) => (
                      <li key={it} style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 7, display: "flex", gap: 6, alignItems: "flex-start" }}>
                        <i className="ti ti-check" style={{ color: r.c, fontSize: 14, flexShrink: 0, marginTop: 2 }} aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 1100px){.role-grid{grid-template-columns:repeat(3,1fr) !important}}@media (max-width: 720px){.role-grid{grid-template-columns:repeat(2,1fr) !important}}@media (max-width: 480px){.role-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* COMPARISON */}
        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>What Changes When You Switch To Gatimaan Payments</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="cmp-grid">
              <div data-animate="left" className="card-hoverable" style={{ background: "#fff", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: 18, background: "#fff", borderBottom: "1px solid rgba(239,68,68,0.15)", color: "#EF4444", fontWeight: 600, fontSize: 15 }}>✗ Without Gatimaan</div>
                <div style={{ padding: "8px 20px 18px" }}>
                  {["Log into 5+ portals daily","Commission tracking in Excel","Wallet disputes on WhatsApp","Month-end treasury reconciliation","No audit trail for team actions"].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--border-default)", alignItems: "center" }}>
                      <i className="ti ti-x" style={{ color: "rgba(239,68,68,0.5)", fontSize: 18 }} aria-hidden="true" />
                      <span style={{ color: "var(--text-muted)", fontSize: 14 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div data-animate="right" className="card-hoverable" style={{ background: "#fff", border: "1px solid var(--border-green)", borderRadius: 14, overflow: "hidden", transitionDelay: "150ms" }}>
                <div style={{ padding: 18, background: "var(--brand-green-pale)", color: "var(--brand-green-dark)", fontWeight: 600, fontSize: 15 }}>✓ With Gatimaan Payments</div>
                <div style={{ padding: "8px 20px 18px" }}>
                  {["1 dashboard, auto-fetch from 50+ providers","Built-in engine, auto-calculated, fully logged","GMPay wallet with transfer audit trail","Real-time treasury and ledger, live","Complete activity + login logs"].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--border-default)", alignItems: "center" }}>
                      <i className="ti ti-check" style={{ color: "var(--brand-green-mid)", fontSize: 18 }} aria-hidden="true" />
                      <span style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width:780px){.cmp-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 64 }}>Up And Running In 3 Simple Steps</h2>
            <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, position: "relative" }} className="steps-grid">
              <div className="timeline-line" style={{ position: "absolute", top: 30, left: "16%", right: "16%" }} />
              {[
                { ic: "ti-user-plus", t: "Sign up & onboard", b: "Add your team, assign roles and permissions." },
                { ic: "ti-plug", t: "Connect your providers", b: "Add 50+ utility providers, configure commission rules." },
                { ic: "ti-rocket", t: "Start operating", b: "Fetch bills, collect payments, manage GMPay wallets, track everything." },
              ].map((s, i) => (
                <div key={i} className="card-hoverable" style={{ textAlign: "center", padding: "32px 24px", background: "#fff", border: "1px solid var(--border-default)", borderRadius: 20, boxShadow: "var(--shadow-sm)", position: "relative" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#16A34A,#22C55E)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 800, fontSize: 22, position: "relative", zIndex: 1, boxShadow: "0 6px 20px rgba(22,163,74,0.3)" }}>{i + 1}</div>
                  <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green)", fontSize: 28, marginBottom: 12, display: "block" }} aria-hidden="true" />
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr !important}.steps-grid .timeline-line{display:none !important}}`}</style>
        </section>

        {/* FINAL CTA */}
        <section style={{ background: "linear-gradient(135deg, #0F1B24 0%, #1a3a28 100%)", padding: "120px 24px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[-15, 0, 15].map((x, i) => (
              <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${x}px)`, width: i === 1 ? 3 : 2, height: i === 1 ? 140 : 110, background: "linear-gradient(to bottom, rgba(74,222,128,0.5), transparent)" }} />
            ))}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 500, height: 280, background: "radial-gradient(ellipse, rgba(74,222,128,0.12), transparent 70%)", filter: "blur(40px)" }} />
          </div>
          <div data-animate="scale" style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "rgba(74,222,128,0.12)", color: "#4ADE80", padding: "5px 16px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1.2, marginBottom: 20 }}>GET STARTED TODAY</div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 18, color: "#fff" }}>Ready To Run Your Utility Business From One Place?</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginBottom: 32 }}>Join 200+ retailers and businesses already managing bills, wallets, commissions, and settlements on Gatimaan Payments.</p>
            <Link href="/signup" className="btn-primary" style={{ padding: "16px 48px", fontSize: 16 }}>Get Started Free</Link>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 18 }}>No credit card required · Setup in under 10 minutes · Cancel anytime</div>
          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
