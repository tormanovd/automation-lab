import { normalizeWhitespace } from "./normalize.js";

export function cleanTelegram(rawText: string): string {
  const withoutHandles = rawText
    .replace(/@[a-zA-Z0-9_]+/g, "")
    .replace(/\bhttps?:\/\/\S+/g, "");

  return normalizeWhitespace(withoutHandles);
}
