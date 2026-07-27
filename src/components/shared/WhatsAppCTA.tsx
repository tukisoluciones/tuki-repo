"use client";

import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppCTA({
  message,
  source,
  children,
  className = "",
}: {
  message: string;
  source: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={className}
    >
      {children}
    </a>
  );
}
