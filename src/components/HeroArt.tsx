// Decorative illustration: a laptop with a lesson on screen, surrounded by floating learning shapes.
export function HeroArt({ photo }: { photo: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-6 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-yellow-300 via-pink-400 to-violet-500" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt="Portrait"
        className="absolute inset-14 h-[calc(100%-7rem)] w-[calc(100%-7rem)] rounded-full border-8 border-white object-cover shadow-xl"
      />
      <Bubble className="left-0 top-8 bg-sky-400 rotate-[-8deg]">ABC</Bubble>
      <Bubble className="right-0 top-16 bg-emerald-400 rotate-[10deg]">1+2</Bubble>
      <Bubble className="bottom-10 left-2 bg-orange-400 rotate-[6deg]">⭐ A+</Bubble>
      <svg viewBox="0 0 120 80" className="absolute -bottom-2 right-0 w-36 drop-shadow-lg" aria-hidden>
        <rect x="14" y="6" width="92" height="58" rx="6" fill="#1e1b4b" />
        <rect x="20" y="12" width="80" height="46" rx="3" fill="#fff" />
        <rect x="26" y="18" width="40" height="6" rx="3" fill="#a78bfa" />
        <rect x="26" y="29" width="66" height="4" rx="2" fill="#e5e7eb" />
        <rect x="26" y="37" width="54" height="4" rx="2" fill="#e5e7eb" />
        <circle cx="88" cy="47" r="7" fill="#34d399" />
        <path d="M84.5 47l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M4 66h112l-8 8H12z" fill="#312e81" />
      </svg>
    </div>
  );
}

function Bubble({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span
      className={`absolute rounded-2xl px-4 py-2 font-display text-lg font-bold text-white shadow-lg ${className}`}
    >
      {children}
    </span>
  );
}
