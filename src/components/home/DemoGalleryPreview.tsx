"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DEMOS } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import type { Demo } from "@/lib/content";

// Featured demo + 2 secundarios + CTA card
const FEATURED_SLUG = "gimnasio";
const SECONDARY_SLUGS = ["psicologo", "estetica"];

function DemoCard({
  demo,
  large = false,
}: {
  demo: Demo;
  large?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#191919] transition-all duration-300 hover:border-white/[0.15] ${
        large ? "row-span-2" : ""
      }`}
    >
      {/* Label superior */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-rojo">
          {demo.accion}
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-crema/30">
          Demo
        </span>
      </div>

      {/* Phone mockup */}
      <div className="flex flex-1 items-center justify-center px-6 py-6">
        <div
          className={`relative aspect-[9/19.5] rounded-[1.8rem] border-[5px] border-white/10 bg-negro shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02] ${
            large ? "w-full max-w-[200px]" : "w-full max-w-[150px]"
          }`}
        >
          <div
            className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-lg bg-negro"
            aria-hidden="true"
          />
          <div className="h-full w-full overflow-hidden rounded-[1.4rem]">
            <video
              ref={videoRef}
              src={demo.file}
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Rubro */}
      <div className="border-t border-white/[0.06] px-5 py-4">
        <p className="font-display text-base font-extrabold tracking-tight text-crema">
          {demo.rubro}
        </p>
        <p className="mt-0.5 text-xs text-crema/35">
          Hacemos tu web en días
        </p>
      </div>
    </div>
  );
}

function CTACard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-rojo p-7 sm:p-8">
      <div>
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-crema/60">
          Tu rubro
        </span>
        <p className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-crema sm:text-3xl">
          Trabajamos con cualquier negocio.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-crema/65">
          Médicos, abogados, gimnasios, restaurantes, inmobiliarias — si tenés un negocio, te hacemos la web.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/trabajos"
          className="inline-flex items-center gap-2 rounded-full bg-crema px-5 py-3 font-display text-xs font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90"
        >
          Ver los 10 ejemplos →
        </Link>
        <a
          href={whatsappLink("Hola! Quiero pedir una demo gratis para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-crema/30 px-5 py-3 font-display text-xs font-bold uppercase tracking-wide text-crema transition-colors hover:border-crema/60"
        >
          Pedir mi demo gratis
        </a>
      </div>
    </div>
  );
}

export default function DemoGalleryPreview() {
  const featured = DEMOS.find((d) => d.slug === FEATURED_SLUG)!;
  const secondary = SECONDARY_SLUGS.map(
    (slug) => DEMOS.find((d) => d.slug === slug)!
  ).filter(Boolean);

  return (
    <section className="bg-negro px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
            Ejemplos reales
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-crema sm:text-5xl">
            Así puede verse<br className="hidden sm:block" /> la web de tu negocio.
          </h2>
        </div>

        {/* Bento: 3 cols desktop */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured — col-span-1, row-span-2 en desktop */}
          <div className="sm:row-span-2">
            <DemoCard demo={featured} large />
          </div>

          {/* Secundarios */}
          {secondary.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}

          {/* CTA card */}
          <CTACard />
        </div>
      </div>
    </section>
  );
}
