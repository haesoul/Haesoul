import { useI18n } from '../i18n';

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{t.services.title}</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {t.services.items.map((s) => (
          <article key={s.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 transition hover:border-blue-500/60">
            <h3 className="text-lg font-semibold text-white">{s.t}</h3>
            <p className="mt-2 leading-relaxed text-zinc-400">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
