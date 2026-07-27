"use client";

import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedLines from "@/components/shared/AnimatedLines";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import HeroLeadQuiz from "@/components/home/HeroLeadQuiz";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f6f5f1] pt-32 pb-24 text-negro sm:pt-36">
      <h1 className="sr-only">Agencia Digital en Bahía Blanca — Tuki</h1>

      <ParticleCanvas colors={["#0d3fe3", "#141414"]} count={25} className="z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-8">
        {/* Headline */}
        <div className="text-center">
          <AnimatedLines
            as="h2"
            lines={[
              "Diseñamos y construimos",
              <><span key="r" className="text-rojo">sistemas</span> que hacen</>,
              "funcionar tu negocio.",
            ]}
            className="font-display text-[11vw] font-black leading-[1] tracking-tight sm:text-[7vw] lg:text-[5.2rem]"
          />
        </div>

        {/* Subtitle + CTAs */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-negro/50 sm:text-lg">
            Webs que venden, turnos que se llenan solos, catálogos con QR
            y procesos que dejan de robarte tiempo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={whatsappLink("Hola! Vi la web de Tuki y quiero pedir mi demo gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero-cta")}
              className="inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-rojo-soft"
            >
              Pedí tu demo gratis
            </MagneticButton>
            <Link
              href="/servicios"
              className="inline-flex items-center rounded-full border border-negro/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:border-negro/40 hover:bg-negro/5"
            >
              Ver servicios
            </Link>
          </div>

        </div>

        {/* Lead quiz */}
        <div className="mt-16">
          <HeroLeadQuiz />
        </div>
      </div>
    </section>
  );
}
