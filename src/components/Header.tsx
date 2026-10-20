import { LANGS, LANG_NAME, profile } from '../data/content';
import { useI18n } from '../i18n';
import { Flag } from './Flag';

export function Header() {
  const { lang, setLang, t } = useI18n();
  const links = [
    ['#services', t.nav.services],
    ['#work', t.nav.work],
    ['#demos', t.nav.demos],
    ['#prices', t.nav.prices],
  ];

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="brand-mark">A<span>K</span></span>
          <span className="min-w-0 leading-tight">
            <strong className="block truncate text-sm font-semibold tracking-wide text-white">{profile.name}</strong>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">Web · Telegram · Apps</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div role="group" aria-label="Language" className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                title={LANG_NAME[l]}
                aria-pressed={l === lang}
                onClick={() => setLang(l)}
                className={`language-option ${l === lang ? 'language-option-active' : ''}`}
              >
                <Flag lang={l} />
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href={profile.tgUrl} target="_blank" rel="noreferrer" className="header-contact hidden sm:inline-flex">{t.nav.contact}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="mobile-nav xl:hidden">
        {links.map(([href, label]) => (
          <a key={href} href={href} className="nav-link whitespace-nowrap">{label}</a>
        ))}
        <a href="#contact" className="nav-link whitespace-nowrap text-cyan-200">{t.nav.contact} ↗</a>
      </nav>
    </header>
  );
}
