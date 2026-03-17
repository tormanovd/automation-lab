import { describe, expect, it } from "vitest";
import { cleanTelegram } from "../src/cleaning/telegram.js";

describe("cleanTelegram", () => {
  it("removes handles and links", () => {
    const raw = "@sales Привет! Нужен intake бот https://example.com/details";
    expect(cleanTelegram(raw)).toBe("Привет! Нужен intake бот");
  });
});
