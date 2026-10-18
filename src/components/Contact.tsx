import { profile } from '../data/content';
import { useI18n } from '../i18n';

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-20">
      <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/30 via-blue-950/50 to-black p-8 sm:p-14">
        <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 max-w-md text-zinc-300">{t.contact.text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.tgUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-100">
            Telegram {profile.tgHandle}
          </a>
          <a href={profile.ghUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white">
            GitHub {profile.ghHandle}
          </a>
        </div>
      </div>
      <footer className="flex flex-wrap justify-between gap-2 py-10 text-xs text-zinc-600">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{t.footer}</span>
      </footer>
    </section>
  );
}
