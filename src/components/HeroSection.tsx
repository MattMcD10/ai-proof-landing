"use client";

import { useState, useEffect } from "react";

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-8">
      {/* Animated grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,196,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,196,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute right-[15%] top-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_70%)] blur-[40px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[15%] left-[10%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_70%)] blur-[40px] animate-[float_10s_ease-in-out_infinite_reverse]" />

      <div
        className="relative z-10 max-w-[800px] text-center transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="mb-8 inline-block rounded-full border border-blue-500/25 bg-blue-500/[0.12] px-[18px] py-1.5 font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-blue-300">
          Free Career Assessment
        </span>

        <h1 className="mb-6 bg-gradient-to-br from-white via-blue-200 to-violet-300 bg-clip-text font-heading text-[clamp(2.5rem,6vw,4.2rem)] font-bold leading-[1.1] text-transparent">
          Is AI Coming for <br />
          Your Career?
        </h1>

        <p className="mx-auto mb-10 max-w-[580px] font-body text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.7] text-slate-400">
          Take our 2-minute AI Vulnerability Assessment to discover your career
          risk level &mdash; and get a personalized action plan to future-proof
          your professional life.
        </p>

        <button
          onClick={onStart}
          className="group relative overflow-hidden rounded-xl border-none bg-gradient-to-br from-accent-blue to-accent-indigo px-11 py-4 font-body text-[17px] font-semibold tracking-[0.02em] text-white shadow-[0_0_40px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]"
        >
          Start Free Assessment &rarr;
        </button>

        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {[
            { num: "14,600+", label: "Readers" },
            { num: "2 min", label: "Assessment" },
            { num: "9", label: "Chapter Action Plan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-[28px] font-bold text-slate-200">
                {stat.num}
              </div>
              <div className="mt-1 font-body text-[13px] uppercase tracking-[0.08em] text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 animate-[bounce-arrow_2s_ease-in-out_infinite]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
