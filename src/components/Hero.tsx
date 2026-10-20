import { profile, stack } from '../data/content';
import { useI18n } from '../i18n';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="hero-section relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative z-10 hero-copy">
        <div className="section-kicker"><span className="kicker-line" />{t.hero.kicker}</div>
        <h1 className="hero-title mt-6 max-w-3xl font-display font-semibold tracking-[-0.055em] text-white">
          {t.hero.title.split('. ').length > 1 ? <>{t.hero.title.split('. ')[0]}.<span className="block gradient-text">{t.hero.title.split('. ').slice(1).join('. ')}</span></> : t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.hero.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.tgUrl} target="_blank" rel="noreferrer" className="button-primary">
            {t.hero.cta}<span aria-hidden="true">↗</span>
          </a>
          <a href="#demos" className="button-secondary">{t.hero.more}<span aria-hidden="true">↓</span></a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400 sm:text-sm">
          {t.hero.trust.map((item) => <span key={item} className="flex items-center gap-2"><span className="check-dot">✓</span>{item}</span>)}
        </div>
        <div className="mt-10 border-t border-white/[0.08] pt-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">{t.hero.caption}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => <span key={s} className="stack-pill">{s}</span>)}
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto w-full max-w-xl lg:ml-auto lg:max-w-none">
        <HeroVisual />
      </div>
    </section>
  );
}
