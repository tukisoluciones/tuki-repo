type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 12a9 9 0 1 1-2.6-6.35" />
      <path d="M12 12h8.5" />
    </svg>
  );
}

export function MetaIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17c2.5 0 3.5-5 5-7.5C13.2 7.6 14.4 7 15.5 7 18 7 19 9.5 19 12s-1 5-3.5 5c-1.1 0-2.3-.6-3.5-2.5C10.5 12 9.5 7 7 7 4.5 7 3.5 9.5 3.5 12S4.5 17 7 17Z" />
    </svg>
  );
}

export function NextjsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8v8" />
      <path d="M9 8l6 8" />
      <path d="M15 8v4" />
    </svg>
  );
}

export function ShopifyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 8h12l1 12H5z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function N8nIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7 6h10" />
      <path d="M6.5 7.5 11 16.5" />
      <path d="M17.5 7.5 13 16.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M12 3a9 9 0 0 0-7.65 13.7L3 21l4.46-1.32A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 5.94 10.7l-.27.43.83 2.49-2.56-.76-.4.24A7 7 0 0 1 12 19a7 7 0 1 1 0-14Z" />
      <path d="M9.2 8.6c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .55.4.18.45.6 1.5.65 1.6.05.1.08.22 0 .35-.08.13-.12.2-.25.32-.13.13-.27.28-.38.38-.13.12-.27.25-.12.5.5.85 1.25 1.55 2.2 1.95.18.08.3.06.42-.05.13-.13.5-.55.65-.74.13-.18.27-.15.45-.08.18.06 1.15.55 1.35.65.2.1.33.15.38.24.05.1.05.55-.13 1.08-.18.5-1.05.95-1.45.98-.4.04-.8.06-1.85-.4-1.55-.68-2.55-2.28-2.63-2.4-.08-.1-.65-.86-.65-1.7 0-.85.43-1.27.6-1.44Z" />
    </svg>
  );
}
