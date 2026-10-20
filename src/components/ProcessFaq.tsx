import { useI18n } from '../i18n';

export function ProcessFaq() {
  const { t } = useI18n();
  return (
    <section className="section-shell process-section">
      <div className="section-heading-row">
        <div><div className="section-kicker"><span className="kicker-line" />{t.process.kicker}</div><h2 className="section-title">{t.process.title}</h2></div>
        <span className="section-index">05 / 05</span>
      </div>
      <div className="process-grid">
        {t.process.items.map((item, i) => <article key={item.n} className={`process-step process-step-${i}`}><div className="process-step-top"><span>{item.n}</span><i aria-hidden="true">{i === 0 ? '↗' : i === 1 ? '◫' : '✓'}</i></div><h3>{item.title}</h3><p>{item.text}</p><span className="process-connector" aria-hidden="true" /></article>)}
      </div>
      <div className="faq-layout">
        <div className="faq-intro"><span className="section-kicker"><span className="kicker-line" />FAQ</span><h2>{t.faq.title}</h2><p>{t.prices.footnote}</p></div>
        <div className="faq-list">
          {t.faq.items.map((item, i) => <details key={item.q} className="faq-item" open={i === 0}><summary><span>{item.q}</span><i aria-hidden="true">+</i></summary><p>{item.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}
