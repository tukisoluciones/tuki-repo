import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Automatizaciones para Negocios",
  description:
    "Automatizaciones para negocios en Bahía Blanca: respuestas automáticas en WhatsApp, recordatorios de turnos, emails y flujos de trabajo. Ahorrá horas por semana.",
  alternates: { canonical: "/automatizaciones-bahia-blanca" },
  openGraph: {
    title: "Automatizaciones para Negocios | Tuki · Bahía Blanca",
    description: "Automatizá WhatsApp, turnos, emails y tareas repetitivas. Ahorrá horas cada semana.",
    url: "/automatizaciones-bahia-blanca",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Automatizaciones", item: `${SITE.url}/automatizaciones-bahia-blanca` },
  ],
};

const AUTOMATIONS = [
  { title: "Respuestas automáticas en WhatsApp", desc: "Tu cliente escribe y recibe una respuesta al instante con información, menú de opciones o confirmación de turno. Funciona 24/7 sin que toques el celular.", icon: "💬" },
  { title: "Recordatorios de turnos", desc: "Un mensaje automático 24 horas antes del turno reduce las ausencias hasta un 60%. El cliente confirma con un botón.", icon: "🔔" },
  { title: "Seguimiento post-venta", desc: "Un email o mensaje automático después de la compra pidiendo reseña, ofreciendo un descuento o simplemente agradeciendo. Fidelización en piloto automático.", icon: "📧" },
  { title: "Flujos de trabajo internos", desc: "Conectamos tus herramientas: que un formulario web cargue datos en tu planilla, que un pago dispare una factura, que una reserva actualice tu agenda.", icon: "🔄" },
  { title: "Reportes automáticos", desc: "Cada lunes recibís un resumen de la semana: cuántos turnos, cuántas consultas, cuántas ventas. Sin tener que armar nada a mano.", icon: "📊" },
  { title: "Campañas de email", desc: "Secuencias de emails automatizadas para nutrir leads: desde el primer contacto hasta la conversión, todo preprogramado.", icon: "📬" },
];

export default function AutomatizacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Automatizaciones</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Automatizaciones para Negocios en Bahía Blanca
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            Dejá de hacer a mano lo que una máquina puede hacer por vos.
            Automatizamos WhatsApp, turnos, emails y tareas repetitivas
            para que recuperes horas de tu semana.
          </p>
          <a href={whatsappLink("Hola! Quiero automatizar procesos en mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700">
            Quiero automatizar
          </a>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Qué automatizamos</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Todo lo que hacés más de 3 veces, se puede automatizar.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUTOMATIONS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-negro/8 bg-white/70 p-5">
                <span className="text-2xl">{a.icon}</span>
                <h3 className="mt-2 font-display text-base font-extrabold text-negro">{a.title}</h3>
                <p className="mt-1 text-sm text-negro/55">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-negro px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Cuántas horas perdés por semana en tareas repetitivas?
          </h2>
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-6">
            {[
              { value: "10+", label: "horas/semana ahorradas" },
              { value: "60%", label: "menos ausencias" },
              { value: "0", label: "intervención manual" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-black text-rojo">{s.value}</p>
                <p className="mt-1 text-xs text-crema/50">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-lg text-crema/60">
            Las automatizaciones no reemplazan tu trabajo — te sacan de encima
            todo lo que no necesita tu criterio humano. Vos te enfocás en
            atender, vender y hacer crecer tu negocio.
          </p>
        </div>
      </section>

      <section className="bg-rojo px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">Recuperá tu tiempo.</h2>
          <p className="mx-auto mt-4 max-w-xl text-crema/80">
            Contanos qué tareas te llevan más tiempo y te proponemos cómo automatizarlas.
          </p>
          <a href={whatsappLink("Hola! Quiero automatizar tareas en mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-crema px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90">
            Escribinos por WhatsApp
          </a>
          <p className="mt-6 text-sm text-crema/50">
            <Link href="/diseno-web-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Diseño web</Link> ·{" "}
            <Link href="/turnos-online-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Turnos online</Link> ·{" "}
            <Link href="/software-a-medida-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Software a medida</Link>
          </p>
        </div>
      </section>
    </>
  );
}
