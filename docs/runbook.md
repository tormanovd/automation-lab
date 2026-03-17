# Runbook

## Install
```bash
npm install
```

## Run tests
```bash
npm test
```

## Updating schema
1. Edit `schemas/intake.schema.json`.
2. Update examples under `schemas/examples/`.
3. Run tests.

## Operational checks
- Ensure extraction output validates against schema.
- Ensure `ai_questions` length is exactly 3.
- Ensure each evidence string appears in `clean_text` before persistence.
- Ensure Notion payload omits `raw_text` and `clean_text`.
