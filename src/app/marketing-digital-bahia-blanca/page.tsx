import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Marketing Digital para Negocios",
  description:
    "Marketing digital en Bahía Blanca: Google Ads, Meta Ads, SEO y redes sociales para que tu negocio aparezca cuando tus clientes buscan lo que vendés.",
  alternates: { canonical: "/marketing-digital-bahia-blanca" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Marketing Digital | Tuki · Bahía Blanca",
    description: "Google Ads, Meta Ads, SEO y redes sociales para negocios locales en Bahía Blanca.",
    url: "/marketing-digital-bahia-blanca",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Marketing Digital", item: `${SITE.url}/marketing-digital-bahia-blanca` },
  ],
};

const CHANNELS = [
  { title: "Google Ads", desc: "Aparecé primero cuando alguien busca lo que vendés en Bahía Blanca. Campañas de búsqueda y display optimizadas para convertir clics en clientes.", icon: "🔍" },
  { title: "Meta Ads", desc: "Publicidad en Instagram y Facebook segmentada por zona, edad e intereses. Llegá exactamente a las personas que podrían ser tus clientes.", icon: "📱" },
  { title: "SEO Local", desc: "Posicionamiento orgánico en Google para que tu negocio aparezca sin pagar por cada clic. Resultados sostenidos a largo plazo.", icon: "📈" },
  { title: "Redes Sociales", desc: "Gestión de contenido para Instagram y Facebook. Publicaciones que muestran tu negocio como es: real, profesional y cercano.", icon: "📸" },
];

export default function MarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Marketing Digital</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Marketing Digital en Bahía Blanca
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            No alcanza con tener una web. Necesitás que la gente la encuentre.
            Hacemos que tu negocio aparezca en Google y en redes cuando tus
            clientes potenciales buscan lo que ofrecés.
          </p>
          <a href={whatsappLink("Hola! Quiero mejorar la presencia digital de mi negocio en Bahía Blanca.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700">
            Quiero más clientes
          </a>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Canales</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Donde están tus clientes, ahí te ponemos.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-negro/8 bg-white/70 p-6">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold">{c.title}</h3>
                <p className="mt-2 text-sm text-negro/55">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-negro px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Por qué invertir en marketing digital?
          </h2>
          <div className="mt-10 space-y-6 text-crema/70">
            <p>Porque hoy el 90% de las decisiones de compra empiezan en Google o en Instagram. Si tu negocio no aparece ahí, estás perdiendo clientes todos los días sin siquiera saberlo.</p>
            <p>El marketing digital no es un gasto — es la inversión con mayor retorno que puede hacer un negocio local. Cada peso que ponés en una campaña bien armada vuelve multiplicado en consultas, ventas y presencia de marca.</p>
            <p>En Tuki no te vendemos "paquetes de likes". Te armamos campañas que generan consultas reales por WhatsApp y visitas a tu negocio.</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { value: "5x", label: "retorno promedio" },
              { value: "24hs", label: "primera campaña activa" },
              { value: "100%", label: "transparencia en datos" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-black text-rojo">{s.value}</p>
                <p className="mt-1 text-xs text-crema/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rojo px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">¿Querés más clientes desde Google?</h2>
          <p className="mx-auto mt-4 max-w-xl text-crema/80">Te armamos una estrategia personalizada para tu negocio y tu zona.</p>
          <a href={whatsappLink("Hola! Quiero una estrategia de marketing digital para mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-crema px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90">
            Hablemos por WhatsApp
          </a>
          <p className="mt-6 text-sm text-crema/50">
            <Link href="/diseno-web-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Diseño web</Link> ·{" "}
            <Link href="/turnos-online-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Turnos online</Link> ·{" "}
            <Link href="/automatizaciones-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Automatizaciones</Link>
          </p>
        </div>
      </section>
    </>
  );
}
