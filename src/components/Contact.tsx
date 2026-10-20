import { profile } from '../data/content';
import { useI18n } from '../i18n';

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="contact-section mx-auto max-w-7xl px-4 pb-5 pt-12 sm:px-6 sm:pb-8 lg:px-8">
      <div className="contact-panel">
        <div className="contact-panel-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="contact-panel-content">
          <div className="section-kicker"><span className="kicker-line" />{t.contact.kicker}</div>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.tgUrl} target="_blank" rel="noreferrer" className="button-primary">{t.contact.cta}<span aria-hidden="true">↗</span></a>
            <a href={profile.ghUrl} target="_blank" rel="noreferrer" className="button-secondary">{t.contact.github}<span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="contact-orb" aria-hidden="true"><span>AK</span><i /><b /></div>
      </div>
      <footer className="site-footer"><a href="#top" className="footer-brand"><span className="brand-mark">A<span>K</span></span><span>{profile.name}</span></a><span>{t.footer}</span><span>© {new Date().getFullYear()} · {t.contact.kicker}</span></footer>
    </section>
  );
}
