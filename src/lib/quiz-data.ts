export interface Factor {
  id: string;
  label: string;
  question: string;
  low: string;
  high: string;
}

export interface RiskProfile {
  level: "Low" | "Moderate" | "Significant" | "High";
  color: string;
  bg: string;
  label: string;
  message: string;
  timeline: string;
}

export const FACTORS: Factor[] = [
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
    question:
      "How much does your role depend on processing structured data?",
    low: "Rarely data-driven",
    high: "Entirely data-driven",
  },
  {
    id: "interaction",
    label: "Human Interaction",
    question:
      "How central is face-to-face interaction to your value?",
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
    question:
      "Does your job require physical presence in unpredictable environments?",
    low: "High physical demands",
    high: "Entirely digital",
  },
];

export function getRiskProfile(score: number): RiskProfile {
  if (score <= 15)
    return {
      level: "Low",
      color: "#22c55e",
      bg: "#052e16",
      label: "Low Vulnerability",
      message:
        "Your role has strong natural defenses against AI disruption. You have time to build on your advantages strategically.",
      timeline: "12+ months for gradual skill building",
    };
  if (score <= 25)
    return {
      level: "Moderate",
      color: "#eab308",
      bg: "#422006",
      label: "Moderate Vulnerability",
      message:
        "Parts of your role are automatable, but your core value remains human. Strategic upskilling will strengthen your position significantly.",
      timeline: "6\u201312 months for focused development",
    };
  if (score <= 35)
    return {
      level: "Significant",
      color: "#f97316",
      bg: "#431407",
      label: "Significant Vulnerability",
      message:
        "A substantial portion of your role could be automated in the near term. Active career adaptation should be a priority starting now.",
      timeline: "3\u20136 months for urgent skill building",
    };
  return {
    level: "High",
    color: "#ef4444",
    bg: "#450a0a",
    label: "High Vulnerability",
    message:
      "Your current role is at serious risk of AI disruption. The good news? Knowing this now gives you a critical head start over those who haven\u2019t assessed their position.",
    timeline: "Begin transition planning immediately",
  };
}
