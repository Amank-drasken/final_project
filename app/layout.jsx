import "./globals.css";

export const metadata = {
  title: "Gatimaan Payments — Utility Billing & Operations Platform",
  description: "India's first B2B & B2B2C utility billing platform guaranteeing rewards and commission on every transaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.5.0/dist/tabler-icons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
