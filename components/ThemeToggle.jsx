"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("gm-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gm-theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 44,
        height: 22,
        borderRadius: 11,
        background: isDark ? "#0A1419" : "#E2EDE8",
        border: "1px solid var(--border-subtle)",
        position: "relative",
        padding: 0,
        transition: "background 300ms ease",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: isDark ? 2 : 24,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 300ms ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
        }}
      >
        {isDark ? "🌙" : "☀"}
      </span>
    </button>
  );
}
