"use client";

import type { Factor } from "@/lib/quiz-data";

interface QuizSliderProps {
  factor: Factor;
  value: number;
  onChange: (value: number) => void;
  index: number;
  total: number;
}

export default function QuizSlider({
  factor,
  value,
  onChange,
  index,
  total,
}: QuizSliderProps) {
  const pct = ((value - 1) / 9) * 100;

  return (
    <div className="group rounded-[20px] border border-blue-200/[0.08] bg-slate-900/60 px-9 py-8 backdrop-blur-[20px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-indigo-400">
          Factor {index + 1} of {total}
        </span>
        <span className="font-heading text-[28px] font-bold text-slate-200">
          {value}
        </span>
      </div>

      <h3 className="mb-1.5 font-heading text-[22px] font-semibold text-slate-100">
        {factor.label}
      </h3>
      <p className="mb-6 font-body text-[15px] leading-relaxed text-slate-400">
        {factor.question}
      </p>

      {/* Custom slider track */}
      <div className="relative flex h-11 items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-700/60">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-indigo transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-x-0 z-[2] h-11 cursor-pointer appearance-none bg-transparent"
        />
      </div>

      <div className="mt-2 flex justify-between font-body text-xs text-slate-500">
        <span>{factor.low}</span>
        <span>{factor.high}</span>
      </div>
    </div>
  );
}
