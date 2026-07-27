import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Turnos Online para Negocios",
  description:
    "Sistema de turnos online para negocios en Bahía Blanca. Tus clientes reservan solos, sin llamadas ni WhatsApp. Ideal para consultorios, gimnasios y peluquerías.",
  alternates: { canonical: "/turnos-online-bahia-blanca" },
  openGraph: {
    title: "Turnos Online para Negocios | Tuki · Bahía Blanca",
    description: "Reservas automáticas 24/7. Cero llamadas, cero turnos pisados.",
    url: "/turnos-online-bahia-blanca",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Turnos Online Bahía Blanca", item: `${SITE.url}/turnos-online-bahia-blanca` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turnos Online para Negocios",
  description: "Sistema de reservas y turnos online para negocios locales en Bahía Blanca.",
  provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
  areaServed: { "@type": "City", name: "Bahía Blanca" },
  serviceType: "Turnos Online",
};

const PROBLEMS = [
  { before: "Llamadas todo el día para coordinar turnos", after: "El cliente reserva solo desde su celular" },
  { before: "Turnos que se pisan o se olvidan", after: "Recordatorio automático antes del turno" },
  { before: "WhatsApp saturado de mensajes", after: "Agenda organizada sin intervención tuya" },
  { before: "No sabés cuántos turnos perdiste", after: "Panel con estadísticas de reservas" },
];

const RUBROS = [
  { emoji: "🦷", name: "Odontólogos", desc: "Turnos por especialidad, con duración variable según el tratamiento." },
  { emoji: "🧠", name: "Psicólogos", desc: "Sesiones con horarios fijos, recordatorios y ficha del paciente." },
  { emoji: "🏋️", name: "Gimnasios", desc: "Inscripciones a clases, cupos limitados y lista de espera." },
  { emoji: "💇", name: "Peluquerías", desc: "Turnos por servicio con duración estimada, sin superposición." },
  { emoji: "🏥", name: "Consultorios", desc: "Múltiples profesionales, cada uno con su agenda independiente." },
  { emoji: "💆", name: "Centros de estética", desc: "Reservas por tratamiento, con cabinas y profesionales asignados." },
];

export default function TurnosOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(serviceJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Turnos Online</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Turnos Online para Negocios en Bahía Blanca
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            Que tus clientes reserven solos, a cualquier hora, desde el celular.
            Se terminaron las llamadas, los mensajes por WhatsApp y los turnos que se pisan.
          </p>
          <a href={whatsappLink("Hola! Quiero un sistema de turnos online para mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700">
            Quiero turnos online
          </a>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Antes vs Después</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            De perder turnos a llenar tu agenda.
          </h2>
          <div className="mt-12 space-y-4">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-xl border border-negro/8 bg-white/50 px-5 py-4">
                  <span className="text-xs font-bold uppercase text-negro/30">Antes</span>
                  <p className="mt-1 font-display text-sm font-bold text-negro/70">{p.before}</p>
                </div>
                <div className="rounded-xl border border-rojo/20 bg-rojo/5 px-5 py-4">
                  <span className="text-xs font-bold uppercase text-rojo">Después</span>
                  <p className="mt-1 font-display text-sm font-bold text-negro">{p.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f5f1] px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Rubros</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Funciona para cualquier negocio con turnos.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RUBROS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-negro/8 bg-white/80 p-5">
                <span className="text-2xl">{r.emoji}</span>
                <h3 className="mt-2 font-display text-base font-extrabold">{r.name}</h3>
                <p className="mt-1 text-sm text-negro/55">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rojo px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">Automatizá tus turnos hoy.</h2>
          <p className="mx-auto mt-4 max-w-xl text-crema/80">
            Implementamos tu sistema de turnos en días. Tus clientes reservan, vos atendés.
          </p>
          <a href={whatsappLink("Hola! Quiero implementar turnos online en mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-crema px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90">
            Escribinos por WhatsApp
          </a>
          <p className="mt-6 text-sm text-crema/50">
            ¿También necesitás una web?{" "}
            <Link href="/diseno-web-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Diseño web</Link> ·{" "}
            <Link href="/automatizaciones-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Automatizaciones</Link>
          </p>
        </div>
      </section>
    </>
  );
}
