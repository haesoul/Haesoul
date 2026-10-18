import { LANGS, LANG_NAME, profile } from '../data/content';
import { useI18n } from '../i18n';
import { Flag } from './Flag';

export function Header() {
  const { lang, setLang, t } = useI18n();
  const links = [
    ['#services', t.nav.services],
    ['#work', t.nav.work],
    ['#contact', t.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-display text-sm font-bold text-white">
          {profile.name}
        </a>
        <nav aria-label="Main" className="hidden gap-7 text-sm text-zinc-400 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div role="group" aria-label="Language" className="flex gap-1.5">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              title={LANG_NAME[l]}
              aria-pressed={l === lang}
              onClick={() => setLang(l)}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium ring-1 transition ${
                l === lang
                  ? 'bg-blue-600/20 text-white ring-blue-500'
                  : 'text-zinc-400 ring-white/10 hover:text-white hover:ring-white/30'
              }`}
            >
              <Flag lang={l} />
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
