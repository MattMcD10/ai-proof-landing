import { useState, useEffect, useRef } from "react";

const FACTORS = [
  {
    id: "repeatability",
    label: "Task Repeatability",
    question: "How repetitive is your daily work?",
    low: "Every day is different",
    high: "Highly repetitive",
  },
  {
    id: "data",
    label: "Data Dependency",
    question: "How much does your role depend on processing structured data?",
    low: "Rarely data-driven",
    high: "Entirely data-driven",
  },
  {
    id: "interaction",
    label: "Human Interaction",
    question: "How central is face-to-face interaction to your value?",
    low: "Constant high-stakes interaction",
    high: "Minimal interaction needed",
  },
  {
    id: "creativity",
    label: "Creative Originality",
    question: "Does your role require genuinely novel thinking?",
    low: "Deeply original work",
    high: "Templated execution",
  },
  {
    id: "physical",
    label: "Physical Presence",
    question: "Does your job require physical presence in unpredictable environments?",
    low: "High physical demands",
    high: "Entirely digital",
  },
];

function getRiskProfile(score) {
  if (score <= 15) return { level: "Low", color: "#22c55e", bg: "#052e16", label: "Low Vulnerability", message: "Your role has strong natural defenses against AI disruption. You have time to build on your advantages strategically.", timeline: "12+ months for gradual skill building" };
  if (score <= 25) return { level: "Moderate", color: "#eab308", bg: "#422006", label: "Moderate Vulnerability", message: "Parts of your role are automatable, but your core value remains human. Strategic upskilling will strengthen your position significantly.", timeline: "6–12 months for focused development" };
  if (score <= 35) return { level: "Significant", color: "#f97316", bg: "#431407", label: "Significant Vulnerability", message: "A substantial portion of your role could be automated in the near term. Active career adaptation should be a priority starting now.", timeline: "3–6 months for urgent skill building" };
  return { level: "High", color: "#ef4444", bg: "#450a0a", label: "High Vulnerability", message: "Your current role is at serious risk of AI disruption. The good news? Knowing this now gives you a critical head start over those who haven't assessed their position.", timeline: "Begin transition planning immediately" };
}

function HeroSection({ onStart }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Animated grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: `
          linear-gradient(rgba(148,196,255,0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148,196,255,0.4) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "gridMove 20s linear infinite",
      }} />
      
      {/* Floating orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "15%", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
        filter: "blur(40px)", animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "10%", width: 250, height: 250,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)",
        filter: "blur(40px)", animation: "float 10s ease-in-out infinite reverse",
      }} />

      <div style={{
        maxWidth: 800, textAlign: "center", position: "relative", zIndex: 1,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div style={{
          display: "inline-block", padding: "6px 18px", borderRadius: 100,
          background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)",
          fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#93c5fd",
          letterSpacing: "0.05em", marginBottom: 32,
          textTransform: "uppercase", fontWeight: 600,
        }}>
          Free Career Assessment
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
          fontWeight: 700, lineHeight: 1.1, margin: 0, marginBottom: 24,
          background: "linear-gradient(135deg, #ffffff 0%, #94c4ff 50%, #c4b5fd 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          Is AI Coming for <br/>Your Career?
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
          color: "#94a3b8", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 40px",
        }}>
          Take our 2-minute AI Vulnerability Assessment to discover your career risk level — 
          and get a personalized action plan to future-proof your professional life.
        </p>

        <button
          onClick={onStart}
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600,
            padding: "16px 44px", borderRadius: 12, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff", letterSpacing: "0.02em",
            boxShadow: "0 0 40px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            transition: "all 0.3s ease",
            position: "relative", overflow: "hidden",
          }}
          onMouseEnter={e => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 0 60px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15)";
          }}
          onMouseLeave={e => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 0 40px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)";
          }}
        >
          Start Free Assessment →
        </button>

        <div style={{
          display: "flex", justifyContent: "center", gap: 40, marginTop: 56,
          flexWrap: "wrap",
        }}>
          {[
            { num: "14,600+", label: "Readers" },
            { num: "2 min", label: "Assessment" },
            { num: "9", label: "Chapter Action Plan" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#e2e8f0" }}>{s.num}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        animation: "bounce 2s ease-in-out infinite", opacity: 0.4,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
}

function QuizSlider({ factor, value, onChange, index, total }) {
  const [hovered, setHovered] = useState(false);
  const pct = ((value - 1) / 9) * 100;

  return (
    <div style={{
      background: "rgba(15,23,42,0.6)", border: "1px solid rgba(148,196,255,0.08)",
      borderRadius: 20, padding: "32px 36px", backdropFilter: "blur(20px)",
      transition: "all 0.3s ease",
      boxShadow: hovered ? "0 0 30px rgba(59,130,246,0.08)" : "none",
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
          color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.1em",
        }}>
          Factor {index + 1} of {total}
        </span>
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700,
          color: "#e2e8f0",
        }}>
          {value}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600,
        color: "#f1f5f9", margin: "0 0 6px",
      }}>
        {factor.label}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#94a3b8",
        margin: "0 0 24px", lineHeight: 1.5,
      }}>
        {factor.question}
      </p>

      {/* Custom slider */}
      <div style={{ position: "relative", height: 44, display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: 6, borderRadius: 3,
          background: "rgba(51,65,85,0.6)",
        }}>
          <div style={{
            height: "100%", borderRadius: 3, width: `${pct}%`,
            background: "linear-gradient(90deg, #3b82f6, #6366f1)",
            transition: "width 0.15s ease",
          }} />
        </div>
        <input
          type="range" min="1" max="10" value={value}
          onChange={e => onChange(parseInt(e.target.value))}
          style={{
            position: "absolute", left: 0, right: 0, height: 44,
            WebkitAppearance: "none", appearance: "none",
            background: "transparent", cursor: "pointer", zIndex: 2,
          }}
        />
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", marginTop: 8,
        fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#64748b",
      }}>
        <span>{factor.low}</span>
        <span>{factor.high}</span>
      </div>
    </div>
  );
}

function AssessmentSection({ onComplete }) {
  const [scores, setScores] = useState({ repeatability: 5, data: 5, interaction: 5, creativity: 5, physical: 5 });
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div ref={ref} style={{
      minHeight: "100vh", padding: "80px 2rem",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700, color: "#f1f5f9", margin: "0 0 12px",
          }}>
            Quick Vulnerability Check
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#94a3b8", lineHeight: 1.6,
          }}>
            Rate each factor honestly based on your <em>actual</em> daily work — not your job title.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {FACTORS.map((f, i) => (
            <QuizSlider
              key={f.id} factor={f} index={i} total={FACTORS.length}
              value={scores[f.id]}
              onChange={v => setScores(s => ({ ...s, [f.id]: v }))}
            />
          ))}
        </div>

        {/* Live score */}
        <div style={{
          marginTop: 36, padding: "24px 32px", borderRadius: 16,
          background: `linear-gradient(135deg, ${getRiskProfile(total).bg}, rgba(15,23,42,0.8))`,
          border: `1px solid ${getRiskProfile(total).color}33`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#94a3b8", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Your Score
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: getRiskProfile(total).color }}>
                {total}
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: getRiskProfile(total).color }}>
                / 50 — {getRiskProfile(total).label}
              </span>
            </div>
          </div>
          <button
            onClick={() => onComplete(total)}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
              padding: "14px 32px", borderRadius: 10, border: "none", cursor: "pointer",
              background: getRiskProfile(total).color, color: "#fff",
              boxShadow: `0 0 30px ${getRiskProfile(total).color}44`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >
            See My Full Results →
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultsSection({ score }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const profile = getRiskProfile(score);
  const ref = useRef(null);

  useEffect(() => { setTimeout(() => setVisible(true), 200); }, []);

  const handleSubmit = () => {
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <div ref={ref} style={{
      minHeight: "100vh", padding: "80px 2rem",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Score card */}
        <div style={{
          textAlign: "center", padding: "48px 40px", borderRadius: 24,
          background: `linear-gradient(160deg, ${profile.bg}, rgba(15,23,42,0.9))`,
          border: `1px solid ${profile.color}22`,
          marginBottom: 40, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60, width: 200, height: 200,
            borderRadius: "50%", background: `radial-gradient(circle, ${profile.color}15, transparent 70%)`,
            filter: "blur(30px)",
          }} />
          
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 700,
            color: profile.color, lineHeight: 1, position: "relative",
          }}>
            {score}
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#64748b",
            textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 8, marginBottom: 20,
          }}>
            out of 50
          </div>
          
          <div style={{
            display: "inline-block", padding: "8px 24px", borderRadius: 100,
            background: `${profile.color}18`, border: `1px solid ${profile.color}33`,
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
            color: profile.color, marginBottom: 20,
          }}>
            {profile.label}
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#cbd5e1",
            lineHeight: 1.7, maxWidth: 500, margin: "0 auto 16px", position: "relative",
          }}>
            {profile.message}
          </p>
          
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#94a3b8",
            fontStyle: "italic",
          }}>
            Recommended timeline: {profile.timeline}
          </p>
        </div>

        {/* What you get */}
        <div style={{
          background: "rgba(15,23,42,0.5)", border: "1px solid rgba(148,196,255,0.08)",
          borderRadius: 20, padding: "40px 36px", marginBottom: 40,
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700,
            color: "#f1f5f9", margin: "0 0 8px", textAlign: "center",
          }}>
            Get Your Complete Action Plan
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#94a3b8",
            textAlign: "center", margin: "0 0 32px", lineHeight: 1.6,
          }}>
            The full ebook gives you a step-by-step 6–12 month roadmap personalized to your risk level.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
            {[
              { icon: "🎯", title: "Deep Self-Assessment", desc: "Full vulnerability analysis with detailed worksheets" },
              { icon: "🧠", title: "Human Advantage Skills", desc: "5 pillars AI can't replicate + how to develop them" },
              { icon: "💰", title: "Financial Playbook", desc: "Transition fund calculator + savings framework" },
              { icon: "🚀", title: "Pivot Strategies", desc: "Industry-specific paths to AI-resistant roles" },
              { icon: "🤝", title: "Network Blueprint", desc: "Build relationships that create opportunities" },
              { icon: "📋", title: "Month-by-Month Plan", desc: "Concrete action items for every stage" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "20px", borderRadius: 14,
                background: "rgba(30,41,59,0.5)", border: "1px solid rgba(148,196,255,0.06)",
                transition: "all 0.2s ease",
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Email capture */}
          {!submitted ? (
            <div>
              <div style={{
                display: "flex", gap: 12, maxWidth: 480, margin: "0 auto",
                flexWrap: "wrap", justifyContent: "center",
              }}>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  style={{
                    flex: 1, minWidth: 240, padding: "14px 20px", borderRadius: 10,
                    border: "1px solid rgba(148,196,255,0.15)", background: "rgba(15,23,42,0.8)",
                    color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    outline: "none", transition: "border 0.2s ease",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(148,196,255,0.15)"}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "14px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                    color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
                    boxShadow: "0 0 30px rgba(59,130,246,0.25)",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
                  onMouseLeave={e => e.target.style.transform = "translateY(0)"}
                >
                  Get Free Chapter + Discount
                </button>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#475569",
                textAlign: "center", marginTop: 12,
              }}>
                We'll send Chapter 1 free + a 25% launch discount. No spam, ever.
              </p>
            </div>
          ) : (
            <div style={{
              textAlign: "center", padding: "24px", borderRadius: 14,
              background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "#22c55e", marginBottom: 4 }}>
                You're in!
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#94a3b8" }}>
                Check your inbox for Chapter 1 and your exclusive 25% discount code.
              </div>
            </div>
          )}
        </div>

        {/* Social proof */}
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{
            display: "flex", justifyContent: "center", gap: 4, marginBottom: 12,
          }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#eab308">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z"/>
              </svg>
            ))}
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#94a3b8",
            fontStyle: "italic", maxWidth: 400, margin: "0 auto 8px",
          }}>
            "This book gave me a concrete plan instead of vague anxiety. I pivoted to an AI-resistant role within 8 months."
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#64748b" }}>
            — Early Reader
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("hero");
  const [score, setScore] = useState(0);
  const assessRef = useRef(null);

  const handleStart = () => {
    setScreen("quiz");
    setTimeout(() => assessRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleComplete = (s) => {
    setScore(s);
    setScreen("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0f1e 0%, #0c1222 40%, #0f172a 100%)",
      color: "#e2e8f0",
      overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        @keyframes gridMove { 0% { transform: translate(0,0); } 100% { transform: translate(60px,60px); } }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          box-shadow: 0 0 12px rgba(59,130,246,0.5); cursor: pointer; margin-top: -8px;
          border: 2px solid rgba(255,255,255,0.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          box-shadow: 0 0 12px rgba(59,130,246,0.5); cursor: pointer;
          border: 2px solid rgba(255,255,255,0.2);
        }
        input[type="email"]::placeholder { color: #475569; }
        * { box-sizing: border-box; }
      `}</style>

      {screen !== "results" && <HeroSection onStart={handleStart} />}
      
      {screen === "quiz" && (
        <div ref={assessRef}>
          <AssessmentSection onComplete={handleComplete} />
        </div>
      )}

      {screen === "results" && <ResultsSection score={score} />}

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "40px 2rem",
        borderTop: "1px solid rgba(148,196,255,0.06)",
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#334155" }}>
          © 2026 AI-Proof Your Career · All rights reserved
        </p>
      </div>
    </div>
  );
}
