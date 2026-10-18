import { tones } from '../data/content';
import { useI18n } from '../i18n';

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{t.work.title}</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {t.work.items.map((p, i) => (
          <article key={p.name} className={`flex min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br ${tones[i]} to-black p-6`}>
            <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
            <div>
              <p className="text-sm leading-relaxed text-zinc-300">{p.text}</p>
              <p className="mt-3 text-xs text-blue-300">{t.work.stacks[i]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
