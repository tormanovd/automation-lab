# Inbound Leads AI Intake — Architecture v1

## Goal
Create a minimal intake pipeline for inbound leads from Gmail and Telegram, normalize text, and extract structured fields via LLM prompts.

## Flow
1. **Raw source** arrives from Gmail or Telegram.
2. **Cleaning layer** strips signatures/formatting and outputs internal `clean_text`.
3. **Extraction prompt** maps cleaned content to the final schema-defined business fields.
4. **Validation layer** checks JSON against `schemas/intake.schema.json`.
5. **Persistence layer** stores only final structured data in Notion (never `raw_text` or `clean_text`).

## Core constraints
- `ai_summary` must be generated in Russian.
- `ai_questions` must contain exactly 3 questions.
- Final output schema is business extraction contract only.
- Evidence substring validation is a separate pre-schema check (TODO).

## Components
- `src/cleaning/gmail.ts` — Gmail text cleanup.
- `src/cleaning/telegram.ts` — Telegram text cleanup.
- `src/cleaning/normalize.ts` — shared normalization.
- `src/types/intake.ts` — TypeScript types for internal record + final output.
- `schemas/intake.schema.json` — final extraction contract + examples in `schemas/examples`.
- `prompts/` — system, user template, repair prompts.
- `tests/` — schema and cleaning checks.
