"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../../components/AuthLayout";

export default function SignUpPage() {
  const [form, setForm] = useState({ first: "", last: "", business: "", email: "", phone: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const strength = (p) => {
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };
  const sLevel = strength(form.password);
  const sColor = sLevel <= 1 ? "var(--accent-red)" : sLevel <= 2 ? "var(--accent-amber)" : "var(--brand-green-mid)";
  const sLabel = sLevel <= 1 ? "Weak" : sLevel <= 2 ? "Fair" : sLevel <= 3 ? "Good" : "Strong";

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    ["first","last","business","email","phone","password","confirm"].forEach((k) => { if (!form[k]) errs[k] = "Required"; });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (form.password && form.confirm && form.password !== form.confirm) errs.confirm = "Passwords do not match";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try {
        localStorage.setItem("gm-justSignedIn", "1");
        localStorage.setItem("gm-kycDone", "0");
      } catch {}
      router.push("/dashboard");
    }
  };

  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <AuthLayout title="Create your account" subtitle="Start managing your utility payment business">
      <form onSubmit={submit} noValidate>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
          <Field label="First Name" value={form.first} onChange={h("first")} err={errors.first} />
          <Field label="Last Name" value={form.last} onChange={h("last")} err={errors.last} />
        </div>
        <Field label="Business Name" value={form.business} onChange={h("business")} err={errors.business} />
        <Field label="Email Address" type="email" value={form.email} onChange={h("email")} err={errors.email} />
        <Field label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={h("phone")} err={errors.phone} />
        <div style={{ marginBottom: 8 }}>
          <label className="label">Password</label>
          <div style={{ position: "relative" }}>
            <input className="input" type={show ? "text" : "password"} value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
            <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
              <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
            </button>
          </div>
          {form.password && (
            <div style={{ marginTop: 6 }}>
              <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${(sLevel / 4) * 100}%`, height: "100%", background: sColor, transition: "all 200ms" }} />
              </div>
              <div style={{ color: sColor, fontSize: 11, marginTop: 4 }}>{sLabel}</div>
            </div>
          )}
          {errors.password && <div style={errStyle}>{errors.password}</div>}
        </div>
        <Field label="Confirm Password" type="password" value={form.confirm} onChange={h("confirm")} err={errors.confirm} />
        <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "12px 0 16px" }}>
          By signing up, you agree to our <Link href="#" style={{ color: "var(--brand-green-light)" }}>Terms of Service</Link> and <Link href="#" style={{ color: "var(--brand-green-light)" }}>Privacy Policy</Link>
        </p>
        <button type="submit" className="btn-primary" style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14 }}>Create Account</button>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}>
          Already have an account? <Link href="/signin" style={{ color: "var(--brand-green-light)" }}>Sign in</Link>
        </p>
      </form>
    </AuthLayout>
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
