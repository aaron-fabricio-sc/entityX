import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let path = url.pathname;

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const [, lang] = path.split("/");
  if (lang === "en") return "en";
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getPathForLang(l: string) {
  // Get the base path (e.g., /entityX)
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // Remove trailing slash if any

  // Force root path for Spanish (default)
  if (l === "es") return base || "";
  // Force /en prefix for English
  if (l === "en") return `${base}/en`;
  // Fallback to root
  return base || "";
}
