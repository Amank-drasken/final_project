"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

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

  const faqs = [
    ["How do I get started with Gatimaan Payments?", "Sign up for a free account, complete your KYC, and you'll be onboarded in under 10 minutes. Our team will reach out to help you connect your first providers."],
    ["Which utility providers are supported?", "We support 50+ providers across electricity, water, gas, telecom, broadband and DTH. New providers are added regularly based on demand."],
    ["How does the commission system work for retailers?", "You configure commission percentages per transaction type. Every eligible transaction automatically credits commission to the retailer's wallet — fully transparent, fully logged."],
    ["Is my financial data secure on the platform?", "Yes. All data is encrypted at rest and in transit. Every action is logged with a complete audit trail. We follow Indian financial data compliance standards."],
    ["Can I try the platform before committing?", "Absolutely. Get Started Free — no credit card required. You can also Book a Demo to see the platform in action with our team."],
  ];

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <section style={{ padding: "100px 24px 40px", textAlign: "center", background: "var(--bg-base)" }}>
          <div className="badge-pill fade-up" style={{ marginBottom: 20 }}><span className="dot" />GET IN TOUCH</div>
          <h1 className="fade-up" style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 700, marginBottom: 16, animationDelay: ".1s" }}>We'd love to hear from you</h1>
          <p className="fade-up" style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 480, margin: "0 auto", animationDelay: ".2s" }}>Whether you're looking to get started, want to explore a partnership, or have a billing question — reach out and we'll get back to you within 24 hours.</p>
        </section>

        <section className="section" style={{ background: "var(--bg-elevated)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 28 }} >
            {/* Form */}
            <div className="card" style={{ borderRadius: 16, padding: 32 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 600 }}>Send us a message</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Fill in the details below and we'll get back to you.</p>
              {sent ? (
                <div style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(30,140,69,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <i className="ti ti-check" style={{ color: "var(--brand-green-light)", fontSize: 32 }} aria-hidden="true" />
                  </div>
                  <h3 style={{ margin: "0 0 8px" }}>Message sent!</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <Field label="First Name" placeholder="Enter first name" value={form.first} onChange={handle("first")} err={errors.first} />
                    <Field label="Last Name" placeholder="Enter last name" value={form.last} onChange={handle("last")} err={errors.last} />
                  </div>
                  <Field label="Email Address" type="email" placeholder="Enter your email address" value={form.email} onChange={handle("email")} err={errors.email} />
                  <Field label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handle("phone")} err={errors.phone} />
                  <div style={{ marginBottom: 14 }}>
                    <label className="label">Subject</label>
                    <select className="input" value={form.subject} onChange={handle("subject")} style={errors.subject ? { borderColor: "var(--accent-red)" } : {}}>
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Partnership</option>
                      <option>Billing Support</option>
                      <option>Technical Issue</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <div style={errStyle}>{errors.subject}</div>}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label className="label">Message</label>
                    <textarea className="input" rows={5} placeholder="Write your message here..." value={form.message} onChange={handle("message")} style={{ resize: "vertical", ...(errors.message ? { borderColor: "var(--accent-red)" } : {}) }} />
                    {errors.message && <div style={errStyle}>{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", padding: "14px", borderRadius: 10, fontSize: 14 }}>Send Message</button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoCard ic="ti-phone" iconBg="rgba(30,140,69,0.12)" iconColor="var(--brand-green-light)" title="Call Us" main="+91 70530 99911" mainColor="var(--brand-green-light)" sub="Mon–Sat, 9am–7pm IST" />
              <InfoCard ic="ti-mail" iconBg="rgba(6,182,212,0.1)" iconColor="var(--accent-cyan)" title="Mail Us" main="support@gatimaan.in" mainColor="var(--accent-cyan)" sub="We reply within 24 hours" />
              <InfoCard ic="ti-map-pin" iconBg="rgba(27,43,107,0.15)" iconColor="var(--brand-navy)" title="Visit Us" main="Gatimaan Payments Pvt. Ltd." mainColor="var(--text-primary)" sub="Address line, City, State — PIN" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: "var(--bg-base)" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 className="sec-h" style={{ textAlign: "center", marginBottom: 40 }}>Frequently asked questions</h2>
            <div>
              {faqs.map(([q, a], i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "18px 0", background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 500, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{q}</span>
                    <i className={`ti ti-chevron-down`} style={{ transition: "transform 250ms", transform: openFaq === i ? "rotate(180deg)" : "none", color: "var(--brand-green-light)" }} aria-hidden="true" />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: "hidden", transition: "max-height 250ms ease" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, padding: "0 0 18px", margin: 0 }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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

function InfoCard({ ic, iconBg, iconColor, title, main, mainColor, sub }) {
  return (
    <div className="card hover-lift" style={{ border: "1px solid var(--border-green)", borderRadius: 14, padding: "20px 24px", display: "flex", gap: 14 }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <i className={`ti ${ic}`} style={{ color: iconColor, fontSize: 22 }} aria-hidden="true" />
      </div>
      <div>
        <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600 }}>{title}</h4>
        <div style={{ color: mainColor, fontSize: 15, fontWeight: 500 }}>{main}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{sub}</div>
      </div>
    </div>
  );
}
