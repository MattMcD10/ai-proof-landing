import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Proof Your Career — Free Vulnerability Assessment",
  description:
    "Take our 2-minute AI Vulnerability Assessment to discover your career risk level and get a personalized action plan to future-proof your professional life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
