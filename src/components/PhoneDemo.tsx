import { useMemo, useState } from 'react';
import { useI18n } from '../i18n';

const ITEMS = [
  { id: 'latte', price: 18000, icon: '☕' },
  { id: 'flat', price: 20000, icon: '◒' },
  { id: 'cake', price: 22000, icon: '✳' },
] as const;

export function PhoneDemo() {
  const { t } = useI18n();
  const d = t.demos.coffee;
  const [cart, setCart] = useState<Record<string, number>>({});
  const [confirmed, setConfirmed] = useState(false);
  const lines = useMemo(() => ITEMS.filter((item) => cart[item.id]).map((item) => ({ ...item, qty: cart[item.id] })), [cart]);
  const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
  const fmt = (amount: number) => `${amount.toLocaleString('ru-RU')} ${d.sum}`;
  const add = (id: string) => { setConfirmed(false); setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 })); };
  const remove = (id: string) => setCart((current) => {
    const { [id]: qty = 0, ...rest } = current;
    return qty > 1 ? { ...rest, [id]: qty - 1 } : rest;
  });
  const reset = () => { setCart({}); setConfirmed(false); };

  return (
    <div role="group" aria-label={d.aria} className="coffee-demo-card">
      <div className="coffee-demo-top">
        <div className="flex items-center gap-3">
          <span className="coffee-logo" aria-hidden="true">A</span>
          <div><strong className="block text-sm text-white">{d.brand}</strong><span className="mt-1 block text-[11px] text-slate-400">{d.sub}</span></div>
        </div>
        <span className="demo-mode-pill"><span className="pulse-point" />{d.online}</span>
      </div>
      <div className="coffee-chat-area" aria-live="polite">
        <div className="chat-date-label"><span /> {d.eyebrow} <span /></div>
        <div className="chat-bubble chat-bubble-bot"><span className="chat-avatar">A</span><p>{d.hi}</p></div>

        {!confirmed && (
          <div className="coffee-menu-list">
            {ITEMS.map((item) => (
              <div key={item.id} className="coffee-menu-item">
                <div className="coffee-item-symbol" aria-hidden="true">{item.icon}</div>
                <div className="min-w-0 flex-1"><strong>{d.items[item.id]}</strong><small>{d.details[item.id]}</small><span>{fmt(item.price)}</span></div>
                <button type="button" onClick={() => add(item.id)} className="add-item-button" aria-label={`${d.add}: ${d.items[item.id]}`}>+</button>
              </div>
            ))}
          </div>
        )}

        {lines.length > 0 && (
          <div className="chat-bubble chat-bubble-user">
            <div className="mb-2 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-white/65"><span>{d.total}</span><strong className="text-white">{fmt(total)}</strong></div>
            <ul className="grid gap-2">
              {lines.map((line) => <li key={line.id} className="flex items-center justify-between gap-3 text-xs"><span>{line.qty} × {d.items[line.id]}</span>{!confirmed && <button type="button" aria-label={`${d.remove}: ${d.items[line.id]}`} onClick={() => remove(line.id)} className="quantity-remove">−</button>}</li>)}
            </ul>
          </div>
        )}

        {lines.length > 0 && !confirmed && <div className="coffee-checkout-row"><p>{d.ask}</p><div className="grid gap-2 sm:grid-cols-2"><button type="button" onClick={() => setConfirmed(true)} className="coffee-confirm-button">{d.confirm}<span aria-hidden="true">↗</span></button><button type="button" onClick={reset} className="coffee-cancel-button">{d.cancel}</button></div></div>}

        {confirmed && <div className="demo-result-panel"><span className="result-check">✓</span><strong>{d.okTitle}</strong><p>{d.ok}</p><button type="button" onClick={reset}>{d.again} ↻</button></div>}
        {lines.length === 0 && !confirmed && <p className="coffee-empty-hint">↑</p>}
      </div>
      <div className="coffee-demo-foot"><span>DEMO</span><span>{d.ok.replace(/^This is only a demo: /, '').replace(/^Это только демонстрация: /, '').replace(/^Bu faqat demo: /, '')}</span></div>
    </div>
  );
}
