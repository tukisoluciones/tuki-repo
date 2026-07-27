"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const OPTIONS = [
  {
    label: "Quiero una web para mi negocio",
    message: "Hola! Quiero una web para mi negocio.",
  },
  {
    label: "Sistemas de turnos online",
    message: "Hola! Quiero un sistema de turnos online para mi negocio.",
  },
  {
    label: "Necesito un sistema a medida",
    message: "Hola! Necesito un sistema o panel de gestión a medida para mi negocio.",
  },
  {
    label: "Quiero un catálogo digital con QR",
    message: "Hola! Quiero un catálogo digital con QR para mi negocio.",
  },
];

export default function HeroLeadQuiz() {
  const cardRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const options =
      optionsRef.current?.querySelectorAll<HTMLElement>("[data-option]");
    if (!card || !options) return;

    if (prefersReducedMotion()) {
      gsap.set(card, { opacity: 1, y: 0, scale: 1 });
      gsap.set(options, { opacity: 1, x: 0 });
      return;
    }

    gsap.set(card, { opacity: 0, y: 24, scale: 0.96 });
    gsap.set(options, { opacity: 0, x: 16 });

    const tl = gsap.timeline({ delay: 0.4 });
    tl.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }).to(
      options,
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
      "+=0.1"
    );
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div
        ref={cardRef}
        className="w-full max-w-[360px] rounded-3xl border border-negro/10 bg-white p-6 text-negro shadow-xl sm:p-7"
      >
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-rojo">
          Contanos
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          ¿Por qué estás acá?
        </h3>
        <p className="mt-2 text-sm text-negro/50">
          Elegí una opción y te escribimos por WhatsApp.
        </p>

        <div ref={optionsRef} className="mt-5 flex flex-col gap-2.5">
          {OPTIONS.map((option) => (
            <a
              key={option.label}
              data-option
              href={whatsappLink(option.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("lead-quiz")}
              className="group flex items-center justify-between gap-3 rounded-xl border border-negro/10 px-4 py-3 text-sm font-semibold transition-colors hover:border-rojo hover:bg-rojo/5"
            >
              {option.label}
              <span
                className="text-rojo opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
