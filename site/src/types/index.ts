// ─── Кейс клиента ────────────────────────────────────────────
export interface Case {
  id: string;
  name: string;
  age: number;
  location?: string;
  problem: string;
  problems: string[];
  duration: string;
  results: string[];
  quote: string;
  tag: CaseTag;
}

export type CaseTag =
  | "joints"
  | "pressure"
  | "gut"
  | "energy"
  | "business"
  | "crisis";

// ─── Программа здоровья ───────────────────────────────────────
export interface ProgramWeek {
  week: string;
  focus: string;
  details: string;
}

export interface ProgramCause {
  title: string;
  description: string;
  icon: string;
}

export interface ProgramTimeline {
  period: string;
  results: string[];
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  scienceNote?: string;
  personalStory?: string;
  heroQuote?: string;
  causes?: ProgramCause[];
  baseConditions?: string[];
  weekByWeek?: ProgramWeek[];
  expectedResults?: ProgramTimeline[];
  faq?: ProgramFAQ[];
  targetProblems: string[];
  results: string[];
  duration: string;
  steps: ProgramStep[];
  icon: string;
}

export interface ProgramStep {
  step: number;
  title: string;
  description: string;
}

// ─── Статья блога ────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
}

// ─── Цитата ──────────────────────────────────────────────────
export interface Quote {
  text: string;
  context?: string;
  category: "health" | "age" | "business" | "philosophy";
}

// ─── Навигационный пункт ────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
