"use client";
import Link from "next/link";

export default function HeroViber() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-page)", overflow: "hidden" }}>
      {/* Background blobs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div className="blob" style={{ width: 600, height: 500, top: -100, left: -150, background: "radial-gradient(circle, rgba(134,239,172,0.5), rgba(134,239,172,0) 70%)", animation: "blobMorph 14s ease-in-out infinite alternate", "--tx": "40px", "--ty": "30px", "--s": 1.1 }} />
        <div className="blob" style={{ width: 500, height: 400, top: 50, right: -100, background: "radial-gradient(circle, rgba(147,197,253,0.4), rgba(147,197,253,0) 70%)", animation: "blobMorph 18s ease-in-out 4s infinite alternate", "--tx": "-30px", "--ty": "50px", "--s": 0.9 }} />
        <div className="blob" style={{ width: 400, height: 350, bottom: -50, left: "40%", background: "radial-gradient(circle, rgba(196,181,253,0.35), rgba(196,181,253,0) 70%)", animation: "blobMorph 12s ease-in-out 8s infinite alternate", "--tx": "20px", "--ty": "-30px", "--s": 1.05 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(22,163,74,0.06) 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Floating UI cards */}
      <div className="hero-floats" aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        {/* Card 1 — Revenue */}
        <div className="floating-card" style={{ top: "16%", left: "4%", width: 220, "--r": "-4deg", "--delay": "600ms", "--fdur": "5s", pointerEvents: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Revenue Today</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-green-mid)" }} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "var(--brand-green-dark)" }}>₹1,24,500</div>
          <svg viewBox="0 0 180 30" width="100%" height="24" style={{ marginTop: 6 }}>
            <polyline points="0,24 30,18 60,20 90,12 120,14 150,8 180,4" fill="none" stroke="#22C55E" strokeWidth="1.5" />
            <polygon points="0,24 30,18 60,20 90,12 120,14 150,8 180,4 180,30 0,30" fill="rgba(34,197,94,0.12)" />
          </svg>
        </div>

        {/* Card 2 — GMPay Wallet */}
        <div className="floating-card" style={{ top: "20%", right: "3%", width: 200, "--r": "3deg", "--delay": "800ms", "--fdur": "6.5s", "--fdelay": "1s", pointerEvents: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <i className="ti ti-wallet" style={{ color: "var(--accent-cyan)", fontSize: 16 }} aria-hidden="true" />
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>GMPay Wallet</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)" }}>₹8,45,200</div>
          <button style={{ marginTop: 8, padding: "4px 10px", background: "var(--brand-green-pale)", color: "var(--brand-green-dark)", border: "none", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>Transfer →</button>
        </div>

        {/* Card 3 — Bill fetched */}
        <div className="floating-card" style={{ top: "44%", left: "1%", width: 220, "--r": "2deg", "--delay": "1000ms", "--fdur": "4.5s", "--fdelay": "0.5s", pointerEvents: "auto" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="ti ti-check" style={{ color: "var(--brand-green)", fontSize: 16 }} aria-hidden="true" />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>Bill Fetched</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)" }}>MSEDCL · ₹2,340 · Auto</div>
            </div>
          </div>
        </div>

        {/* Card 4 — Commission */}
        <div className="floating-card" style={{ bottom: "26%", right: "2%", width: 210, "--r": "-2deg", "--delay": "1200ms", "--fdur": "7s", "--fdelay": "1.5s", pointerEvents: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <i className="ti ti-trophy" style={{ color: "var(--accent-amber)", fontSize: 16 }} aria-hidden="true" />
            <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-secondary)" }}>Commission Earned</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#F59E0B" }}>₹24,500</div>
          <div style={{ fontSize: 11, color: "var(--brand-green-dark)", fontWeight: 600 }}>+34% ↑ this month</div>
        </div>

        {/* Card 5 — Retailers */}
        <div className="floating-card" style={{ bottom: "20%", left: "4%", width: 190, "--r": "3deg", "--delay": "1400ms", "--fdur": "5.5s", "--fdelay": "2s", pointerEvents: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <i className="ti ti-users" style={{ color: "var(--accent-blue)", fontSize: 16 }} aria-hidden="true" />
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Active Retailers</span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)" }}>218</div>
          <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Across 5 states</div>
        </div>
      </div>

      {/* Center content */}
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", zIndex: 2 }}>
        <img className="fade-up hero-logo" src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 80, width: "auto", borderRadius: 10, margin: "0 auto 12px", display: "block", boxShadow: "0 0 0 0 rgba(34,197,94,0.4)", animation: "logoEntry 600ms cubic-bezier(0.34,1.56,0.64,1) both, logoFlash 1200ms ease-out 600ms both" }} />
        <div className="fade-up" style={{ fontSize: 28, fontWeight: 800, letterSpacing: 0.5, marginBottom: 16, animationDelay: ".08s" }}>
          <span style={{ color: "var(--brand-navy)" }}>Gati</span><span style={{ color: "var(--brand-green-mid)" }}>Maan</span>
        </div>
        <div className="badge-pill fade-up" style={{ marginBottom: 20, animationDelay: ".16s" }}>
          <span className="dot" />
          <span>UTILITY BILLING &amp; OPERATIONS PLATFORM</span>
        </div>
        <h1 className="fade-up" style={{ fontSize: "clamp(34px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 12px", animationDelay: ".24s", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          One Platform To Manage <span className="gradient-text">All Utility Operations</span>
        </h1>
        <p className="fade-up" style={{ fontSize: 16, fontWeight: 600, color: "var(--brand-green-dark)", maxWidth: 580, margin: "0 auto 16px", borderBottom: "2px solid rgba(22,163,74,0.3)", paddingBottom: 6, display: "inline-block", animationDelay: ".32s" }}>
          India's First B2B &amp; B2B2C Platform Guaranteeing Rewards &amp; Commission On Every Transaction
        </p>
        <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "16px auto 24px", animationDelay: ".4s" }}>
          Fetch bills, manage wallets, auto-calculate commissions and settle payments for your retailer network — all from one dashboard.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center", marginBottom: 36, animationDelay: ".48s", flexWrap: "wrap" }}>
          <Link href="/signup" className="btn-primary">Get Started Free</Link>
          <Link href="/contact" style={{ color: "var(--brand-green)", fontSize: 15, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
            Book A Demo <i className="ti ti-chevron-right" aria-hidden="true" />
          </Link>
        </div>
        <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 36, flexWrap: "wrap", animationDelay: ".56s" }}>
          {[["50+","Utility Providers"],["5","User Roles"],["99.8%","Settlement Rate"],["₹2Cr+","Monthly Processed"]].map(([n,l],i) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {i > 0 && <div style={{ width: 1, height: 36, background: "var(--border-default)" }} />}
              <div>
                <div style={{ color: "var(--text-primary)", fontSize: 28, fontWeight: 800 }}>{n}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes logoEntry { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes logoFlash {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          60% { box-shadow: 0 0 0 16px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  );
}
