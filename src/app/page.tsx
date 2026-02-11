"use client";

import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AssessmentSection from "@/components/AssessmentSection";
import ResultsSection from "@/components/ResultsSection";

type Screen = "hero" | "quiz" | "results";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("hero");
  const [score, setScore] = useState(0);
  const assessRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setScreen("quiz");
    setTimeout(
      () => assessRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  const handleComplete = (s: number) => {
    setScore(s);
    setScreen("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden">
      {screen !== "results" && <HeroSection onStart={handleStart} />}

      {screen === "quiz" && (
        <div ref={assessRef}>
          <AssessmentSection onComplete={handleComplete} />
        </div>
      )}

      {screen === "results" && <ResultsSection score={score} />}

      {/* Footer */}
      <footer className="border-t border-blue-200/[0.06] px-6 py-10 text-center">
        <p className="font-body text-[13px] text-slate-700">
          &copy; 2026 AI-Proof Your Career &middot; All rights reserved
        </p>
      </footer>
    </main>
  );
}
