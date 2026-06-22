"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../../components/AuthLayout";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.password) errs.password = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try { localStorage.setItem("gm-justSignedIn", "1"); } catch {}
      router.push("/dashboard");
    }
  };

  const h = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your Gatimaan Payments account">
      <form onSubmit={submit} noValidate>
        <div style={{ marginBottom: 14 }}>
          <label className="label">Email Address</label>
          <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={h("email")} style={errors.email ? { borderColor: "var(--accent-red)" } : {}} />
          {errors.email && <div style={errStyle}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: 8 }}>
          <label className="label">Password</label>
          <div style={{ position: "relative" }}>
            <input className="input" type={show ? "text" : "password"} placeholder="Enter password" value={form.password} onChange={h("password")} style={errors.password ? { borderColor: "var(--accent-red)" } : {}} />
            <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password visibility" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", color: "var(--text-muted)" }}>
              <i className={`ti ti-${show ? "eye-off" : "eye"}`} aria-hidden="true" />
            </button>
          </div>
          {errors.password && <div style={errStyle}>{errors.password}</div>}
        </div>
        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <Link href="#" style={{ fontSize: 13, color: "var(--brand-green-light)" }}>Forgot password?</Link>
        </div>
        <button type="submit" className="btn-primary" style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14 }}>Sign In</button>
        <div style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12, margin: "18px 0" }}>— or —</div>
        <button type="button" style={{ width: "100%", padding: 12, borderRadius: 10, fontSize: 14, background: "transparent", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <i className="ti ti-brand-google" aria-hidden="true" /> Continue with Google
        </button>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}>
          Don't have an account? <Link href="/signup" style={{ color: "var(--brand-green-light)" }}>Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}

const errStyle = { color: "var(--accent-red)", fontSize: 12, marginTop: 4 };
