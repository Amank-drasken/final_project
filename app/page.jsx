import Header from "../components/Header";
import Footer from "../components/Footer";
import AuroraBg from "../components/AuroraBg";
import HeroDashboard from "../components/HeroDashboard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        {/* HERO */}
        <section style={{ position: "relative", minHeight: "100vh", padding: "100px 24px 0", textAlign: "center", overflow: "hidden", background: "var(--bg-base)" }}>
          <AuroraBg />
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 24 }}>
              <span className="dot" />
              <span>UTILITY BILLING & OPERATIONS PLATFORM</span>
            </div>
            <h1 className="fade-up" style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, maxWidth: 580, margin: "0 auto 18px", animationDelay: ".12s" }}>
              One platform to manage <span className="gradient-text">all utility operations</span>
            </h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65, maxWidth: 400, margin: "0 auto 28px", animationDelay: ".24s" }}>
              Fetch bills, manage wallets, track commissions and settle payments for your retailer network — all from one dashboard.
            </p>
            <div className="fade-up" style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 36, animationDelay: ".36s", flexWrap: "wrap" }}>
              <Link href="/signup" className="btn-primary">Get started</Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--text-secondary)", fontSize: 13 }}>
                Book a demo <i className="ti ti-chevron-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28, flexWrap: "wrap", animationDelay: ".48s" }}>
              {[["50+","Providers"],["5","User Roles"],["99.8%","Settled"]].map(([n,l],i) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 28 }}>
                  {i > 0 && <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />}
                  <div>
                    <div style={{ color: "var(--brand-green-light)", fontSize: 20, fontWeight: 700 }}>{n}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <HeroDashboard />
        </section>

        {/* SECTION 2 — Stats strip */}
        <section style={{ padding: "40px 0", background: "var(--bg-base)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} >
            {[
              ["50+", "Providers Connected"],
              ["₹2Cr+", "Monthly Processed"],
              ["5", "User Roles Built-In"],
              ["12", "Utility Categories"],
            ].map(([n,l]) => (
              <div key={l} style={{ border: "1px solid var(--border-subtle)", borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: "var(--brand-green-light)", fontSize: 28, fontWeight: 700 }}>{n}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Wallet feature */}
        <section className="section" id="wallet" style={{ background: "var(--bg-elevated)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-wallet" aria-hidden="true" style={{ color: "var(--brand-green-light)", fontSize: 22 }} />
              </div>
              <div className="eyebrow">WALLET OPERATIONS</div>
              <h2 className="sec-h">Instant wallet-to-wallet transfers</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>Every retailer and customer operates their own wallet. Transfer funds instantly across the network, handle credit requests, add funds, and pull back when needed. Every movement is logged with a full audit trail.</p>
              <div style={{ marginTop: 16 }}>
                <span className="feature-pill">Instant transfers</span>
                <span className="feature-pill">Credit requests</span>
                <span className="feature-pill">Full audit trail</span>
              </div>
            </div>
            <div className="card" style={{ borderRadius: 16, position: "relative" }}>
              <div style={{ position: "absolute", inset: -20, background: "radial-gradient(circle, rgba(30,140,69,0.15), transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 12 }}>Total Balance</span>
                  <i className="ti ti-wallet" style={{ color: "var(--brand-green-light)" }} aria-hidden="true" />
                </div>
                <div style={{ color: "var(--brand-green-light)", fontSize: 36, fontWeight: 700, marginBottom: 20 }}>₹8,45,200</div>
                {[
                  { ic: "ti-arrow-up-right", c: "#22C55E", t: "Fund added", v: "+₹25,000" },
                  { ic: "ti-arrows-exchange", c: "#4ADE80", t: "Wallet transfer", v: "₹12,500" },
                  { ic: "ti-cash", c: "#F59E0B", t: "Credit request", v: "₹50,000" },
                ].map((r,i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", background: "var(--bg-elevated)", borderRadius: 10, marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 16 }} aria-hidden="true" />
                      <span style={{ fontSize: 13 }}>{r.t}</span>
                    </div>
                    <span style={{ color: r.c, fontSize: 13, fontWeight: 500 }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Bill Auto Fetch */}
        <section className="section" id="bill-payments" style={{ background: "var(--bg-base)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div className="card" style={{ borderRadius: 16, padding: 32, position: "relative", minHeight: 320 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 24 }}>
                {[
                  ["ti-bolt", "#F59E0B"],
                  ["ti-droplet", "#06B6D4"],
                  ["ti-flame", "#EF4444"],
                  ["ti-phone", "#1E8C45"],
                  ["ti-wifi", "#8B5CF6"],
                  ["ti-device-tv", "#1B2B6B"],
                ].map(([ic, c], i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)", borderRadius: 10, padding: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`ti ${ic}`} style={{ color: c, fontSize: 22 }} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", padding: 16, background: "rgba(30,140,69,0.1)", border: "1px solid var(--border-green)", borderRadius: 10 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 4 }}>Bills fetched</div>
                <div style={{ color: "var(--brand-green-light)", fontSize: 28, fontWeight: 700 }}>423 <i className="ti ti-circle-check" style={{ fontSize: 22 }} /></div>
              </div>
            </div>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-bolt" style={{ color: "var(--brand-green-light)", fontSize: 22 }} aria-hidden="true" />
              </div>
              <div className="eyebrow">BILL MANAGEMENT</div>
              <h2 className="sec-h">Auto-fetch bills from every provider</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>Connect once to 50+ utility providers across electricity, water, gas, telecom, broadband, and DTH. Bills are fetched automatically, categorized, and ready to process. No more logging into each portal separately.</p>
              <div style={{ marginTop: 16 }}>
                <span className="feature-pill">50+ Providers</span>
                <span className="feature-pill">Auto-sync</span>
                <span className="feature-pill">All categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Commission & Rewards */}
        <section className="section" id="commission" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="eyebrow">RETAILER EARNINGS</div>
              <h2 className="sec-h">Retailers earn on every transaction</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>Build a loyal retailer network with automatic commissions, reward programs, and loyalty tracking that keeps your partners engaged and growing.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div className="card" style={{ border: "1px solid var(--border-green)", borderRadius: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <i className="ti ti-coins" style={{ color: "var(--accent-amber)", fontSize: 22 }} aria-hidden="true" />
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Commission Engine</h3>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>Configure commission percentages by transaction type. Every eligible sale automatically calculates and credits commission to the retailer wallet. No manual calculation, no disputes.</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80, margin: "20px 0 12px" }}>
                  {[40,55,48,62,58,75].map((h,i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? "linear-gradient(180deg,#4ADE80,#1E8C45)" : "linear-gradient(180deg,rgba(74,222,128,0.6),rgba(30,140,69,0.4))", borderRadius: "4px 4px 0 0" }} />
                  ))}
                </div>
                <div style={{ color: "var(--accent-amber)", fontSize: 20, fontWeight: 700 }}>₹1,87,340 earned this month</div>
                <div style={{ color: "var(--brand-green-mid)", fontSize: 13 }}>+34% vs last month</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { ic: "ti-trophy", c: "var(--accent-amber)", t: "Rewards Program", b: "Set up reward rules for milestones — transaction count, volume thresholds, or special promotions. Retailers see their progress toward the next reward in their dashboard.", p: ["Milestone rewards","Custom rules"] },
                  { ic: "ti-star", c: "var(--brand-green-light)", t: "Loyalty Tracking", b: "Retailers accumulate loyalty points on every transaction. Redeem against wallet credits, fee waivers, or special offers. Keeps the network active and motivated.", p: ["Points on every txn","Redeem anytime"] },
                ].map((r,i) => (
                  <div key={i} className="card" style={{ background: "var(--bg-elevated)", borderRadius: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 22 }} aria-hidden="true" />
                      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{r.t}</h3>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>{r.b}</p>
                    {r.p.map((p) => <span key={p} className="feature-pill">{p}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Unified Dashboard */}
        <section className="section" id="dashboard" style={{ background: "var(--bg-base)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(30,140,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="ti ti-layout-dashboard" style={{ color: "var(--brand-green-light)", fontSize: 22 }} aria-hidden="true" />
              </div>
              <div className="eyebrow">OPERATIONS DASHBOARD</div>
              <h2 className="sec-h">See everything. Control everything. Live.</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>Revenue trends, billed vs collected ratios, payment method breakdowns, customer growth, outstanding dues — all updating in real time. No more waiting for month-end reports or chasing the finance team for numbers.</p>
              <div style={{ marginTop: 16 }}>
                <span className="feature-pill">Real-time data</span>
                <span className="feature-pill">Revenue trends</span>
                <span className="feature-pill">Collection tracking</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="card" style={{ padding: 12, borderRadius: 10 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 8 }}>Revenue Trend</div>
                <svg viewBox="0 0 100 40" width="100%" height="50">
                  <polygon points="0,32 20,24 40,28 60,18 80,14 100,8 100,40 0,40" fill="rgba(34,197,94,0.15)" />
                  <polyline points="0,32 20,24 40,28 60,18 80,14 100,8" fill="none" stroke="#22C55E" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="card" style={{ padding: 12, borderRadius: 10 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 8 }}>Payment Methods</div>
                <svg viewBox="0 0 60 60" width="100%" height="60">
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#1E8C45" strokeWidth="10" strokeDasharray="60 80" />
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#06B6D4" strokeWidth="10" strokeDasharray="40 100" strokeDashoffset="-60" />
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#F59E0B" strokeWidth="10" strokeDasharray="38 100" strokeDashoffset="-100" />
                </svg>
              </div>
              <div className="card" style={{ padding: 12, borderRadius: 10 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 11, marginBottom: 10 }}>Billed vs Collected</div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, marginBottom: 6 }}><div style={{ width: "100%", height: "100%", background: "var(--text-muted)", borderRadius: 4 }} /></div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4 }}><div style={{ width: "92%", height: "100%", background: "var(--brand-green-mid)", borderRadius: 4 }} /></div>
                <div style={{ color: "var(--brand-green-light)", fontSize: 14, fontWeight: 600, marginTop: 8 }}>92% collected</div>
              </div>
              <div className="card" style={{ padding: 12, borderRadius: 10 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 11 }}>New Customers</div>
                <div style={{ color: "var(--text-primary)", fontSize: 22, fontWeight: 700 }}>+218</div>
                <svg viewBox="0 0 80 20" width="100%" height="20">
                  <polyline points="0,16 20,12 40,8 60,10 80,4" fill="none" stroke="#22C55E" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — Role Based Access */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="eyebrow">BUILT FOR EVERY ROLE</div>
              <h2 className="sec-h">One platform, every team member covered</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>Each role sees exactly what they need — nothing more, nothing less.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }} className="role-grid">
              {[
                { c: "#1B2B6B", ic: "ti-shield", t: "Super Admin", items: ["Full platform control","Treasury management","Provider configuration","All reports"] },
                { c: "#2563EB", ic: "ti-settings", t: "Operations", items: ["Bill management","Customer management","Provider management","Request handling"] },
                { c: "#1E8C45", ic: "ti-calculator", t: "Finance Team", items: ["Wallet management","Ledger & transactions","Bank accounts & UPI","Settlement tracking"] },
                { c: "#DC2626", ic: "ti-headset", t: "Support", items: ["Complaint management","Refund processing","Notification dispatch"] },
                { c: "#F59E0B", ic: "ti-coin", t: "Retailer / Partner", items: ["Earn commissions","Use wallet","Submit bills","Track rewards"] },
              ].map((r) => (
                <div key={r.t} className="card hover-lift" style={{ borderTop: `3px solid ${r.c}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${r.c}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <i className={`ti ${r.ic}`} style={{ color: r.c, fontSize: 18 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 600 }}>{r.t}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {r.items.map((it) => (
                      <li key={it} style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, display: "flex", gap: 6 }}>
                        <i className="ti ti-check" style={{ color: "var(--brand-green-mid)", fontSize: 14 }} aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 900px){.role-grid{grid-template-columns:repeat(2,1fr) !important}}`}</style>
        </section>

        {/* SECTION 8 — Before/After */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 40 }}>What changes when you switch to Gatimaan</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{ border: "1px solid var(--border-subtle)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: 14, background: "rgba(239,68,68,0.08)", color: "var(--text-muted)", fontWeight: 500 }}>✗ Without Gatimaan</div>
                <div style={{ padding: 20 }}>
                  {["Log into 5+ provider portals daily","Track commissions in Excel, disputes over WhatsApp","No real-time wallet visibility","Month-end treasury reconciliation","No audit trail for user actions"].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                      <i className="ti ti-x" style={{ color: "var(--accent-red)", opacity: 0.6 }} aria-hidden="true" />
                      <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: "1px solid var(--border-green)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: 14, background: "rgba(30,140,69,0.1)", color: "var(--brand-green-light)", fontWeight: 500 }}>✓ With Gatimaan</div>
                <div style={{ padding: 20 }}>
                  {["1 dashboard, auto-fetch from 50+ providers","Built-in commission engine, auto-calculated, fully logged","Live wallet balances and transfer history","Real-time treasury and ledger view","Complete activity + login logs, full audit trail"].map((t) => (
                    <div key={t} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                      <i className="ti ti-check" style={{ color: "var(--brand-green-mid)" }} aria-hidden="true" />
                      <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — How It Works */}
        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container">
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 56 }}>Up and running in 3 simple steps</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, position: "relative" }} className="steps-grid">
              {[
                { ic: "ti-user-plus", t: "Sign up & onboard", b: "Create your account, add your team members and assign their roles and permissions." },
                { ic: "ti-plug", t: "Connect your providers", b: "Add utility providers, configure billing categories, set commission and reward rules for your retailer network." },
                { ic: "ti-rocket", t: "Start operating", b: "Fetch bills automatically, collect payments, manage wallets and track commissions — everything from one dashboard from day one." },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--brand-green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 700, fontSize: 18 }}>{i + 1}</div>
                  <i className={`ti ${s.ic}`} style={{ color: "var(--brand-green-light)", fontSize: 28, marginBottom: 12, display: "block" }} aria-hidden="true" />
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 600 }}>{s.t}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        {/* SECTION 10 — Final CTA */}
        <section style={{ position: "relative", padding: "100px 24px", textAlign: "center", background: "var(--bg-base)", overflow: "hidden" }}>
          <AuroraBg />
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>Ready to run your utility business from one place?</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 28 }}>Join businesses already managing bills, wallets, commissions and settlements on Gatimaan Payments.</p>
            <Link href="/signup" className="btn-primary" style={{ padding: "14px 36px", fontSize: 14, borderRadius: 12, display: "inline-block" }}>Get Started Free</Link>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 16 }}>No credit card required · Setup in under 10 minutes</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
