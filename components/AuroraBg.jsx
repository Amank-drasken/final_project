"use client";
import { useEffect, useState } from "react";

export default function AuroraBg() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const update = () => setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  if (theme !== "dark") return null;

  const beams = [
    { x: -42, w: 2, h: 180, d: 0 },
    { x: -18, w: 1, h: 220, d: 0.4 },
    { x: 8, w: 3, h: 200, d: 0.8 },
    { x: 35, w: 2, h: 150, d: 1.2 },
    { x: 58, w: 1, h: 130, d: 1.6 },
  ];
  const particles = [
    { l: "12%", t: "22%", s: 3, c: "#4ADE80", d: 6, dl: 0 },
    { l: "82%", t: "18%", s: 2, c: "#22C55E", d: 7, dl: 1 },
    { l: "20%", t: "55%", s: 3, c: "#1E8C45", d: 5, dl: 0.5 },
    { l: "70%", t: "40%", s: 2, c: "#4ADE80", d: 8, dl: 1.5 },
    { l: "45%", t: "12%", s: 3, c: "#22C55E", d: 6, dl: 2 },
    { l: "60%", t: "65%", s: 2, c: "#1E8C45", d: 9, dl: 0 },
    { l: "30%", t: "75%", s: 3, c: "#4ADE80", d: 7, dl: 1 },
    { l: "88%", t: "60%", s: 2, c: "#22C55E", d: 8, dl: 2.5 },
    { l: "8%", t: "70%", s: 2, c: "#4ADE80", d: 6, dl: 0.8 },
    { l: "55%", t: "85%", s: 3, c: "#22C55E", d: 7, dl: 1.8 },
  ];
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", width: 600, height: 480, transform: "translate(-50%,-30%)", background: "radial-gradient(ellipse at center, rgba(30,140,69,0.13), transparent 70%)" }} />
      <div style={{ position: "absolute", top: 0, left: "50%", width: 200, height: 200, transform: "translate(-50%,-20%)", background: "radial-gradient(circle at center, rgba(34,197,94,0.1), transparent 70%)" }} />
      {beams.map((b, i) => (
        <div key={i} style={{ position: "absolute", top: 0, left: `calc(50% + ${b.x}px)`, width: b.w, height: b.h, background: "linear-gradient(to bottom, #22C55E, transparent)", animation: `auroraPulse ${4 + i * 0.3}s ease-in-out ${b.d}s infinite`, opacity: 0.7 }} />
      ))}
      {particles.map((p, i) => (
        <div key={i} style={{ position: "absolute", left: p.l, top: p.t, width: p.s, height: p.s, borderRadius: "50%", background: p.c, animation: `particleDrift ${p.d}s ease-in-out ${p.dl}s infinite`, opacity: 0.5 }} />
      ))}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
    </div>
  );
}
