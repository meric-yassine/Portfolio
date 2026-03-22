/** Join class names; omit falsy entries. No external dependency. */
export function cn(...parts: (string | false | undefined | null)[]): string {
  return parts.filter(Boolean).join(" ");
}
