# Backlog v1

## Must
- [x] Define initial JSON schema for extracted intake.
- [x] Add valid/invalid example payloads.
- [x] Add Gmail + Telegram cleaners.
- [x] Add schema tests and cleaner tests.

## Next
- [ ] Add evidence policy as a separate pre-schema extraction-stage check (placeholder).
- [ ] Add Russian-language QA check for `ai_summary`.
- [ ] Add LLM extraction runner with retries + repair prompt.
- [ ] Add Notion mapper + integration tests to verify no raw/clean text persistence.

## Later
- [ ] Add confidence scoring and triage states.
- [ ] Add source adapters for web forms and WhatsApp.
- [ ] Add observability (prompt/version tracing).
