"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import MagneticButton from "@/components/shared/MagneticButton";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function FinalCTA() {
  return (
    <section className="bg-crema px-6 py-28 sm:px-8 sm:py-36">
      <RevealOnScroll
        direction="scale"
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          ¿Listo para
          <br />
          hacer crecer
          <br />
          <span className="text-rojo">tu negocio?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-negro/70 sm:text-lg">
          Contanos qué hace tu negocio y te armamos una demo real, sin
          compromiso. Si te gusta, la dejamos andando.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={whatsappLink(
              "Hola! Vi la web de Tuki y quiero pedir mi demo gratis."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("final-cta")}
            className="inline-flex items-center rounded-full bg-cta px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-cta-soft"
          >
            Pedí tu demo gratis
          </MagneticButton>
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-full border border-negro/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:border-negro hover:bg-negro/5"
          >
            Ir a contacto
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
