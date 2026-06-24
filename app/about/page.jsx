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
            <h1 className="fade-up" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, animationDelay: ".1s", color: "var(--text-primary)" }}>Built For The Backbone Of Utility Payments</h1>
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

        {/* OUR REACH — India Map */}
        <section className="section" style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div data-animate="up">
              <div className="badge-pill" style={{ marginBottom: 18 }}><span className="dot" />OUR REACH</div>
              <h2 className="sec-h" style={{ marginBottom: 12 }}>Expanding Across India</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>From our headquarters in Delhi, we're connecting utility payment businesses across every major state.</p>
            </div>
            <div data-animate="scale" style={{ position: "relative", maxWidth: 620, margin: "48px auto 0" }}>
              <img src="/img/map.png" alt="India map" style={{ width: "100%", height: "auto", display: "block", opacity: 0.92 }} />
              <svg viewBox="0 0 1828 2046" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}>
                <defs>
                  <radialGradient id="pulseG"><stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" /><stop offset="100%" stopColor="#22C55E" stopOpacity="0" /></radialGradient>
                </defs>
                {/* Delhi HQ at (621, 615). Coordinates from real lat/long projected onto 1828x2046 map.png */}
                {[
                  { tx: 491,  ty: 245,  name: "Srinagar",     dly: 0    },
                  { tx: 540,  ty: 470,  name: "Amritsar",     dly: 0.05 },
                  { tx: 621,  ty: 446,  name: "Shimla",       dly: 0.1  },
                  { tx: 600,  ty: 510,  name: "Chandigarh",   dly: 0.15 },
                  { tx: 665,  ty: 500,  name: "Dehradun",     dly: 0.2  },
                  { tx: 460,  ty: 780,  name: "Jaipur",       dly: 0.3  },
                  { tx: 720,  ty: 700,  name: "Agra",         dly: 0.35 },
                  { tx: 823,  ty: 736,  name: "Lucknow",      dly: 0.4  },
                  { tx: 940,  ty: 760,  name: "Varanasi",     dly: 0.45 },
                  { tx: 371,  ty: 979,  name: "Gandhinagar",  dly: 0.5  },
                  { tx: 371,  ty: 1005, name: "Ahmedabad",    dly: 0.55 },
                  { tx: 460,  ty: 1100, name: "Surat",        dly: 0.6  },
                  { tx: 1062, ty: 819,  name: "Patna",        dly: 0.7  },
                  { tx: 1249, ty: 706,  name: "Gangtok",      dly: 0.8  },
                  { tx: 1426, ty: 819,  name: "Shillong",     dly: 0.85 },
                  { tx: 1421, ty: 785,  name: "Guwahati",     dly: 0.9  },
                  { tx: 1518, ty: 719,  name: "Itanagar",     dly: 0.95 },
                  { tx: 1470, ty: 760,  name: "Tezpur",       dly: 0.97 },
                  { tx: 1610, ty: 740,  name: "Tinsukia",     dly: 0.99 },
                  { tx: 1580, ty: 790,  name: "Dibrugarh",    dly: 1.01 },
                  { tx: 1680, ty: 700,  name: "Pasighat",     dly: 1.03 },
                  { tx: 1490, ty: 850,  name: "Dimapur",      dly: 1.05 },
                  { tx: 1239, ty: 1018, name: "Kolkata",      dly: 1.05 },
                  { tx: 1085, ty: 968,  name: "Ranchi",       dly: 1.1  },
                  { tx: 645,  ty: 985,  name: "Bhopal",       dly: 1.15 },
                  { tx: 870,  ty: 1105, name: "Raipur",       dly: 1.2  },
                  { tx: 1098, ty: 1180, name: "Bhubaneswar",  dly: 1.25 },
                  { tx: 400,  ty: 1260, name: "Mumbai",       dly: 1.3  },
                  { tx: 510,  ty: 1310, name: "Pune",         dly: 1.35 },
                  { tx: 700,  ty: 1378, name: "Hyderabad",    dly: 1.4  },
                  { tx: 808,  ty: 1438, name: "Amaravati",    dly: 1.45 },
                  { tx: 452,  ty: 1502, name: "Panaji",       dly: 1.5  },
                  { tx: 650,  ty: 1679, name: "Bengaluru",    dly: 1.55 },
                  { tx: 530,  ty: 1820, name: "Kochi",        dly: 1.65 },
                  { tx: 620,  ty: 1923, name: "Thiruvananthapuram", dly: 1.7 },
                ].map((d, i) => {
                  const cx = 621, cy = 615;
                  const mx = (cx + d.tx) / 2 + ((d.tx - cx) * 0.0);
                  const my = (cy + d.ty) / 2 - 24;
                  return (
                    <g key={i} className="reach" style={{ "--dly": `${d.dly}s` }}>
                      <path d={`M ${cx} ${cy} Q ${mx} ${my} ${d.tx} ${d.ty}`} className="reach-line" />
                      <circle cx={d.tx} cy={d.ty} r="14" className="dest-pin" style={{ animationDelay: `${d.dly + 1.4}s` }} />
                      <circle cx={d.tx} cy={d.ty} r="50" fill="transparent" className="hover-zone" />
                      <g className="dest-label" transform={`translate(${d.tx},${d.ty - 38})`}>
                        <rect x="-72" y="-22" width="144" height="32" rx="8" fill="rgba(15,27,36,0.94)" />
                        <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700">{d.name}</text>
                        <polygon points="-8,10 8,10 0,18" fill="rgba(15,27,36,0.94)" />
                      </g>
                    </g>
                  );
                })}
                {/* Delhi HQ */}
                <g className="delhi-group">
                  <circle cx="621" cy="615" r="60" fill="none" stroke="#22C55E" strokeWidth="4" className="delhi-pulse" />
                  <circle cx="621" cy="615" r="26" fill="#22C55E" className="delhi-pin" />
                  <circle cx="621" cy="615" r="12" fill="#fff" />
                  <g transform="translate(621, 543)">
                    <rect x="-78" y="-24" width="156" height="34" rx="8" fill="rgba(15,27,36,0.94)" />
                    <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="700">Delhi HQ</text>
                    <polygon points="-10,10 10,10 0,22" fill="rgba(15,27,36,0.94)" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <style>{`
            @keyframes pinBlink { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.55; transform: scale(0.85); } }
            @keyframes pinSoftBlink { 0%,100% { opacity: 0.85; } 50% { opacity: 0.45; } }
            @keyframes delhiPulse { 0% { r: 26; opacity: 0.6; } 100% { r: 90; opacity: 0; } }
            @keyframes lineGrow { 0% { stroke-dashoffset: 1200; opacity: 0; } 15% { opacity: 0.55; } 100% { stroke-dashoffset: 0; opacity: 0.55; } }
            @keyframes pinAppear { 0% { opacity: 0; transform: scale(0.4); } 100% { opacity: 1; transform: scale(1); } }
            .delhi-pin { transform-origin: 621px 615px; animation: pinBlink 1.5s ease-in-out infinite; }
            .delhi-pulse { transform-origin: 621px 615px; animation: delhiPulse 2s ease-out infinite; }
            .reach-line { fill: none; stroke: #22C55E; stroke-width: 4; stroke-dasharray: 18 12; stroke-linecap: round; opacity: 0; animation: lineGrow 1.4s ease-out var(--dly) forwards; }
            .dest-pin { fill: #16A34A; opacity: 0; transform-origin: center; animation: pinAppear 400ms ease-out forwards, pinSoftBlink 3s ease-in-out 2s infinite; }
            .dest-label { opacity: 0; transition: opacity 200ms ease; pointer-events: none; }
            .reach { pointer-events: auto; }
            .reach:hover .dest-label { opacity: 1; }
            .reach:hover .reach-line { opacity: 0.9 !important; stroke-width: 6; }
            .reach:hover .dest-pin { opacity: 1; transform: scale(1.3); }
            .reach { pointer-events: auto; cursor: pointer; }
            .delhi-group:hover ~ .reach .reach-line { opacity: 0.7; }
          `}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>Why Businesses Choose Gatimaan Payments</h2>
            <div data-stagger className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {[
                { ic: "ti-layout-grid", c: "var(--brand-green)", bg: "var(--brand-green-pale)", t: "All-In-One, Not Bolt-On", b: "Bills, wallets, treasury, commissions, analytics and compliance built together from the ground up — not patched together from separate tools." },
                { ic: "ti-settings-2", c: "var(--accent-blue)", bg: "rgba(59,130,246,0.1)", t: "Built For Both Operators And Consumers", b: "The platform serves the full chain — from business operators managing multi-role teams, retailer networks, and treasury, to end consumers receiving faster bill processing, transparent payments, and seamless utility services." },
                { ic: "ti-shield-check", c: "var(--brand-navy)", bg: "rgba(27,43,107,0.08)", t: "Financial Control Built In", b: "From wallet operations to treasury management to bank account linking — the financial depth goes far beyond a typical billing CRM." },
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

        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container">
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 48 }}>What Drives Us</h2>
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
            <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 20, color: "#fff" }}>Want To See Gatimaan Payments In Action?</h2>
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
