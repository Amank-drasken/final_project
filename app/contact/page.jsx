"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppDownload from "../../components/AppDownload";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const els = document.querySelectorAll("[data-animate], [data-stagger], [data-scroll], [data-scroll-stagger]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.first) errs.first = "Required";
    if (!form.last) errs.last = "Required";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone) errs.phone = "Required";
    if (!form.subject) errs.subject = "Select a subject";
    if (!form.message) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const faqs = [
    ["How do I get started with Gatimaan Payments?", "Sign up for a free account, complete your KYC, and you'll be onboarded in under 10 minutes."],
    ["Which utility providers are supported?", "We support 50+ providers across electricity, water, gas, telecom, broadband and DTH."],
    ["How does the commission system work for retailers?", "You configure commission percentages per transaction. Every eligible transaction automatically credits the retailer's GMPay wallet."],
    ["Is my financial data secure on the platform?", "Yes. All data is encrypted at rest and in transit. Every action is logged with a complete audit trail."],
    ["Can I try the platform before committing?", "Absolutely. Get Started Free — no credit card required. You can also Book a Demo."],
  ];

  return (
    <>
      <Header />
      <main style={{ paddingTop: 68 }}>
        <section style={{ position: "relative", padding: "120px 24px 80px", textAlign: "center", background: "var(--bg-page)", overflow: "hidden", minHeight: 360 }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div className="blob" style={{ top: -50, left: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(134,239,172,0.4), transparent 70%)", animation: "blobMorph 14s ease-in-out infinite alternate" }} />
            {[
              { ic: "ti-mail", c: "#06B6D4", l: "10%", t: "20%", sz: 44 },
              { ic: "ti-phone", c: "#22C55E", l: "85%", t: "18%", sz: 38 },
              { ic: "ti-message-circle", c: "#F59E0B", l: "82%", t: "65%", sz: 46 },
              { ic: "ti-map-pin", c: "#8B5CF6", l: "8%", t: "70%", sz: 36 },
              { ic: "ti-send", c: "#16A34A", l: "50%", t: "82%", sz: 40 },
            ].map((it, i) => (
              <i key={i} className={`ti ${it.ic}`} style={{ position: "absolute", left: it.l, top: it.t, color: it.c, fontSize: it.sz, opacity: 0.12, animation: `floatRot ${6 + i}s ease-in-out ${i * 0.5}s infinite` }} aria-hidden="true" />
            ))}
          </div>
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <div className="badge-pill fade-up" style={{ marginBottom: 22 }}><span className="dot" />GET IN TOUCH</div>
            <h1 className="fade-up" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, marginBottom: 18, animationDelay: ".1s", color: "var(--text-primary)" }}>We'd Love To Hear From You</h1>
            <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.65, maxWidth: 500, margin: "0 auto", animationDelay: ".2s" }}>Reach out for demos, partnerships, billing support, or anything else — we respond within 24 hours.</p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-section-alt)" }}>
          <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 28, alignItems: "start", maxWidth: 1140 }}>
            <div data-animate="left" className="card-hoverable" style={{ background: "#fff", border: "1px solid var(--border-default)", borderRadius: 20, padding: 36, boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 700, color: "var(--text-primary)" }}>Send Us A Message</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>Fill in the details below and we'll get back to you.</p>
              {sent ? (
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--brand-green-pale)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", animation: "checkPop 600ms cubic-bezier(0.34,1.56,0.64,1) both" }}>
                    <i className="ti ti-check" style={{ color: "var(--brand-green)", fontSize: 36 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Message sent!</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <Field label="First Name" placeholder="Enter first name" value={form.first} onChange={h("first")} err={errors.first} />
                    <Field label="Last Name" placeholder="Enter last name" value={form.last} onChange={h("last")} err={errors.last} />
                  </div>
                  <Field label="Email Address" type="email" placeholder="you@example.com" value={form.email} onChange={h("email")} err={errors.email} />
                  <Field label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={h("phone")} err={errors.phone} />
                  <div style={{ marginBottom: 14 }}>
                    <label className="label">Subject</label>
                    <select className="input" value={form.subject} onChange={h("subject")} style={errors.subject ? { borderColor: "var(--accent-red)" } : {}}>
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Retailer</option>
                      <option>Consumer</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <div style={errStyle}>{errors.subject}</div>}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label className="label">Message</label>
                    <textarea className="input" rows={5} placeholder="Write your message here..." value={form.message} onChange={h("message")} style={{ resize: "vertical", ...(errors.message ? { borderColor: "var(--accent-red)" } : {}) }} />
                    {errors.message && <div style={errStyle}>{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", padding: 14, fontSize: 15 }}>Send Message</button>
                </form>
              )}
            </div>
            <div data-animate="right" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoCard ic="ti-phone" bg="var(--brand-green-pale)" color="var(--brand-green-dark)" title="Call Us" main="+91 9213696666" sub="Mon–Sat, 9am–7pm IST" />
              <InfoCard ic="ti-mail" bg="rgba(6,182,212,0.12)" color="var(--accent-cyan)" title="Mail" main="gatimaanpayments@gmail.com" sub="Reply within 24 hours" />
              <InfoCard ic="ti-map-pin" bg="rgba(27,43,107,0.1)" color="var(--brand-navy)" title="Visit Us" main="RS INNOVATIVE ENTERPRISES INDIA PRIVATE LIMITED" sub="Delhi" />
            </div>
          </div>
          <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important}}`}</style>
        </section>

        <section className="section" style={{ background: "var(--bg-page)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 data-animate="up" className="sec-h" style={{ textAlign: "center", marginBottom: 40 }}>Frequently Asked Questions</h2>
            <div data-stagger>
              {faqs.map(([q, a], i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${openFaq === i ? "var(--border-green)" : "var(--border-default)"}`, borderRadius: 12, padding: "16px 20px", marginBottom: 10, transition: "all 200ms ease" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: 0, background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{q}</span>
                    <i className="ti ti-chevron-down" style={{ transition: "transform 250ms", transform: openFaq === i ? "rotate(180deg)" : "none", color: "var(--brand-green)" }} aria-hidden="true" />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 220 : 0, overflow: "hidden", transition: "max-height 300ms ease" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, padding: "12px 0 0", margin: 0 }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}

const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };
function Field({ label, err, ...rest }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label className="label">{label}</label>
      <input className="input" {...rest} style={err ? { borderColor: "var(--accent-red)" } : {}} />
      {err && <div style={errStyle}>{err}</div>}
    </div>
  );
}
function InfoCard({ ic, bg, color, title, main, sub }) {
  return (
    <div className="card card-hoverable" style={{ display: "flex", gap: 14, padding: 24 }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <i className={`ti ${ic}`} style={{ color, fontSize: 22 }} aria-hidden="true" />
      </div>
      <div>
        <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{title}</h4>
        <div style={{ color, fontSize: 15, fontWeight: 600 }}>{main}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{sub}</div>
      </div>
    </div>
  );
}
