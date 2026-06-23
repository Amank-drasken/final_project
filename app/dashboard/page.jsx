import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KycModal from "../../components/KycModal";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 68, minHeight: "calc(100vh - 68px)", background: "var(--bg-page)" }}>
        <div className="container" style={{ padding: "60px 24px" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "var(--text-primary)" }}>Welcome to your dashboard</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 28 }}>This is a placeholder. The full CRM lives at <a href="https://utility.drasken.dev" style={{ color: "var(--brand-green)" }}>utility.drasken.dev</a>.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {[
              ["Revenue Today", "₹1,24,500", "var(--brand-green-dark)"],
              ["GMPay Wallet", "₹8,45,200", "var(--accent-cyan)"],
              ["Commission", "₹1,87,340", "var(--accent-amber)"],
              ["Active Retailers", "218", "var(--text-primary)"],
            ].map(([l, v, c]) => (
              <div key={l} className="card card-hoverable">
                <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 8 }}>{l}</div>
                <div style={{ color: c, fontSize: 32, fontWeight: 800 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <KycModal />
    </>
  );
}
