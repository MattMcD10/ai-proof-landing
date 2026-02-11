"use client";

import { useState, useEffect, useRef } from "react";
import { FACTORS, getRiskProfile } from "@/lib/quiz-data";
import QuizSlider from "./QuizSlider";

interface AssessmentSectionProps {
  onComplete: (score: number) => void;
}

export default function AssessmentSection({
  onComplete,
}: AssessmentSectionProps) {
  const [scores, setScores] = useState<Record<string, number>>({
    repeatability: 5,
    data: 5,
    interaction: 5,
    creativity: 5,
    physical: 5,
  });
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const profile = getRiskProfile(total);

  return (
    <section
      ref={ref}
      className="min-h-screen px-6 py-20 transition-all duration-800"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="mx-auto max-w-[640px]">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-slate-100">
            Quick Vulnerability Check
          </h2>
          <p className="font-body text-base leading-relaxed text-slate-400">
            Rate each factor honestly based on your <em>actual</em> daily work
            &mdash; not your job title.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {FACTORS.map((f, i) => (
            <QuizSlider
              key={f.id}
              factor={f}
              index={i}
              total={FACTORS.length}
              value={scores[f.id]}
              onChange={(v) =>
                setScores((prev) => ({ ...prev, [f.id]: v }))
              }
            />
          ))}
        </div>

        {/* Live score bar */}
        <div
          className="mt-9 flex flex-wrap items-center justify-between gap-4 rounded-2xl border px-8 py-6"
          style={{
            background: `linear-gradient(135deg, ${profile.bg}, rgba(15,23,42,0.8))`,
            borderColor: `${profile.color}33`,
          }}
        >
          <div>
            <div className="mb-1 font-body text-[13px] uppercase tracking-[0.06em] text-slate-400">
              Your Score
            </div>
            <div className="flex items-baseline gap-3">
              <span
                className="font-heading text-[42px] font-bold"
                style={{ color: profile.color }}
              >
                {total}
              </span>
              <span
                className="font-body text-[15px] font-semibold"
                style={{ color: profile.color }}
              >
                / 50 &mdash; {profile.label}
              </span>
            </div>
          </div>
          <button
            onClick={() => onComplete(total)}
            className="rounded-[10px] border-none px-8 py-3.5 font-body text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-px"
            style={{
              background: profile.color,
              boxShadow: `0 0 30px ${profile.color}44`,
            }}
          >
            See My Full Results &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
