"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import TiltCard from "@/components/shared/TiltCard";

// ─── Visuales originales por servicio ─────────────────────────────────────────

function VisualBrowser() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#111] px-3 py-2.5">
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="mx-2 flex-1 rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[9px] text-white/20">
          tudominio.com.ar
        </div>
      </div>
      <div className="space-y-3 bg-[#0d0d0d] p-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-14 rounded-full bg-rojo/40" />
          <div className="ml-auto flex gap-2">
            <div className="h-2 w-8 rounded-full bg-white/8" />
            <div className="h-2 w-8 rounded-full bg-white/8" />
            <div className="h-5 w-16 rounded-full bg-rojo/50" />
          </div>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="h-5 w-4/5 rounded-full bg-white/12" />
          <div className="h-5 w-3/5 rounded-full bg-white/8" />
        </div>
        <div className="space-y-1 pt-1">
          <div className="h-2 w-full rounded-full bg-white/5" />
          <div className="h-2 w-5/6 rounded-full bg-white/5" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-7 w-28 rounded-full bg-rojo/50" />
          <div className="h-7 w-20 rounded-full border border-white/10 bg-transparent" />
        </div>
      </div>
    </div>
  );
}

function VisualSlots() {
  const slots = [
    { t: "9:00", on: true }, { t: "10:00", on: false }, { t: "11:00", on: true },
    { t: "14:00", on: true }, { t: "15:00", on: false }, { t: "16:00", on: false },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-rojo" />
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-crema/30">
          Martes 17
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map((s) => (
          <div
            key={s.t}
            className={`rounded-lg py-2 text-center font-display text-xs font-bold ${
              s.on ? "bg-rojo/80 text-crema" : "border border-white/8 text-crema/25"
            }`}
          >
            {s.t}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] leading-relaxed text-crema/25">
        El cliente elige, vos recibís el turno ya confirmado.
      </p>
    </div>
  );
}

function VisualQR() {
  const cells = [0, 1, 3, 4, 6, 9, 11, 12, 14, 15];
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 space-y-1.5">
        <div className="h-2 w-4/5 rounded-full bg-white/12" />
        <div className="h-2 w-3/5 rounded-full bg-white/8" />
        <div className="mt-2.5 h-2 w-full rounded-full bg-white/5" />
        <div className="h-2 w-5/6 rounded-full bg-white/5" />
        <div className="mt-2.5 h-2 w-4/5 rounded-full bg-white/5" />
        <div className="h-2 w-2/3 rounded-full bg-white/5" />
      </div>
      <div className="grid h-16 w-16 flex-none grid-cols-4 grid-rows-4 gap-[3px] rounded-lg bg-crema p-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`rounded-[1px] ${cells.includes(i) ? "bg-negro" : "bg-transparent"}`} />
        ))}
      </div>
    </div>
  );
}

function VisualAutomation() {
  return (
    <div className="w-full max-w-[240px]">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-crema/80" />
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-crema/70">
          WhatsApp · auto
        </span>
      </div>
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-crema/15 px-3 py-2 text-[11px] text-crema/70">
        Hola, ¿tienen turno para mañana?
      </div>
      <div className="mt-1.5 max-w-[88%] rounded-2xl rounded-tl-sm bg-crema px-3 py-2 text-[11px] font-medium text-negro">
        ¡Sí! Tenemos 10:00 y 15:30 libres. ¿Cuál preferís?
      </div>
      <p className="mt-3 text-[10px] leading-relaxed text-crema/50">
        Respuesta al instante, las 24 horas.
      </p>
    </div>
  );
}

// ─── Cards individuales ────────────────────────────────────────────────────────

function CardBase({
  service,
  className = "",
  children,
  accent = false,
}: {
  service: (typeof SERVICES)[number];
  className?: string;
  children?: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Link
      href={`/servicios#${service.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
        accent
          ? "bg-rojo hover:bg-[#0a2fb0]"
          : "border border-white/[0.07] bg-[#191919] hover:border-white/[0.14] hover:bg-[#1e1e1e]"
      } ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-6 -right-1 select-none font-display text-[9rem] font-black leading-none tracking-tighter ${
          accent ? "text-crema/[0.07]" : "text-white/[0.04]"
        }`}
      >
        {service.number}
      </span>
    </Link>
  );
}

function CardLabel({
  number,
  accent = false,
}: {
  number: string;
  accent?: boolean;
}) {
  return (
    <span
      className={`font-display text-[11px] font-bold uppercase tracking-[0.2em] ${
        accent ? "text-crema/50" : "text-rojo"
      }`}
    >
      {number}
    </span>
  );
}

function CardArrow({ accent = false }: { accent?: boolean }) {
  return (
    <span
      className={`mt-6 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest transition-colors ${
        accent
          ? "text-crema/40 group-hover:text-crema"
          : "text-crema/20 group-hover:text-rojo"
      }`}
    >
      Ver servicio
      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </span>
  );
}

export default function ServicesPreview() {
  const [turnos, paginasWeb, catalogoQr, automatizaciones] = SERVICES;

  return (
    <section id="servicios" className="bg-negro px-6 py-16 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
              Lo que hacemos
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-crema sm:text-5xl">
              Cuatro formas de<br className="hidden sm:block" /> hacer crecer tu negocio.
            </h2>
          </div>
          <Link
            href="/servicios"
            className="font-display text-sm font-bold uppercase tracking-wide text-crema/35 underline decoration-rojo decoration-2 underline-offset-4 transition-colors hover:text-crema"
          >
            Ver todos →
          </Link>
        </div>

        {/* Bento grid */}
        <RevealOnScroll
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >

          {/* 01 Turnos y Reservas — producto ancla, 2 cols, slots de agenda */}
          <div className="sm:col-span-2 lg:col-span-2">
            <TiltCard options={{ max: 5, scale: 1.015 }}>
              <CardBase service={turnos} className="min-h-[260px]">
                <div className="relative z-10 flex h-full flex-col sm:flex-row sm:items-stretch">
                  <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                    <div>
                      <CardLabel number={turnos.number} />
                      <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-crema sm:text-4xl">
                        {turnos.title}
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-crema/40">
                        {turnos.short}
                      </p>
                    </div>
                    <CardArrow />
                  </div>
                  <div className="flex flex-none items-end justify-center overflow-hidden px-6 pb-6 sm:w-56 lg:w-64">
                    <VisualSlots />
                  </div>
                </div>
              </CardBase>
            </TiltCard>
          </div>

          {/* 02 Páginas Web — browser mockup */}
          <div>
            <TiltCard options={{ max: 5, scale: 1.015 }}>
              <CardBase service={paginasWeb} className="min-h-[260px]">
                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 h-full">
                  <div>
                    <CardLabel number={paginasWeb.number} />
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-crema">
                      {paginasWeb.title}
                    </h3>
                  </div>
                  <div className="mt-5">
                    <VisualBrowser />
                  </div>
                  <CardArrow />
                </div>
              </CardBase>
            </TiltCard>
          </div>

          {/* 03 Catálogo Digital con QR */}
          <div>
            <TiltCard options={{ max: 5, scale: 1.015 }}>
              <CardBase service={catalogoQr} className="min-h-[280px]">
                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 h-full">
                  <div>
                    <CardLabel number={catalogoQr.number} />
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-crema">
                      {catalogoQr.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-crema/40">{catalogoQr.short}</p>
                  </div>
                  <div className="mt-5">
                    <VisualQR />
                  </div>
                  <CardArrow />
                </div>
              </CardBase>
            </TiltCard>
          </div>

          {/* 04 Automatizaciones — 2 cols, fondo azul, chat de WhatsApp */}
          <div className="sm:col-span-2 lg:col-span-2">
            <TiltCard options={{ max: 5, scale: 1.015 }}>
              <CardBase service={automatizaciones} accent className="min-h-[200px]">
                <div className="relative z-10 flex flex-col justify-between gap-6 p-7 sm:flex-row sm:items-end sm:p-8">
                  <div>
                    <CardLabel number={automatizaciones.number} accent />
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-crema sm:text-4xl">
                      {automatizaciones.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-crema/60">
                      {automatizaciones.short}
                    </p>
                    <CardArrow accent />
                  </div>
                  <VisualAutomation />
                </div>
              </CardBase>
            </TiltCard>
          </div>

        </RevealOnScroll>

        {/* Footer strip */}
        <div className="mt-4 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.07] px-6 py-7 sm:flex-row sm:justify-between">
          <p className="text-sm text-crema/30 sm:max-w-sm">
            ¿No sabés por dónde empezar? Contanos tu negocio y te recomendamos qué tiene más sentido para vos.
          </p>
          <a
            href={whatsappLink("Hola! No sé bien por dónde empezar. ¿Me pueden orientar sobre qué necesita mi negocio?")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none whitespace-nowrap rounded-full border border-crema/20 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:border-crema/40 hover:bg-crema/5"
          >
            Escribinos →
          </a>
        </div>
      </div>
    </section>
  );
}
