"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import MagneticButton from "@/components/shared/MagneticButton";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const STEP_TIMING = ["Hoy mismo", "En 24 a 48hs", "En días"];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    if (prefersReducedMotion()) {
      line.style.transform = "scaleY(1)";
      return;
    }

    gsap.set(line, { scaleY: 0, transformOrigin: "top" });
    const tween = gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-negro px-6 py-24 text-crema sm:px-8 sm:py-32">
      <ParticleCanvas colors={["#0d3fe3", "#f2f1ed"]} count={12} className="z-0 opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
          Cómo trabajamos
        </span>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Del primer mensaje a tu negocio en línea —{" "}
          <span className="text-rojo">en días, no meses.</span>
        </h2>

        <div ref={containerRef} className="relative mt-16 space-y-14 pl-16">
          <div className="absolute left-4 top-1 h-[calc(100%-0.5rem)] w-0.5 bg-crema/10" />
          <div
            ref={lineRef}
            className="absolute left-4 top-1 h-[calc(100%-0.5rem)] w-0.5 bg-rojo"
          />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="absolute -left-16 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-rojo font-display text-sm font-bold text-crema shadow-lg shadow-rojo/30">
                {step.number}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <span className="rounded-full bg-rojo/15 px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-rojo">
                  {STEP_TIMING[i]}
                </span>
              </div>
              <p className="mt-3 max-w-xl text-base text-crema/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-crema/10 bg-crema/5">
          <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                La primera demo es{" "}
                <span className="text-rojo">completamente gratis.</span>
              </p>
              <p className="mt-2 text-sm text-crema/50">
                Sin tarjeta. Sin compromiso. Si no te convence, no perdiste nada.
              </p>
            </div>
            <MagneticButton
              href={whatsappLink(
                "Hola! Quiero pedir mi demo gratis de Tuki."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("how-we-work")}
              className="flex-none inline-flex items-center rounded-full bg-rojo px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-rojo-soft"
            >
              Quiero mi demo →
            </MagneticButton>
          </div>
          <div className="grid grid-cols-3 divide-x divide-crema/10 border-t border-crema/10">
            {["Sin contrato de permanencia", "Entrega en días", "Soporte incluido"].map((item) => (
              <p key={item} className="px-4 py-3 text-center font-display text-[11px] font-bold uppercase tracking-wide text-crema/30">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
