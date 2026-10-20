import { useI18n } from '../i18n';

export function HeroVisual() {
  const { t } = useI18n();
  const p = t.hero.preview;

  return (
    <div className="hero-visual-wrap" aria-label={p.subtitle}>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-console floating-slow">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-black text-slate-950">A.</span>
            <div>
              <p className="text-xs font-semibold text-white">{p.title}</p>
              <p className="mt-0.5 text-[10px] text-slate-500">{p.subtitle}</p>
            </div>
          </div>
          <span className="live-dot" title={p.badge} />
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
          <div className="mini-metric mini-metric-cyan">
            <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{p.order}</span>
            <span className="mt-2 block text-xl font-semibold tracking-tight text-white">#024</span>
            <span className="mt-1 block text-[10px] text-cyan-200">{p.orderValue}</span>
          </div>
          <div className="mini-metric mini-metric-violet">
            <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{p.booking}</span>
            <span className="mt-2 block text-xl font-semibold tracking-tight text-white">15:30</span>
            <span className="mt-1 block text-[10px] text-violet-200">{p.bookingValue}</span>
          </div>
        </div>
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="chart-box">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-slate-200">{p.week}</span>
              <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-widest text-slate-500">UI preview</span>
            </div>
            <div className="flex h-24 items-end gap-2" aria-hidden="true">
              {[31, 47, 39, 63, 51, 78, 67, 91, 73, 84, 58, 70].map((v, i) => (
                <span key={i} className={`chart-bar chart-bar-${i % 4}`} style={{ height: `${v}%`, animationDelay: `${i * 55}ms` }} />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.13em] text-slate-600"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
          </div>
        </div>
      </div>
      <div className="float-chip float-chip-top"><span className="chip-icon chip-icon-cyan">↗</span><span><strong>{p.status}</strong><small>{p.statusValue}</small></span></div>
      <div className="float-chip float-chip-bottom"><span className="chip-icon chip-icon-violet">✳</span><span><strong>{p.badge}</strong><small>Frontend · UI concept</small></span></div>
      <div className="hero-visual-caption"><span className="pulse-point" /> {p.statusValue}</div>
    </div>
  );
}
