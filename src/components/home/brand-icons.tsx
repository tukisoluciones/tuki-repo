const GOOGLE_LETTERS: { char: string; color: string }[] = [
  { char: "G", color: "#4285F4" },
  { char: "o", color: "#EA4335" },
  { char: "o", color: "#FBBC05" },
  { char: "g", color: "#4285F4" },
  { char: "l", color: "#34A853" },
  { char: "e", color: "#EA4335" },
];

export function GoogleWordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display font-bold ${className ?? ""}`}>
      {GOOGLE_LETTERS.map(({ char, color }, i) => (
        <span key={i} style={{ color }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export function MetaLogo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <svg viewBox="0 0 28 20" fill="none" className="h-4 w-6" aria-hidden="true">
        <path
          d="M6.5 1C3 1 1 5 1 10s2 9 5.5 9c2.4 0 4.2-2.1 5.7-4.8C13.7 16.9 15.5 19 17.9 19 21.4 19 23.4 15 23.4 10S21.4 1 17.9 1c-2.4 0-4.2 2.1-5.7 4.8C10.7 3.1 8.9 1 6.5 1z"
          stroke="#0866FF"
          strokeWidth="2"
        />
      </svg>
      <span className="font-display text-base font-bold text-[#0866FF]">Meta</span>
    </span>
  );
}
