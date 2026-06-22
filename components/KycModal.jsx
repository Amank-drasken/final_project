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
      if (just === "1" && done !== "1") {
        setOpen(true);
        localStorage.removeItem("gm-justSignedIn");
      }
    } catch {}
  }, []);

  const close = () => {
    setOpen(false);
    setToast("KYC pending — you can complete it later from settings.");
    setTimeout(() => setToast(""), 4000);
  };

  const formatAadhaar = (v) => v.replace(/\D/g, "").slice(0, 12).replace(/(.{4})/g, "$1 ").trim();
  const proceed = (e) => {
    e.preventDefault();
    const errs = {};
    const clean = aadhaar.replace(/\s/g, "");
    if (clean.length !== 12) errs.aadhaar = "Enter a 12-digit Aadhaar number";
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
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 16, animation: "fadeUp 250ms ease-out" }}>
          <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-green)", borderRadius: 16, padding: 32, maxWidth: 420, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.5)", animation: "modalIn 250ms ease-out" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <i className="ti ti-shield-check" style={{ color: "var(--brand-green-light)", fontSize: 48, marginBottom: 12, display: "block" }} aria-hidden="true" />
              <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 700 }}>Complete your KYC</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, margin: "0 auto", maxWidth: 300 }}>Verify your identity to unlock all features. This takes less than 2 minutes.</p>
            </div>
            <div style={{ height: 1, background: "var(--border-subtle)", margin: "20px 0" }} />
            <form onSubmit={proceed} noValidate>
              <div style={{ marginBottom: 14 }}>
                <label className="label">Aadhaar Number</label>
                <input className="input" type="tel" placeholder="XXXX XXXX XXXX" value={aadhaar} onChange={(e) => setAadhaar(formatAadhaar(e.target.value))} style={errors.aadhaar ? { borderColor: "var(--accent-red)" } : {}} />
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{errors.aadhaar || "12-digit Aadhaar number"}</div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="label">PAN Number</label>
                <input className="input" type="text" placeholder="ABCDE1234F" value={pan} onChange={(e) => setPan(e.target.value.toUpperCase().slice(0, 10))} style={errors.pan ? { borderColor: "var(--accent-red)" } : {}} />
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{errors.pan || "10-character alphanumeric PAN"}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <button type="button" onClick={close} style={{ padding: 12, borderRadius: 10, background: "transparent", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontSize: 13, fontWeight: 500 }}>Skip for now</button>
                <button type="submit" disabled={submitting} className="btn-primary" style={{ padding: 12, borderRadius: 10, fontSize: 14, animation: "none", opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? "Submitting..." : "Proceed"}
                </button>
              </div>
              <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, marginTop: 12 }}>You can complete KYC later from your profile settings</div>
              <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, marginTop: 14, display: "flex", justifyContent: "center", alignItems: "center", gap: 6 }}>
                <i className="ti ti-lock" style={{ color: "var(--brand-green-light)", fontSize: 12 }} aria-hidden="true" /> Your data is encrypted and stored securely. We never share it.
              </div>
            </form>
          </div>
        </div>
      )}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 24, background: "var(--bg-elevated)", border: "1px solid var(--border-green)", borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)", fontSize: 13, zIndex: 300, boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}>
          {toast}
        </div>
      )}
    </>
  );
}
