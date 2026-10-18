import type { Lang } from '../data/content';

export function Flag({ lang }: { lang: Lang }) {
  return (
    <svg viewBox="0 0 60 30" className="h-3 w-5 rounded-[2px]" aria-hidden="true">
      {lang === 'ru' && (
        <>
          <rect width="60" height="10" fill="#fff" />
          <rect y="10" width="60" height="10" fill="#0039a6" />
          <rect y="20" width="60" height="10" fill="#d52b1e" />
        </>
      )}
      {lang === 'uz' && (
        <>
          <rect width="60" height="10" fill="#0099b5" />
          <rect y="10" width="60" height="10" fill="#fff" />
          <rect y="20" width="60" height="10" fill="#1eb53a" />
          <rect y="9.5" width="60" height="1" fill="#ce1126" />
          <rect y="19.5" width="60" height="1" fill="#ce1126" />
        </>
      )}
      {lang === 'en' && (
        <>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="2" />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
        </>
      )}
    </svg>
  );
}
