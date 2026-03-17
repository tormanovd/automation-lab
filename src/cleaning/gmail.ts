import { normalizeWhitespace, stripCommonNoise } from "./normalize.js";

export function cleanGmail(rawText: string): string {
  const withoutQuoted = rawText
    .split("\n")
    .filter((line) => !line.trimStart().startsWith(">"))
    .join("\n");

  const stripped = stripCommonNoise(withoutQuoted);
  return normalizeWhitespace(stripped);
}
