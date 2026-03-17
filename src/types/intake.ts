export type ServiceInterest = "Performance" | "Analytics" | "Mixed" | "Other" | null;
export type Market = "PL" | "DACH" | "EU" | "US" | "Other" | null;
export type Urgency = "this week" | "2–4 weeks" | "later" | null;

export interface Company {
  name: string | null;
  website: string | null;
}

export interface Contact {
  name: string | null;
  role: string | null;
  email: string | null;
  telegram: string | null;
}

export interface BudgetRange {
  text: string | null;
  currency: string | null;
  min: number | null;
  max: number | null;
  confidence: number;
  evidence: string | null;
}

export interface FinalIntakeOutput {
  company: Company;
  contact: Contact;
  current_state: string | null;
  service_interest: ServiceInterest;
  market: Market;
  urgency: Urgency;
  budget_range: BudgetRange;
  pain_points: string[] | null;
  ai_summary: string;
  ai_confidence_overall: number;
  ai_questions: [string, string, string];
  needs_contact: boolean;
  language_detected: string | null;
}

export interface IntakeRecord {
  raw_text?: string;
  clean_text: string;
  output: FinalIntakeOutput;
}

export type NotionLeadPayload = FinalIntakeOutput;

export function toNotionPayload(intake: IntakeRecord): NotionLeadPayload {
  return intake.output;
}
