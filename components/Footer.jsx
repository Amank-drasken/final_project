import Link from "next/link";

export default function Footer() {
  const linkStyle = { fontSize: 13, color: "rgba(255,255,255,0.5)", transition: "color 150ms", display: "block", padding: "5px 0" };
  return (
    <footer style={{ background: "#0F1B24", padding: "80px 0 40px", color: "#fff", marginTop: 0 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 36, width: "auto", borderRadius: 6 }} />
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                <span style={{ color: "#fff" }}>Gati</span>
                <span style={{ color: "#4ADE80" }}>Maan</span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}> Payments</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "0 0 6px" }}>Swift. Secure. Simple. Your Bills, Paid.</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: "0 0 12px" }}>गतिमान पेमेंट्स: तेज, सुरक्षित, सरल!</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.6, margin: 0 }}>India's first B2B & B2B2C utility platform guaranteeing rewards & commission on every transaction.</p>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: 0.6 }}>Platform</h4>
            <Link href="/services" style={linkStyle}>Bill Payments</Link>
            <Link href="/#wallet" style={linkStyle}>Wallet System (GMPay)</Link>
            <Link href="/#commission" style={linkStyle}>Commissions & Rewards</Link>
            <Link href="/#dashboard" style={linkStyle}>Analytics</Link>
            <Link href="/#treasury" style={linkStyle}>Treasury</Link>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: 0.6 }}>Company</h4>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/about" style={linkStyle}>About Us</Link>
            <Link href="/contact" style={linkStyle}>Contact Us</Link>
            <Link href="#" style={linkStyle}>Careers</Link>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: 0.6 }}>Legal</h4>
            <Link href="#" style={linkStyle}>Privacy Policy</Link>
            <Link href="#" style={linkStyle}>Terms of Service</Link>
            <Link href="#" style={linkStyle}>Refund Policy</Link>
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2026 Gatimaan Payments. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>+91 70530 99911 · support@gatimaan.in</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
