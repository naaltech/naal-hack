import en from "@/locales/en.json"
import tr from "@/locales/tr.json"

export type Language = "en" | "tr"

export const translations = { en, tr }

export const languagePaths: Record<Language, string> = {
  tr: "/",
  en: "/en/",
}
