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

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobile]);

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
        <Link href="/" style={{ display: "flex", alignItems: "flex-start", gap: 0, position: "relative" }}>
          <img src="/img/logo.jpeg" alt="Gatimaan Payments" style={{ height: 48, width: "auto", borderRadius: 6 }} />
          <sup style={{ fontSize: 9, fontWeight: 700, color: "var(--brand-green-dark)", lineHeight: 1, marginTop: 2, marginLeft: 1, marginRight: 2 }}>TM</sup>
          <span className="brand-text" style={{ fontSize: 15, fontWeight: 600, marginTop: 14, marginLeft: 2 }}>
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
          <button onClick={() => setMobile(!mobile)} className="mobile-menu-btn" aria-label="Menu" style={{ background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 24, cursor: "pointer", padding: 4, marginLeft: 8 }}>
            <i className={`ti ${mobile ? "ti-x" : "ti-menu-2"}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobile && (
        <>
          <div onClick={() => setMobile(false)} style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 101, cursor: "pointer" }} aria-label="Close menu" />
          <nav style={{ position: "fixed", top: 68, right: 0, width: 280, height: "calc(100vh - 68px)", background: "#ffffff", zIndex: 102, boxShadow: "-2px 0 12px rgba(0,0,0,0.15)", overflowY: "auto", display: "flex", flexDirection: "column", animation: "drawerIn 300ms cubic-bezier(0.16,1,0.3,1)" }}>
            
            {/* Navigation Links */}
            <Link href="/" onClick={() => setMobile(false)} style={{ padding: "14px 16px", borderBottom: "1px solid #f0f0f0", color: "#000000", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, background: "#ffffff" }}>
              <i className="ti ti-home" style={{ fontSize: 18, color: "var(--brand-green)" }} aria-hidden="true" />
              Home
            </Link>
            
            <Link href="/about" onClick={() => setMobile(false)} style={{ padding: "14px 16px", borderBottom: "1px solid #f0f0f0", color: "#000000", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, background: "#ffffff" }}>
              <i className="ti ti-info-circle" style={{ fontSize: 18, color: "var(--brand-green)" }} aria-hidden="true" />
              About Us
            </Link>
            
            <Link href="/services" onClick={() => setMobile(false)} style={{ padding: "14px 16px", borderBottom: "1px solid #f0f0f0", color: "#000000", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, background: "#ffffff" }}>
              <i className="ti ti-list-details" style={{ fontSize: 18, color: "var(--brand-green)" }} aria-hidden="true" />
              Services
            </Link>
            
            <Link href="/contact" onClick={() => setMobile(false)} style={{ padding: "14px 16px", borderBottom: "1px solid #f0f0f0", color: "#000000", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, background: "#ffffff" }}>
              <i className="ti ti-mail" style={{ fontSize: 18, color: "var(--brand-green)" }} aria-hidden="true" />
              Contact Us
            </Link>

            {/* Sign In & Sign Up Buttons */}
            <div style={{ padding: "12px 12px", borderTop: "1px solid #e5e7eb", display: "flex", gap: 10, flexShrink: 0, marginTop: "auto" }}>
              <Link href="/signin" onClick={() => setMobile(false)} style={{ flex: 1, padding: "14px 16px", borderRadius: 8, border: "1.5px solid var(--brand-green)", color: "var(--brand-green-dark)", fontSize: 14, fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Sign In
              </Link>
              <Link href="/signup" onClick={() => setMobile(false)} style={{ flex: 1, padding: "14px 16px", borderRadius: 8, background: "var(--brand-green)", color: "#fff", fontSize: 14, fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Sign Up
              </Link>
            </div>
          </nav>
        </>
      )}

    </header>
  );
}
