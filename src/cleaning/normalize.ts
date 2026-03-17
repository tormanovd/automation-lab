export function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

export function stripCommonNoise(input: string): string {
  return input
    .replace(/Sent from my iPhone/gi, "")
    .replace(/--\s*\n?[\s\S]*$/m, "")
    .replace(/_{3,}/g, " ");
}
