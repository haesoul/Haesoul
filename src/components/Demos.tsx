import { useState } from 'react';
import { profile } from '../data/content';
import { useI18n } from '../i18n';
import { PhoneDemo } from './PhoneDemo';

type DemoTab = 'coffee' | 'salon' | 'website';

function SalonBookingDemo() {
  const { t } = useI18n();
  const d = t.demos.salon;
  const [serviceId, setServiceId] = useState('cut');
  const [specialistId, setSpecialistId] = useState('ali');
  const [slot, setSlot] = useState('11:30');
  const [complete, setComplete] = useState(false);
  const service = d.services.find((item) => item.id === serviceId) ?? d.services[0];
  const specialist = d.specialists.find((item) => item.id === specialistId) ?? d.specialists[0];
  const money = (amount: number) => `${amount.toLocaleString('ru-RU')} ${d.sum}`;

  return (
    <div className="salon-demo" role="group" aria-label={d.aria}>
      <div className="salon-demo-heading">
        <div className="salon-brand-mark">F<span>.</span></div>
        <div className="min-w-0 flex-1"><strong>{d.brand}</strong><small>{d.subtitle}</small></div>
        <span className="salon-open-indicator"><span /> DEMO</span>
      </div>
      {!complete ? <>
        <div className="salon-section-title"><span>{d.service}</span><span>01 / 03</span></div>
        <div className="salon-service-list">
          {d.services.map((item) => <button key={item.id} type="button" onClick={() => setServiceId(item.id)} className={`salon-service-option ${serviceId === item.id ? 'salon-option-selected' : ''}`} aria-pressed={serviceId === item.id}>
            <span className="salon-choice-radio">{serviceId === item.id ? '✓' : ''}</span><span className="min-w-0 flex-1 text-left"><strong>{item.name}</strong><small>{item.duration}</small></span><b>{money(item.price)}</b>
          </button>)}
        </div>
        <div className="salon-section-title mt-6"><span>{d.specialist}</span><span>02 / 03</span></div>
        <div className="grid grid-cols-2 gap-2">
          {d.specialists.map((item, index) => <button key={item.id} type="button" onClick={() => setSpecialistId(item.id)} className={`salon-specialist ${specialistId === item.id ? 'salon-option-selected' : ''}`} aria-pressed={specialistId === item.id}>
            <span className={`specialist-avatar specialist-avatar-${index}`}>{item.name.slice(0, 1)}</span><span className="min-w-0 text-left"><strong>{item.name}</strong><small>{item.role}</small></span><span className="specialist-check">{specialistId === item.id ? '✓' : '+'}</span>
          </button>)}
        </div>
        <div className="salon-section-title mt-6"><span>{d.time}</span><span>03 / 03</span></div>
        <p className="mb-3 mt-2 text-[9px] font-semibold tracking-[0.15em] text-slate-500">{d.day}</p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {d.slots.map((time) => <button key={time} type="button" onClick={() => setSlot(time)} aria-pressed={slot === time} className={`salon-time-slot ${slot === time ? 'salon-time-selected' : ''}`}>{time}</button>)}
        </div>
        <div className="salon-summary mt-6"><div><small>{service.name} · {specialist.name}</small><strong>{slot}</strong></div><strong>{money(service.price)}</strong></div>
        <button type="button" className="salon-book-button" onClick={() => setComplete(true)}>{d.confirm}<span aria-hidden="true">↗</span></button>
      </> : <div className="salon-success-panel"><span className="salon-success-icon">✓</span><h3>{d.successTitle}</h3><p>{d.success}</p><div className="salon-success-summary"><span>{service.name}</span><strong>{slot}</strong><span>{specialist.name}</span><strong>{money(service.price)}</strong></div><button type="button" onClick={() => setComplete(false)}>{d.reset} ↻</button></div>}
      <p className="salon-demo-note">ⓘ {d.note}</p>
    </div>
  );
}

function ServiceWebsiteDemo() {
  const { t } = useI18n();
  const d = t.demos.website;
  const [pricesOpen, setPricesOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  return (
    <div className="website-demo-wrap" role="group" aria-label={d.aria}>
      <div className="browser-topbar"><div className="browser-dots"><span /><span /><span /></div><div className="browser-address"><span>⌁</span> nova-auto.example</div><span className="browser-menu">•••</span></div>
      <div className="business-site">
        <header className="business-site-header"><a href="#demos" className="business-logo"><span>✳</span>{d.brand}</a><nav aria-label="Demo website navigation" className="hidden gap-5 sm:flex"><a href="#site-services">{d.navServices}</a><button type="button" onClick={() => setPricesOpen(true)}>{d.navPrices}</button><button type="button" onClick={() => setFeaturesOpen((open) => !open)}>{d.navAbout}</button></nav><span className="business-menu-mobile">☰</span></header>
        <div className="business-hero">
          <div className="business-photo" aria-hidden="true"><div className="car-light car-light-one" /><div className="car-light car-light-two" /><div className="car-silhouette"><span /></div><div className="car-reflection" /></div>
          <div className="business-hero-content"><span className="business-eyebrow">{d.heroTag}</span><h3>{d.title}</h3><p>{d.text}</p><button type="button" onClick={() => setPricesOpen((open) => !open)}>{pricesOpen ? d.hidePrices : d.action}<span aria-hidden="true">↗</span></button></div>
        </div>
        <div id="site-services" className="business-services"><div className="mb-4 flex items-end justify-between gap-3"><div><span className="business-section-label">NOVA / CARE</span><h4>{d.listTitle}</h4></div><span className="business-service-count">03 SERVICES</span></div>
          <div className="business-service-grid">{d.items.map((item, i) => <div key={item.name} className="business-service-item"><span className="business-service-number">0{i + 1}</span><div><strong>{item.name}</strong><small>{item.price}</small></div><span className="business-service-arrow">↗</span></div>)}</div>
          {pricesOpen && <div className="business-prices-panel"><span className="business-section-label">PRICE GUIDE</span><p>{d.items.map((item) => item.name).join(' · ')}</p><button type="button" onClick={() => setPricesOpen(false)}>{d.hidePrices}</button></div>}
          {featuresOpen && <div className="business-prices-panel"><span className="business-section-label">WHY NOVA</span><p>{d.text}</p><button type="button" onClick={() => setFeaturesOpen(false)}>{d.navAbout} ×</button></div>}
        </div>
        <div className="business-site-footer"><span>{d.footer}</span><span>© NOVA AUTO</span></div>
      </div>
      <div className="website-demo-caption"><span className="pulse-point" />{d.browser}</div>
      <a href={profile.tgUrl} target="_blank" rel="noreferrer" className="website-hire-link">{d.contact}<span>↗</span></a>
    </div>
  );
}

export function Demos() {
  const { t } = useI18n();
  const [active, setActive] = useState<DemoTab>('coffee');
  const activeTab = t.demos.tabs.find((tab) => tab.id === active) ?? t.demos.tabs[0];
  const explanations: Record<DemoTab, { title: string; text: string; points: string[] }> = {
    coffee: { title: t.work.items[2].name, text: t.work.items[2].text, points: [t.demos.coffee.items.latte, t.demos.coffee.items.flat, t.demos.coffee.items.cake] },
    salon: { title: t.demos.salon.brand, text: t.demos.salon.subtitle, points: [t.demos.salon.service, t.demos.salon.specialist, t.demos.salon.time] },
    website: { title: t.demos.website.brand, text: t.demos.website.text, points: [t.demos.website.navServices, t.demos.website.navPrices, t.demos.website.navAbout] },
  };
  const copy = explanations[active];

  return (
    <section id="demos" className="section-shell demos-section">
      <div className="section-heading-row">
        <div><div className="section-kicker"><span className="kicker-line" />{t.demos.kicker}</div><h2 className="section-title">{t.demos.title}</h2><p className="section-lead">{t.demos.lead}</p></div>
        <span className="section-index">03 / 05</span>
      </div>
      <div className="demo-tabs" role="tablist" aria-label={t.demos.title}>
        {t.demos.tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={active === tab.id} onClick={() => setActive(tab.id as DemoTab)} className={`demo-tab ${active === tab.id ? 'demo-tab-active' : ''}`}><span>{tab.marker}</span>{tab.label}<b aria-hidden="true">↗</b></button>)}
      </div>
      <div className="demo-stage" key={active}>
        <div className="demo-copy">
          <span className="demo-copy-eyebrow">{activeTab.marker} / {activeTab.label}</span>
          <h3>{copy.title}</h3>
          <p>{copy.text}</p>
          <ul>{copy.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}</ul>
          <div className="demo-scope-note"><span className="scope-note-icon">i</span><p>{t.demos.disclaimer}</p></div>
        </div>
        <div className={`demo-preview demo-preview-${active}`}>
          {active === 'coffee' && <PhoneDemo />}
          {active === 'salon' && <SalonBookingDemo />}
          {active === 'website' && <ServiceWebsiteDemo />}
        </div>
      </div>
      <p className="demo-bottom-note"><span className="pulse-point" />{t.demos.disclaimer}</p>
    </section>
  );
}
