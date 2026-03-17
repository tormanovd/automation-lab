import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const schema = JSON.parse(readFileSync(resolve(root, "schemas/intake.schema.json"), "utf-8"));
const validMinimal = JSON.parse(readFileSync(resolve(root, "schemas/examples/valid-minimal.json"), "utf-8"));
const validFull = JSON.parse(readFileSync(resolve(root, "schemas/examples/valid-full.json"), "utf-8"));
const invalidExtra = JSON.parse(readFileSync(resolve(root, "schemas/examples/invalid-extra-field.json"), "utf-8"));

const ajv = new Ajv2020({ allErrors: true });
const validate = ajv.compile(schema);

describe("intake schema", () => {
  it("contains exact required top-level keys", () => {
    expect(schema.required).toEqual([
      "company",
      "contact",
      "current_state",
      "service_interest",
      "market",
      "urgency",
      "budget_range",
      "pain_points",
      "ai_summary",
      "ai_confidence_overall",
      "ai_questions",
      "needs_contact",
      "language_detected"
    ]);
  });

  it("sets additionalProperties to false", () => {
    expect(schema.additionalProperties).toBe(false);
  });

  it("accepts minimal valid example", () => {
    expect(validate(validMinimal)).toBe(true);
    expect(validMinimal.ai_questions).toHaveLength(3);
  });

  it("accepts full valid example", () => {
    expect(validate(validFull)).toBe(true);
    expect(validFull.ai_questions).toHaveLength(3);
  });

  it("rejects extra fields", () => {
    expect(validate(invalidExtra)).toBe(false);
  });
});
