"use client";

import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedLines from "@/components/shared/AnimatedLines";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import HeroLeadQuiz from "@/components/home/HeroLeadQuiz";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

function FloatingCard({
  icon,
  text,
  className = "",
}: {
  icon: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute hidden items-center gap-2.5 rounded-2xl border border-crema/15 bg-crema/[0.07] px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-md motion-safe:animate-float lg:flex ${className}`}
      aria-hidden="true"
    >
      <span className="text-lg leading-none">{icon}</span>
      <span className="font-display text-sm font-bold text-crema">{text}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-negro pt-32 pb-24 text-crema sm:pt-36">
      <h1 className="sr-only">Agencia Digital en Bahía Blanca — Tuki</h1>

      {/* Fondo: foto difuminada, abstraída en manchas de luz */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/hero-bg-blur.jpg"
          alt=""
          fill
          priority
          className="scale-125 object-cover blur-[90px]"
        />
        <div className="absolute inset-0 bg-negro/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-negro/20 via-negro/50 to-negro" />
      </div>

      <ParticleCanvas colors={["#0d3fe3", "#f2f1ed"]} count={25} className="z-[1]" />

      <FloatingCard icon="✅" text="Turno confirmado" className="left-[3%] top-[20%] -rotate-3" />
      <FloatingCard icon="💬" text="Nuevo mensaje de cliente" className="right-[2%] top-[46%] rotate-2" />
      <FloatingCard icon="📈" text="+40% consultas" className="bottom-[10%] left-[4%] rotate-3" />

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
            className="font-display text-[11vw] font-black leading-[1.15] tracking-tight text-crema sm:text-[7vw] lg:text-[5.2rem]"
          />
        </div>

        {/* Subtitle + CTAs */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-crema/70 sm:text-lg">
            Webs que venden, turnos que se llenan solos, catálogos con QR
            y procesos que dejan de robarte tiempo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={whatsappLink("Hola! Vi la web de Tuki y quiero pedir mi demo gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero-cta")}
              className="inline-flex items-center rounded-full bg-cta px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-cta-soft"
            >
              Pedí tu demo gratis
            </MagneticButton>
            <Link
              href="/servicios"
              className="inline-flex items-center rounded-full border border-crema/30 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:border-crema/60 hover:bg-crema/10"
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
