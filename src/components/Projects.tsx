import { useState } from 'react';
import { useI18n } from '../i18n';

function SportsBoard() {
  return <div className="project-art sports-art" aria-label="Stylized dashboard interface preview">
    <div className="sports-art-sidebar"><span className="sports-art-logo">S</span><i /><i /><i /><i /></div>
    <div className="sports-art-main"><div className="sports-art-head"><span /><span /></div><div className="sports-art-cards"><span /><span /><span /></div><div className="sports-art-graph"><div className="sports-graph-heading"><span /><span /></div><div className="sports-graph-bars">{[36, 54, 42, 70, 50, 78, 65, 88, 72].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div><div className="sports-art-rows"><i /><i /><i /></div></div>
  </div>;
}

function RatingApp() {
  const [rating, setRating] = useState(4);
  return <div className="project-art rating-art" aria-label="Stylized mobile rating app preview">
    <div className="rating-phone"><div className="rating-phone-camera" /><div className="rating-app-top"><span>◎</span><span>•••</span></div><span className="rating-app-orb">✳</span><p className="rating-app-eyebrow">QUICK REVIEW</p><h4>Rate your<br />experience.</h4><div className="rating-stars" aria-label={`Selected rating: ${rating} out of 5`}>{[1, 2, 3, 4, 5].map((n) => <button key={n} type="button" aria-label={`Set rating ${n}`} aria-pressed={rating === n} onClick={() => setRating(n)}>{n <= rating ? '★' : '☆'}</button>)}</div><span className="rating-app-label">YOUR SCORE · {rating}/5</span><div className="rating-app-bar"><span style={{ width: `${rating * 20}%` }} /></div><div className="rating-app-offline"><span /> SAVED ON DEVICE</div></div><div className="rating-orbit rating-orbit-a" /><div className="rating-orbit rating-orbit-b" /><div className="rating-float-label">TAP TO RATE <span>↗</span></div>
  </div>;
}

function CoffeeArt() {
  return <div className="project-art coffee-art" aria-label="Coffee ordering chat preview"><div className="coffee-art-phone"><div className="coffee-art-top"><span className="coffee-art-avatar">A</span><span><b>ARAL COFFEE</b><small>order assistant</small></span><i /></div><div className="coffee-art-chat"><span className="coffee-art-bubble">Hi! Ready to order?</span><span className="coffee-art-choice"><b>☕</b><span><strong>Flat white</strong><small>20 000 UZS</small></span><em>+</em></span><span className="coffee-art-choice"><b>◉</b><span><strong>Latte</strong><small>18 000 UZS</small></span><em>+</em></span><span className="coffee-art-total"><span>Total</span><strong>38 000 сум</strong></span><span className="coffee-art-cta">Continue order ↗</span></div></div><span className="coffee-art-orbit" /><span className="coffee-art-sticker">ORDER<br />FLOW</span></div>;
}

export function Projects() {
  const { t } = useI18n();
  const statusLabel = (status: string) => status === 'client' ? t.work.labels.client : status === 'app' ? t.work.labels.app : t.work.labels.demo;
  return (
    <section id="work" className="section-shell work-section">
      <div className="section-heading-row">
        <div><div className="section-kicker"><span className="kicker-line" />{t.work.kicker}</div><h2 className="section-title">{t.work.title}</h2><p className="section-lead">{t.work.lead}</p></div>
        <span className="section-index">02 / 05</span>
      </div>
      <div className="projects-grid">
        {t.work.items.map((project, i) => (
          <article key={project.name} className={`project-card project-card-${i}`}>
            <div className={`project-art-wrap project-art-wrap-${i}`}>
              <div className="project-art-topline"><span className="project-art-badge"><i />{statusLabel(project.status)}</span><span className="project-art-count">{t.work.labels.concept} · 0{i + 1}</span></div>
              {i === 0 ? <SportsBoard /> : i === 1 ? <RatingApp /> : <CoffeeArt />}
              <span className="project-art-wash" aria-hidden="true" />
            </div>
            <div className="project-info">
              <div className="project-category-line"><span>{i === 0 ? 'B2B PLATFORM' : i === 1 ? 'MOBILE PRODUCT' : 'TELEGRAM FLOW'}</span><span aria-hidden="true">↗</span></div>
              <h3>{project.name}</h3>
              <p className="project-intro">{project.text}</p>
              <div className="project-detail-block"><span>{t.work.labels.problem}</span><p>{project.problem}</p></div>
              <div className="project-detail-block"><span>{t.work.labels.role}</span><p>{project.role}</p></div>
              <div className="project-tech-row"><span>{t.work.labels.stack}</span><div>{project.stack.map((tech) => <small key={tech}>{tech}</small>)}</div></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
