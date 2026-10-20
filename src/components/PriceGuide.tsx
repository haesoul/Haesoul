import { useI18n } from '../i18n';

export function PriceGuide() {
  const { t } = useI18n();
  return (
    <section id="prices" className="section-shell pricing-section">
      <div className="section-heading-row">
        <div><div className="section-kicker"><span className="kicker-line" />{t.prices.kicker}</div><h2 className="section-title">{t.prices.title}</h2><p className="section-lead">{t.prices.lead}</p></div>
        <span className="section-index">04 / 05</span>
      </div>
      <div className="pricing-layout">
        <div className="pricing-list">
          {t.prices.items.map((item, i) => (
            <article key={item.name} className={`pricing-row ${i === 0 ? 'pricing-row-featured' : ''}`}>
              <span className="pricing-row-index">0{i + 1}</span>
              <div className="min-w-0 flex-1"><h3>{item.name}</h3><p>{item.detail}</p><span className="pricing-duration"><span aria-hidden="true">◷</span>{t.prices.duration}: {item.time}</span></div>
              <strong className="pricing-range">{item.range}</strong>
            </article>
          ))}
        </div>
        <aside className="pricing-note">
          <div className="pricing-note-icon">$</div>
          <span className="pricing-note-kicker">BEFORE WE START</span>
          <h3>{t.prices.noteTitle}</h3>
          <p>{t.prices.note}</p>
          <a href="#contact" className="pricing-note-link">{t.contact.cta}<span aria-hidden="true">↗</span></a>
          <div className="pricing-orbit pricing-orbit-one" aria-hidden="true" /><div className="pricing-orbit pricing-orbit-two" aria-hidden="true" />
        </aside>
      </div>
      <p className="pricing-footnote"><span aria-hidden="true">ⓘ</span>{t.prices.footnote}</p>
    </section>
  );
}
