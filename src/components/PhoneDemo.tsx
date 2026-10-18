import { useMemo, useState, type ReactNode } from 'react';
import { useI18n } from '../i18n';

const ITEMS = [
  { id: 'latte', price: 18000 },
  { id: 'flat', price: 20000 },
  { id: 'cake', price: 22000 },
];

function Bubble({ from, children }: { from: 'bot' | 'me'; children: ReactNode }) {
  return (
    <div
      className={`max-w-[88%] rounded-2xl px-3.5 py-2 text-sm leading-snug motion-safe:animate-[pop_0.2s_ease-out] ${
        from === 'bot' ? 'self-start rounded-bl-sm bg-zinc-800 text-zinc-100' : 'self-end rounded-br-sm bg-blue-600 text-white'
      }`}
    >
      {children}
    </div>
  );
}

const key = 'flex w-full items-center justify-between gap-3 rounded-xl bg-white/[0.07] px-3.5 py-2.5 text-left text-sm text-zinc-100 transition hover:bg-white/[0.14]';

export function PhoneDemo() {
  const { t } = useI18n();
  const d = t.demo;
  const [cart, setCart] = useState<Record<string, number>>({});
  const [confirmed, setConfirmed] = useState(false);

  const lines = useMemo(() => ITEMS.filter((i) => cart[i.id]).map((i) => ({ ...i, qty: cart[i.id] })), [cart]);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const fmt = (n: number) => `${n.toLocaleString('ru-RU')} ${d.sum}`;

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const remove = (id: string) =>
    setCart((c) => {
      const { [id]: qty = 0, ...rest } = c;
      return qty > 1 ? { ...rest, [id]: qty - 1 } : rest;
    });
  const reset = () => {
    setCart({});
    setConfirmed(false);
  };

  return (
    <div role="group" aria-label={d.aria} className="w-[min(320px,100%)] overflow-hidden rounded-[2.2rem] border-[7px] border-zinc-800 bg-black shadow-[0_0_80px_-10px_rgba(37,99,235,0.55)]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-950 px-4 py-3">
        <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 font-display text-sm font-bold text-black">A</span>
        <div className="leading-tight">
          <strong className="block text-sm text-white">Aral Coffee</strong>
          <span className="text-xs text-zinc-500">{d.sub}</span>
        </div>
      </div>

      <div aria-live="polite" className="flex min-h-[420px] flex-col gap-2.5 bg-gradient-to-b from-black to-blue-950/40 p-3">
        <Bubble from="bot">{d.hi}</Bubble>

        {!confirmed && (
          <div className="grid gap-1.5">
            {ITEMS.map((i) => (
              <button key={i.id} type="button" className={key} onClick={() => add(i.id)}>
                <span>{d.items[i.id]}</span>
                <span className="text-zinc-400">{fmt(i.price)}</span>
              </button>
            ))}
          </div>
        )}

        {lines.length > 0 && (
          <Bubble from="me">
            <ul className="grid gap-1">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-4">
                  <span>{l.qty} × {d.items[l.id]}</span>
                  {!confirmed && (
                    <button type="button" aria-label={`${d.remove}: ${d.items[l.id]}`} onClick={() => remove(l.id)} className="grid size-6 place-items-center rounded-full bg-black/30 leading-none hover:bg-black/50">
                      −
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </Bubble>
        )}

        {lines.length > 0 && !confirmed && (
          <>
            <Bubble from="bot">{d.total}: {fmt(total)}. {d.ask}</Bubble>
            <div className="grid grid-cols-2 gap-1.5">
              <button type="button" onClick={() => setConfirmed(true)} className="rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
                {d.confirm}
              </button>
              <button type="button" onClick={reset} className="rounded-xl bg-white/[0.07] px-3 py-2.5 text-sm text-zinc-200 transition hover:bg-white/[0.14]">
                {d.cancel}
              </button>
            </div>
          </>
        )}

        {confirmed && (
          <>
            <Bubble from="bot">{d.ok}</Bubble>
            <div className="grid gap-1.5">
              <button type="button" onClick={reset} className={key}>{d.again}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
