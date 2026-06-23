"use client";
import { useEffect, useState } from "react";

export default function KycModal() {
  const [open, setOpen] = useState(false);
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      const done = localStorage.getItem("gm-kycDone");
      const just = localStorage.getItem("gm-justSignedIn");
      if (just === "1" && done !== "1") { setOpen(true); localStorage.removeItem("gm-justSignedIn"); }
    } catch {}
  }, []);

  const close = () => { setOpen(false); setToast("KYC pending — complete it later from Profile Settings."); setTimeout(() => setToast(""), 4000); };
  const formatAadhaar = (v) => v.replace(/\D/g, "").slice(0, 12).replace(/(.{4})/g, "$1 ").trim();
  const proceed = (e) => {
    e.preventDefault();
    const errs = {};
    if (aadhaar.replace(/\s/g, "").length !== 12) errs.aadhaar = "Enter a 12-digit Aadhaar number";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) errs.pan = "PAN must be 10-character alphanumeric";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        try { localStorage.setItem("gm-kycDone", "1"); } catch {}
        setOpen(false);
        setToast("KYC submitted successfully.");
        setTimeout(() => setToast(""), 4000);
      }, 900);
    }
  };

  return (
    <>
      {open && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,27,36,0.6)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 16 }}>
          <div style={{ background: "#fff", border: "1px solid var(--border-green)", borderRadius: 20, padding: 40, maxWidth: 440, width: "100%", boxShadow: "0 32px 100px rgba(15,27,36,0.2), 0 0 0 1px rgba(22,163,74,0.08)", animation: "modalIn 280ms cubic-bezier(0.34,1.56,0.64,1)" }}>
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--brand-green-ultra)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: "3px solid var(--brand-green-pale)" }}>
                <i className="ti ti-shield-check" style={{ color: "var(--brand-green)", fontSize: 36 }} aria-hidden="true" />
              </div>
              <h2 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 800, color: "var(--text-primary)" }}>Complete Your KYC</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 14, margin: "0 auto", maxWidth: 320, lineHeight: 1.5 }}>Verify your identity to unlock all platform features. Takes less than 2 minutes.</p>
            </div>
            <div style={{ height: 1, background: "var(--border-default)", margin: "20px 0 22px" }} />
            <form onSubmit={proceed} noValidate>
              <div style={{ marginBottom: 16 }}>
                <label className="label">Aadhaar Number</label>
                <input className="input" type="tel" placeholder="XXXX XXXX XXXX" value={aadhaar} onChange={(e) => setAadhaar(formatAadhaar(e.target.value))} style={errors.aadhaar ? { borderColor: "var(--accent-red)" } : {}} />
                <div style={{ fontSize: 12, color: errors.aadhaar ? "var(--accent-red)" : "var(--text-hint)", marginTop: 4 }}>{errors.aadhaar || "12-digit number on your Aadhaar card"}</div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label className="label">PAN Number</label>
                <input className="input" type="text" placeholder="ABCDE1234F" value={pan} onChange={(e) => setPan(e.target.value.toUpperCase().slice(0, 10))} style={errors.pan ? { borderColor: "var(--accent-red)" } : {}} />
                <div style={{ fontSize: 12, color: errors.pan ? "var(--accent-red)" : "var(--text-hint)", marginTop: 4 }}>{errors.pan || "10-character alphanumeric PAN"}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <button type="button" onClick={close} className="btn-ghost" style={{ padding: 12 }}>Skip for now</button>
                <button type="submit" disabled={submitting} className="btn-primary" style={{ padding: 12, opacity: submitting ? 0.7 : 1 }}>{submitting ? "Submitting..." : "Proceed"}</button>
              </div>
              <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, marginTop: 10 }}>You can complete KYC later from Profile Settings</div>
              <div style={{ textAlign: "center", color: "var(--text-hint)", fontSize: 11, marginTop: 14, display: "flex", justifyContent: "center", alignItems: "center", gap: 6 }}>
                <i className="ti ti-lock" style={{ color: "var(--brand-green)", fontSize: 12 }} aria-hidden="true" /> Your data is encrypted and stored securely. We never share it.
              </div>
            </form>
          </div>
        </div>
      )}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 24, background: "#fff", border: "1px solid var(--border-green)", borderRadius: 12, padding: "12px 16px", color: "var(--text-primary)", fontSize: 13, fontWeight: 500, zIndex: 300, boxShadow: "var(--shadow-lg)" }}>{toast}</div>
      )}
    </>
  );
}
