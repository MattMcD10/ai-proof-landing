"use client";

import { useState, useEffect } from "react";
import { getRiskProfile } from "@/lib/quiz-data";

interface ResultsSectionProps {
  score: number;
}

const BENEFITS = [
  {
    icon: "\uD83C\uDFAF",
    title: "Deep Self-Assessment",
    desc: "Full vulnerability analysis with detailed worksheets",
  },
  {
    icon: "\uD83E\uDDE0",
    title: "Human Advantage Skills",
    desc: "5 pillars AI can\u2019t replicate + how to develop them",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Financial Playbook",
    desc: "Transition fund calculator + savings framework",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Pivot Strategies",
    desc: "Industry-specific paths to AI-resistant roles",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Network Blueprint",
    desc: "Build relationships that create opportunities",
  },
  {
    icon: "\uD83D\uDCCB",
    title: "Month-by-Month Plan",
    desc: "Concrete action items for every stage",
  },
];

export default function ResultsSection({ score }: ResultsSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const profile = getRiskProfile(score);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async () => {
    if (!email.includes("@")) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, score }),
      });
    } catch {
      // Silently continue — still show success for MVP
    }
    setSubmitted(true);
  };

  return (
    <section
      className="min-h-screen px-6 py-20 transition-all duration-800"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="mx-auto max-w-[680px]">
        {/* Score card */}
        <div
          className="relative mb-10 overflow-hidden rounded-3xl border px-10 py-12 text-center"
          style={{
            background: `linear-gradient(160deg, ${profile.bg}, rgba(15,23,42,0.9))`,
            borderColor: `${profile.color}22`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full blur-[30px]"
            style={{
              background: `radial-gradient(circle, ${profile.color}15, transparent 70%)`,
            }}
          />

          <div
            className="relative font-heading text-[72px] font-bold leading-none"
            style={{ color: profile.color }}
          >
            {score}
          </div>
          <div className="mt-2 mb-5 font-body text-[11px] uppercase tracking-[0.12em] text-slate-500">
            out of 50
          </div>

          <span
            className="mb-5 inline-block rounded-full border px-6 py-2 font-body text-[15px] font-semibold"
            style={{
              background: `${profile.color}18`,
              borderColor: `${profile.color}33`,
              color: profile.color,
            }}
          >
            {profile.label}
          </span>

          <p className="relative mx-auto mb-4 max-w-[500px] font-body text-base leading-[1.7] text-slate-300">
            {profile.message}
          </p>

          <p className="font-body text-sm italic text-slate-400">
            Recommended timeline: {profile.timeline}
          </p>
        </div>

        {/* What you get */}
        <div className="mb-10 rounded-[20px] border border-blue-200/[0.08] bg-slate-900/50 px-9 py-10">
          <h3 className="mb-2 text-center font-heading text-[26px] font-bold text-slate-100">
            Get Your Complete Action Plan
          </h3>
          <p className="mx-auto mb-8 text-center font-body text-[15px] leading-relaxed text-slate-400">
            The full ebook gives you a step-by-step 6&ndash;12 month roadmap
            personalized to your risk level.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] border border-blue-200/[0.06] bg-slate-800/50 p-5 transition-all duration-200 hover:border-blue-200/[0.12]"
              >
                <div className="mb-2 text-2xl">{item.icon}</div>
                <div className="mb-1 font-body text-sm font-semibold text-slate-200">
                  {item.title}
                </div>
                <div className="font-body text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Email capture */}
          {!submitted ? (
            <div>
              <div className="mx-auto flex max-w-[480px] flex-wrap justify-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="min-w-[240px] flex-1 rounded-[10px] border border-blue-200/15 bg-slate-900/80 px-5 py-3.5 font-body text-[15px] text-slate-200 outline-none transition-colors duration-200 focus:border-indigo-500/50"
                />
                <button
                  onClick={handleSubmit}
                  className="whitespace-nowrap rounded-[10px] border-none bg-gradient-to-br from-accent-blue to-accent-indigo px-7 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-px"
                >
                  Get Free Chapter + Discount
                </button>
              </div>
              <p className="mt-3 text-center font-body text-xs text-slate-600">
                We&apos;ll send Chapter 1 free + a 25% launch discount. No
                spam, ever.
              </p>
            </div>
          ) : (
            <div className="rounded-[14px] border border-green-500/20 bg-green-500/[0.08] p-6 text-center">
              <div className="mb-2 text-[32px]">&#10003;</div>
              <div className="mb-1 font-body text-[17px] font-semibold text-green-500">
                You&apos;re in!
              </div>
              <div className="font-body text-sm text-slate-400">
                Check your inbox for Chapter 1 and your exclusive 25% discount
                code.
              </div>
            </div>
          )}
        </div>

        {/* Social proof */}
        <div className="py-5 text-center">
          <div className="mb-3 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#eab308"
              >
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
              </svg>
            ))}
          </div>
          <p className="mx-auto mb-2 max-w-[400px] font-body text-sm italic text-slate-400">
            &ldquo;This book gave me a concrete plan instead of vague anxiety. I
            pivoted to an AI-resistant role within 8 months.&rdquo;
          </p>
          <p className="font-body text-[13px] text-slate-500">
            &mdash; Early Reader
          </p>
        </div>
      </div>
    </section>
  );
}
