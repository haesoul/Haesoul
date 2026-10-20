import { useI18n } from '../i18n';

const ICONS = ['↗', '◫', '◷', '⌘'];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="section-shell services-section">
      <div className="section-heading-row">
        <div><div className="section-kicker"><span className="kicker-line" />{t.services.kicker}</div><h2 className="section-title">{t.services.title}</h2><p className="section-lead">{t.services.lead}</p></div>
        <span className="section-index">01 / 05</span>
      </div>
      <div className="services-grid">
        {t.services.items.map((service, i) => (
          <article key={service.n} className={`service-card service-card-${i}`}>
            <div className="flex items-start justify-between gap-4"><span className="service-icon" aria-hidden="true">{ICONS[i]}</span><span className="service-number">{service.n}</span></div>
            <h3>{service.t}</h3>
            <p>{service.d}</p>
            <div className="service-tag-row"><span className="service-tag-dot" />{service.tag}</div>
            <span className="service-card-glow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
