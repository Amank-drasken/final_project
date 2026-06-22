"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroDashboard() {
  const [view, setView] = useState(0);
  const timer = useRef(null);

  const start = () => { stop(); timer.current = setInterval(() => setView((v) => (v + 1) % 3), 3500); };
  const stop = () => { if (timer.current) clearInterval(timer.current); };
  const go = (i) => { setView(i); start(); };

  useEffect(() => { start(); return stop; }, []);

  const tabs = ["Revenue", "Wallet", "Commission"];
  const tabStyle = (active) => ({
    fontSize: 11, padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontWeight: 500,
    transition: "all .25s",
    color: active ? "#4ADE80" : "rgba(255,255,255,0.3)",
    background: active ? "rgba(30,140,69,0.15)" : "transparent",
  });

  return (
    <div style={{ animation: "dashEmerge 1s ease-out 0.7s both", maxWidth: 700, margin: "60px auto 0", padding: "0 16px" }}>
      <div style={{ transform: "perspective(900px) rotateX(4deg)", transformOrigin: "bottom center" }} className="dash-tilt">
        <div style={{ display: "flex", background: "#0A1419", border: "1px solid rgba(30,140,69,0.15)", borderRadius: "12px 12px 0 0", boxShadow: "0 -10px 60px rgba(30,140,69,0.09)", minHeight: 300, overflow: "hidden" }}>
          {/* Sidebar */}
          <div style={{ width: 130, background: "#071013", borderRight: "1px solid rgba(255,255,255,0.04)", padding: "14px 8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: "#1E8C45", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="ti ti-bolt" aria-hidden="true" style={{ color: "#fff", fontSize: 12 }} />
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Gatimaan</span>
            </div>
            {[
              ["ti-layout-dashboard", "Dashboard", true],
              ["ti-file-invoice", "Bills"],
              ["ti-wallet", "Wallet"],
              ["ti-users", "Retailers"],
              ["ti-coin", "Commissions"],
              ["ti-building-bank", "Treasury"],
              ["ti-chart-bar", "Reports"],
            ].map(([ic, l, a]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px", fontSize: 11, borderRadius: 5, marginBottom: 2, background: a ? "rgba(30,140,69,0.12)" : "transparent", color: a ? "#4ADE80" : "rgba(255,255,255,0.25)" }}>
                <i className={`ti ${ic}`} aria-hidden="true" />
                <span>{l}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: "14px 16px", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 500 }}>Good afternoon, Admin</div>
                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>Friday, 20 June 2026</div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {tabs.map((t, i) => (
                  <span key={t} onClick={() => go(i)} style={tabStyle(view === i)}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", minHeight: 210 }}>
              <View visible={view === 0}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                  <StatCard bg="rgba(30,140,69,0.08)" border="rgba(30,140,69,0.12)" label="Total collected" value="₹28.4L" color="#4ADE80" />
                  <StatCard bg="rgba(6,182,212,0.05)" border="rgba(6,182,212,0.1)" label="Wallet balance" value="₹8.42L" color="#22d3ee" />
                </div>
                <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Revenue trend</span>
                    <span style={{ color: "#22C55E", fontSize: 11 }}>+23%</span>
                  </div>
                  <svg viewBox="0 0 260 40" width="100%" height="40" preserveAspectRatio="none">
                    <polygon points="0,35 30,28 60,32 90,20 120,22 150,15 180,17 210,8 240,12 260,5 260,40 0,40" fill="rgba(34,197,94,0.08)" />
                    <polyline points="0,35 30,28 60,32 90,20 120,22 150,15 180,17 210,8 240,12 260,5" fill="none" stroke="#22C55E" strokeWidth="1.5" />
                  </svg>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
                  {[["Bills","423"],["Payments","₹4.8L"],["Retailers","218"],["Settled","92%"]].map(([l,v]) => (
                    <div key={l} style={{ background: "rgba(255,255,255,0.025)", borderRadius: 6, padding: 6, textAlign: "center" }}>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500 }}>{v}</div>
                      <div style={{ color: "rgba(255,255,255,0.28)", fontSize: 11 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </View>

              <View visible={view === 1}>
                <div style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.08)", borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Total wallet balance</div>
                  <div style={{ color: "#22d3ee", fontSize: 22, fontWeight: 700 }}>₹8,45,200</div>
                </div>
                {[
                  { ic:"ti-arrow-up-right", icBg:"rgba(34,197,94,0.1)", icCol:"#22C55E", t:"Fund added", s:"Retailer #142", v:"+₹25,000", vc:"#22C55E" },
                  { ic:"ti-arrows-exchange", icBg:"rgba(30,140,69,0.1)", icCol:"#4ADE80", t:"Wallet transfer", s:"W2W instant", v:"₹12,500", vc:"#4ADE80" },
                  { ic:"ti-cash", icBg:"rgba(245,158,11,0.1)", icCol:"#F59E0B", t:"Credit request", s:"Pending", v:"₹50,000", vc:"#F59E0B" },
                ].map((r,i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 9, background: "rgba(255,255,255,0.025)", borderRadius: 8, marginBottom: 5 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: r.icBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className={`ti ${r.ic}`} style={{ color: r.icCol, fontSize: 14 }} aria-hidden="true" />
                      </div>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 500 }}>{r.t}</div>
                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>{r.s}</div>
                      </div>
                    </div>
                    <div style={{ color: r.vc, fontSize: 12, fontWeight: 500 }}>{r.v}</div>
                  </div>
                ))}
              </View>

              <View visible={view === 2}>
                <div style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.1)", borderRadius: 8, padding: 12, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Commission this month</div>
                    <div style={{ color: "#FBBF24", fontSize: 22, fontWeight: 700 }}>₹1,87,340</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <i className="ti ti-trending-up" style={{ color: "#22C55E", fontSize: 13 }} aria-hidden="true" />
                    <span style={{ color: "#22C55E", fontSize: 11 }}>+34%</span>
                  </div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 6 }}>Top earners</div>
                {[
                  { g:"linear-gradient(135deg,#F59E0B,#FBBF24)", in:"RK", n:"Rajesh Kumar", t:"142 txns", a:"₹24,500", ac:"#FBBF24" },
                  { g:"linear-gradient(135deg,#1E8C45,#22C55E)", in:"PS", n:"Priya Sharma", t:"128 txns", a:"₹21,200", ac:"#4ADE80" },
                  { g:"linear-gradient(135deg,#06B6D4,#22d3ee)", in:"AV", n:"Amit Verma", t:"98 txns", a:"₹18,750", ac:"#22d3ee" },
                ].map((r,i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, background: "rgba(255,255,255,0.025)", borderRadius: 8, marginBottom: 5 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: r.g, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 600 }}>{r.in}</div>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 500 }}>{r.n}</div>
                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>{r.t}</div>
                      </div>
                    </div>
                    <div style={{ color: r.ac, fontSize: 12, fontWeight: 500 }}>{r.a}</div>
                  </div>
                ))}
              </View>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 12 }}>
              {[0,1,2].map((i) => (
                <span key={i} onClick={() => go(i)} style={{
                  height: 3, borderRadius: 2, cursor: "pointer", transition: "all .4s",
                  width: view === i ? 34 : 26,
                  background: view === i ? "linear-gradient(90deg,#1E8C45,#4ADE80)" : "rgba(255,255,255,0.12)",
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .dash-tilt { transform: none !important; }
        }
      `}</style>
    </div>
  );
}

function View({ visible, children }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(8px)",
      transition: "opacity .6s, transform .6s",
      pointerEvents: visible ? "auto" : "none",
    }}>{children}</div>
  );
}

function StatCard({ bg, border, label, value, color }) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, padding: 10 }}>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 4 }}>{label}</div>
      <div style={{ color, fontSize: 18, fontWeight: 700 }}>{value}</div>
    </div>
  );
}
