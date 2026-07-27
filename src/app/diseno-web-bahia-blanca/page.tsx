import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Diseño Web en Bahía Blanca",
  description:
    "Diseño de páginas web profesionales para negocios en Bahía Blanca. Mobile-first, rápidas y con WhatsApp integrado. Entrega en 3 días, primera demo gratis.",
  alternates: { canonical: "/diseno-web-bahia-blanca" },
  openGraph: {
    title: "Diseño Web Profesional | Tuki · Bahía Blanca",
    description: "Páginas web rápidas, modernas y optimizadas para celular. Tu negocio online en 3 días.",
    url: "/diseno-web-bahia-blanca",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Diseño Web Bahía Blanca", item: `${SITE.url}/diseno-web-bahia-blanca` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño Web Profesional",
  description: "Diseño y desarrollo de páginas web profesionales para negocios locales en Bahía Blanca.",
  provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
  areaServed: { "@type": "City", name: "Bahía Blanca" },
  serviceType: "Diseño Web",
};

const BENEFITS = [
  { title: "Mobile-first", desc: "Más del 80% de tus clientes te buscan desde el celular. Tu web se ve perfecta en cualquier pantalla." },
  { title: "Rápida de cargar", desc: "Una web lenta pierde clientes. Las nuestras cargan en menos de 2 segundos — Google te premia por eso." },
  { title: "WhatsApp integrado", desc: "Botón de WhatsApp siempre visible. Tu cliente te escribe con un toque, sin buscar tu número." },
  { title: "Diseño a medida", desc: "Nada de plantillas genéricas. Cada web se diseña desde cero para tu rubro y tu marca." },
];

const STEPS = [
  { n: "01", title: "Nos contás sobre tu negocio", desc: "Una charla rápida por WhatsApp. Nos decís qué hacés, qué servicios ofrecés y qué querés mostrar." },
  { n: "02", title: "Diseñamos tu web", desc: "En 48 horas tenés una demo lista. La revisás, pedís cambios, y ajustamos hasta que te encante." },
  { n: "03", title: "Tu negocio online", desc: "Publicamos tu web con dominio propio, HTTPS y todo optimizado. Empezás a recibir consultas." },
];

export default function DisenoWebPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(serviceJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Diseño Web</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Diseño Web en Bahía Blanca
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            Tu negocio necesita una web que trabaje por vos. Diseñamos páginas rápidas,
            modernas y optimizadas para que tus clientes te encuentren y te contacten
            sin que tengas que estar pendiente.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink("Hola! Quiero una página web para mi negocio en Bahía Blanca.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700"
            >
              Pedí tu demo gratis
            </a>
            <Link href="/trabajos" className="inline-flex items-center rounded-full border border-crema/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:border-crema/40">
              Ver ejemplos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Por qué importa</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Si no estás en Google, no existís para tus clientes.
          </h2>
          <p className="mt-4 max-w-2xl text-negro/60">
            El 97% de las personas buscan negocios locales en internet antes de
            visitarlos. Si tu negocio no tiene una web profesional, esos clientes
            terminan eligiendo a tu competencia.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-negro/8 bg-white/70 p-6">
                <h3 className="font-display text-lg font-extrabold text-negro">{b.title}</h3>
                <p className="mt-2 text-sm text-negro/55">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-negro px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Proceso</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tu web lista en 3 días.
          </h2>
          <div className="mt-12 space-y-10">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-6">
                <span className="font-display text-4xl font-black text-rojo/30">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-crema/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rojo px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
            ¿Listo para tener tu web?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-crema/80">
            Hacemos una demo gratuita para que veas cómo quedaría tu web antes de
            pagar un peso. Sin compromiso, sin letras chicas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink("Hola! Quiero pedir mi demo gratis de página web.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-crema px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90"
            >
              Escribinos por WhatsApp
            </a>
            <Link href="/contacto" className="inline-flex items-center rounded-full border border-crema/30 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:border-crema/60">
              Ir a contacto
            </Link>
          </div>
          <p className="mt-6 text-sm text-crema/50">
            También hacemos{" "}
            <Link href="/turnos-online-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">turnos online</Link>,{" "}
            <Link href="/software-a-medida-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">software a medida</Link> y{" "}
            <Link href="/automatizaciones-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">automatizaciones</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
