"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const path = usePathname() || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = (active) => ({
    fontSize: 14,
    fontWeight: 500,
    color: active ? "var(--brand-green-dark)" : "var(--text-secondary)",
    borderBottom: active ? "2px solid var(--brand-green-mid)" : "2px solid transparent",
    paddingBottom: 4,
    transition: "color 150ms",
  });

  const mLink = {
    fontSize: 16,
    fontWeight: 500,
    padding: "14px 12px",
    color: "var(--text-primary)",
    borderRadius: 8,
    transition: "background 150ms",
    display: "block",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: 68,
        background: "var(--header-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "rgba(22,163,74,0.15)" : "rgba(229,231,235,0.8)"}`,
        zIndex: 100,
        transition: "border-color 200ms",
      }}
    >
      <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 48, width: "auto", borderRadius: 6 }} />
          <span className="brand-text" style={{ fontSize: 15, fontWeight: 600 }}>
            <span className="gati">Gati</span><span className="maan">Maan</span><span className="payments"> Payments</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          <Link href="/" style={linkStyle(path === "/")}>Home</Link>
          <Link href="/about" style={linkStyle(path === "/about")}>About Us</Link>
          <div
            style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/services"
              style={{ ...linkStyle(path === "/services"), display: "inline-flex", alignItems: "center", gap: 4, userSelect: "none" }}
            >
              Services <i className="ti ti-chevron-down" aria-hidden="true" style={{ fontSize: 14, transform: svcOpen ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
            </Link>
            {svcOpen && (
              <>
                <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 14 }} aria-hidden="true" />
                <div style={{ position: "absolute", top: "calc(100% + 12px)", left: 0, width: 260, background: "var(--bg-card)", border: "1px solid var(--border-green)", borderRadius: 12, padding: 10, boxShadow: "var(--shadow-lg)", animation: "fadeUp 200ms ease-out", zIndex: 1000 }}>
                  <a
                    href="/services"
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 12px", borderRadius: 8, transition: "background 150ms, transform 150ms", textDecoration: "none", color: "inherit" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-section-alt)"; e.currentTarget.style.transform = "translateX(3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="ti ti-bolt" style={{ color: "var(--brand-green)", fontSize: 18 }} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>Bill Payments</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Auto-fetch & manage utility bills</div>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
          <Link href="/contact" style={linkStyle(path === "/contact")}>Contact Us</Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/signin" className="desktop-cta" style={{ padding: "8px 20px", borderRadius: 9, border: "1.5px solid var(--border-green)", color: "var(--brand-green-dark)", fontSize: 14, fontWeight: 600, transition: "all 150ms" }}>Sign In</Link>
          <Link href="/signup" className="desktop-cta" style={{ padding: "8px 20px", borderRadius: 9, background: "linear-gradient(135deg,#16A34A,#22C55E)", color: "#fff", fontSize: 14, fontWeight: 600, boxShadow: "0 2px 8px rgba(22,163,74,0.25)" }}>Sign Up</Link>
          <button onClick={() => setMobile(!mobile)} className="mobile-menu-btn" aria-label="Menu" style={{ background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 24, cursor: "pointer", padding: 4 }}>
            <i className={`ti ${mobile ? "ti-x" : "ti-menu-2"}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobile && (
        <>
          <div onClick={() => setMobile(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15,27,36,0.55)", zIndex: 9998 }} />
          <aside style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(300px, 85vw)", background: "#FFFFFF", borderLeft: "1px solid var(--border-default)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4, boxShadow: "-12px 0 40px rgba(15,27,36,0.18)", zIndex: 9999, overflowY: "auto", animation: "drawerIn 240ms cubic-bezier(0.16,1,0.3,1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--border-default)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img src="/img/logo.jpeg" alt="Gatimaan" style={{ height: 32, borderRadius: 5 }} />
                <span style={{ fontSize: 14, fontWeight: 700 }}>
                  <span style={{ color: "var(--brand-navy)" }}>Gati</span><span style={{ color: "var(--brand-navy)" }}>Maan</span>
                </span>
              </div>
              <button onClick={() => setMobile(false)} aria-label="Close menu" style={{ background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 24, cursor: "pointer", padding: 4 }}>
                <i className="ti ti-x" aria-hidden="true" />
              </button>
            </div>
            {[
              { href: "/", label: "Home", icon: "ti-home" },
              { href: "/about", label: "About Us", icon: "ti-info-circle" },
              { href: "/services", label: "Services", icon: "ti-list-details" },
              { href: "/contact", label: "Contact Us", icon: "ti-mail" },
            ].map((item) => {
              const active = path === item.href;
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobile(false)} style={{
                  fontSize: 15, fontWeight: 600,
                  padding: "14px 14px",
                  color: active ? "var(--brand-green-dark)" : "var(--text-primary)",
                  background: active ? "var(--brand-green-pale)" : "transparent",
                  borderRadius: 10,
                  display: "flex", alignItems: "center", gap: 12,
                  transition: "background 150ms",
                }}>
                  <i className={`ti ${item.icon}`} style={{ fontSize: 18, color: active ? "var(--brand-green)" : "var(--text-muted)" }} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10, paddingTop: 20, borderTop: "1px solid var(--border-default)" }}>
              <Link href="/signin" onClick={() => setMobile(false)} style={{ padding: "13px", borderRadius: 10, border: "1.5px solid var(--border-green)", color: "var(--brand-green-dark)", textAlign: "center", fontWeight: 600, fontSize: 14 }}>Sign In</Link>
              <Link href="/signup" onClick={() => setMobile(false)} style={{ padding: "13px", borderRadius: 10, background: "linear-gradient(135deg,#16A34A,#22C55E)", color: "#fff", textAlign: "center", fontWeight: 600, fontSize: 14, boxShadow: "0 4px 12px rgba(22,163,74,0.25)" }}>Sign Up</Link>
            </div>
          </aside>
        </>
      )}

    </header>
  );
}
