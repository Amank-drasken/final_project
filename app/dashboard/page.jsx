import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KycModal from "../../components/KycModal";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64, minHeight: "calc(100vh - 64px)", background: "var(--bg-base)" }}>
        <div className="container" style={{ padding: "48px 24px" }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Welcome to your dashboard</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>This is a placeholder. The real CRM lives at utility.drasken.dev.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {[
              ["Total collected", "₹28.4L", "var(--brand-green-light)"],
              ["Wallet balance", "₹8.42L", "var(--accent-cyan)"],
              ["Commission", "₹1.87L", "var(--accent-amber)"],
              ["Retailers", "218", "var(--text-primary)"],
            ].map(([l,v,c]) => (
              <div key={l} className="card" style={{ borderRadius: 12 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 8 }}>{l}</div>
                <div style={{ color: c, fontSize: 28, fontWeight: 700 }}>{v}</div>
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
