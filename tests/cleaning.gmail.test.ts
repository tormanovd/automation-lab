import { describe, expect, it } from "vitest";
import { cleanGmail } from "../src/cleaning/gmail.js";

describe("cleanGmail", () => {
  it("removes quoted lines and normalizes whitespace", () => {
    const raw = `Hello team,\n\nNeed intake support.\n> old thread\n\nSent from my iPhone`;
    expect(cleanGmail(raw)).toBe("Hello team, Need intake support.");
  });
});
