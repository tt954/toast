/**
 * Converts a string to a slug (a URL-friendly version of the string).
 * @params str The input string to slugify.
 * @returns str The slugified string or an empty string if the input string is null or undefined.
 */
export default function slugify(str: string | null | undefined): string {
  if (!str) return "";

  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/\s+/g, "-"); // Replace spaces with hyphens
  str = str.replace(/[^a-z0-9-_]+/g, ""); // Remove invalid characters (anything that is not a letter, number, hyphen, or underscore)
  str = str.replace(/-+/g, "-"); // Remove consecutive hyphens

  return str;
}
