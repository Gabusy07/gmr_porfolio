import { RESUME } from '../resume';
import { ui, defaultLang, showDefaultLang } from './ui';
import type { ResumeData } from '@/interfaces/Resume';


export function getLangFromUrl(url: URL):string {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

  export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: any = lang) {
      return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
    }
  }

  export function getResume(lang : string ): ResumeData{
    let resume: ResumeData = RESUME.en;
    if (lang === 'es') resume = RESUME.es;
    return resume;
  }