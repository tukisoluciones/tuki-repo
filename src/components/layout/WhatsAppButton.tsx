"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola! Tengo una consulta para Tuki.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating-button")}
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cta text-crema shadow-xl shadow-cta/30 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cta/50 motion-reduce:animate-none" />
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M16.004 2.667C8.64 2.667 2.671 8.636 2.671 16c0 2.69.79 5.196 2.156 7.302L2.667 29.333l6.214-2.107A13.27 13.27 0 0 0 16.004 29.333c7.364 0 13.333-5.969 13.333-13.333S23.368 2.667 16.004 2.667Zm0 24.222a10.84 10.84 0 0 1-5.706-1.626l-.41-.245-3.78 1.282 1.246-3.73-.27-.43A10.84 10.84 0 0 1 5.337 16c0-5.886 4.781-10.667 10.667-10.667S26.671 10.114 26.671 16 21.89 26.889 16.004 26.889Zm5.93-7.946c-.324-.162-1.917-.946-2.213-1.054-.296-.108-.512-.162-.728.162-.216.324-.836 1.054-1.025 1.27-.189.216-.378.243-.701.081-.324-.162-1.367-.504-2.605-1.61-.963-.858-1.612-1.918-1.801-2.242-.189-.324-.02-.5.146-.662.162-.162.378-.42.567-.63.189-.21.252-.36.378-.6.126-.243.063-.45-.032-.63-.094-.18-.65-1.565-.892-2.143-.236-.563-.477-.486-.654-.495l-.557-.01c-.189 0-.495.07-.756.35-.262.28-1 1.054-1 2.572s1.024 2.985 1.166 3.193c.142.21 1.957 2.985 4.74 4.067 2.784 1.082 2.784.722 3.286.677.503-.045 1.917-.784 2.187-1.54.27-.756.27-1.404.189-1.54-.08-.135-.295-.216-.62-.378Z" />
      </svg>
    </a>
  );
}
