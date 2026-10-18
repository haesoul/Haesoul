import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dict, LANGS, type Dict, type Lang } from './data/content';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18n = createContext<Ctx>(null!);

function detect(): Lang {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const saved = (() => { try { return localStorage.getItem('lang'); } catch { return null; } })();
  const pick = fromUrl ?? saved;
  if (LANGS.includes(pick as Lang)) return pick as Lang;
  const nav = navigator.language.toLowerCase();
  return nav.startsWith('uz') ? 'uz' : nav.startsWith('en') ? 'en' : 'ru';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detect);
  const t = dict[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const set = (sel: string, v: string) => document.querySelector(sel)?.setAttribute('content', v);
    set('meta[name="description"]', t.meta.desc);
    set('meta[property="og:title"]', t.meta.title);
    set('meta[property="og:description"]', t.meta.desc);
    try { localStorage.setItem('lang', lang); } catch { /* storage unavailable */ }
  }, [lang, t]);

  return <I18n.Provider value={{ lang, setLang, t }}>{children}</I18n.Provider>;
}

export const useI18n = () => useContext(I18n);
