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
export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
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
