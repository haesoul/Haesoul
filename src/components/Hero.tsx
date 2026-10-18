import { profile, stack } from '../data/content';
import { useI18n } from '../i18n';
import { PhoneDemo } from './PhoneDemo';

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
      <div>
        <h1>
          <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text font-display text-4xl font-bold leading-tight text-transparent sm:text-6xl">
            {profile.name}
          </span>
          <span className="mt-6 block max-w-xl text-xl font-medium leading-snug text-zinc-100 sm:text-2xl">
            {t.hero.title}
          </span>
        </h1>
        <p className="mt-5 max-w-lg leading-relaxed text-zinc-400">{t.hero.lead}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={profile.tgUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] transition hover:brightness-110"
          >
            {t.hero.cta}
          </a>
          <a
            href={profile.ghUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-400"
          >
            GitHub {profile.ghHandle}
          </a>
          <a href="#work" className="px-3 py-3 text-sm text-zinc-400 transition hover:text-white">
            {t.hero.more}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <PhoneDemo />
        <p className="text-center text-sm text-zinc-500">{t.hero.caption}</p>
      </div>
    </section>
  );
}
