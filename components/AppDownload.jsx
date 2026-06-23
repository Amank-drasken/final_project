export default function AppDownload() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0F1B24 0%, #1a3a2a 100%)", padding: "80px 0", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "10%", top: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.18), transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", right: "5%", bottom: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12), transparent 70%)", filter: "blur(60px)" }} />
      </div>
      <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div data-animate="left">
          <div style={{ color: "#4ADE80", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>AVAILABLE ON MOBILE</div>
          <h2 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px" }}>Manage your operations on the go</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 28 }}>Access bills, wallets, commissions, and retailer data from anywhere. GMPay mobile brings the full platform to your pocket.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#" style={storeBtn}><i className="ti ti-brand-apple" style={{ fontSize: 22 }} /> <div style={{ textAlign: "left" }}><div style={{ fontSize: 10, opacity: 0.6 }}>Download on the</div><div style={{ fontSize: 14, fontWeight: 600 }}>App Store</div></div></a>
            <a href="#" style={storeBtn}><i className="ti ti-brand-google-play" style={{ fontSize: 22 }} /> <div style={{ textAlign: "left" }}><div style={{ fontSize: 10, opacity: 0.6 }}>Get it on</div><div style={{ fontSize: 14, fontWeight: 600 }}>Google Play</div></div></a>
          </div>
        </div>
        <div data-animate="right" style={{ position: "relative", height: 380, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Phone rotate="-6deg" delay="0s" dur="4s" gradient="linear-gradient(180deg, #16A34A, #15803D)" label="GMPay Wallet" value="₹8,45,200" />
          <Phone rotate="6deg" delay="1s" dur="5.5s" gradient="linear-gradient(180deg, #06B6D4, #0891B2)" label="Dashboard" value="₹1,24,500" offset={60} />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .container { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const storeBtn = {
  display: "inline-flex", alignItems: "center", gap: 10,
  background: "#fff", color: "#0F1B24", padding: "10px 18px",
  borderRadius: 10, textDecoration: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  transition: "transform 200ms ease",
};

function Phone({ rotate, delay, dur, gradient, label, value, offset = 0 }) {
  return (
    <div style={{
      width: 180, height: 340, borderRadius: 28, background: "#0A1419",
      border: "2px solid rgba(255,255,255,0.08)", padding: 8,
      transform: `rotate(${rotate}) translateX(${offset}px)`,
      animation: `float ${dur} ease-in-out ${delay} infinite`,
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      position: "absolute",
    }}>
      <div style={{ width: "100%", height: "100%", borderRadius: 20, background: gradient, padding: 16, color: "#fff", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
        <div style={{ marginTop: 12, height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3 }}>
          <div style={{ width: "72%", height: "100%", background: "rgba(255,255,255,0.6)", borderRadius: 3 }} />
        </div>
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <div style={{ height: 36, background: "rgba(255,255,255,0.12)", borderRadius: 6 }} />
          <div style={{ height: 36, background: "rgba(255,255,255,0.12)", borderRadius: 6 }} />
          <div style={{ height: 36, background: "rgba(255,255,255,0.12)", borderRadius: 6 }} />
          <div style={{ height: 36, background: "rgba(255,255,255,0.12)", borderRadius: 6 }} />
        </div>
      </div>
    </div>
  );
}
