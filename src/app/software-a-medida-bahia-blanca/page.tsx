import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Software a Medida",
  description:
    "Desarrollo de software a medida para negocios en Bahía Blanca. Paneles de gestión, CRM, inventario y automatizaciones hechas a tu medida. Sin suscripciones.",
  alternates: { canonical: "/software-a-medida-bahia-blanca" },
  openGraph: {
    title: "Software a Medida | Tuki · Bahía Blanca",
    description: "Paneles de gestión, CRM e inventario hechos a medida para tu negocio.",
    url: "/software-a-medida-bahia-blanca",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Software a Medida", item: `${SITE.url}/software-a-medida-bahia-blanca` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Software a Medida", description: "Desarrollo de software personalizado para negocios en Bahía Blanca.",
  provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
  areaServed: { "@type": "City", name: "Bahía Blanca" }, serviceType: "Desarrollo de Software",
};

const CASES = [
  { title: "Panel de gestión", desc: "Un tablero con todo lo que necesitás: clientes, pedidos, facturación, reportes. Todo en un solo lugar, accesible desde cualquier dispositivo.", icon: "📊" },
  { title: "Control de inventario", desc: "Sabé qué tenés en stock en tiempo real. Alertas de reposición, historial de movimientos y reportes de productos más vendidos.", icon: "📦" },
  { title: "CRM personalizado", desc: "Seguimiento de cada cliente y cada oportunidad. Historial de contacto, etapas de venta y recordatorios automáticos.", icon: "👥" },
  { title: "Automatizaciones internas", desc: "Conectamos tus herramientas: que un formulario cargue datos en tu sistema, que un pago dispare una factura, que todo fluya solo.", icon: "⚡" },
];

export default function SoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(serviceJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Software</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Software a Medida en Bahía Blanca
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            Las planillas de Excel y los sistemas genéricos no escalan. Te desarrollamos
            un sistema hecho exactamente para cómo funciona tu negocio — sin suscripciones
            mensuales, sin funciones que no usás.
          </p>
          <a href={whatsappLink("Hola! Necesito un sistema a medida para mi negocio.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700">
            Contanos qué necesitás
          </a>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Soluciones</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Un sistema que se adapta a vos, no al revés.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CASES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-negro/8 bg-white/70 p-6">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold text-negro">{c.title}</h3>
                <p className="mt-2 text-sm text-negro/55">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-negro px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Por qué a medida y no un sistema genérico?
          </h2>
          <div className="mt-10 space-y-6 text-crema/70">
            <p>Porque tu negocio no es igual al de al lado. Un restaurante no gestiona igual que un consultorio, y una inmobiliaria no necesita lo mismo que un gimnasio.</p>
            <p>Los sistemas genéricos te obligan a adaptarte a ellos: pagás funciones que no usás, te falta la que sí necesitás, y terminás complementando con planillas sueltas. Con software a medida, el sistema se adapta a tu flujo de trabajo real.</p>
            <p>Además, no pagás suscripciones mensuales eternas. Es tu sistema, lo usás como quieras, y si mañana necesitás agregar algo, lo hacemos.</p>
          </div>
        </div>
      </section>

      <section className="bg-rojo px-6 py-20 text-crema sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">¿Tenés un problema que un sistema puede resolver?</h2>
          <p className="mx-auto mt-4 max-w-xl text-crema/80">Contanos y te proponemos una solución sin compromiso.</p>
          <a href={whatsappLink("Hola! Quiero consultar sobre un sistema a medida.")} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-crema px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-negro transition-colors hover:bg-crema/90">
            Escribinos por WhatsApp
          </a>
          <p className="mt-6 text-sm text-crema/50">
            <Link href="/diseno-web-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Diseño web</Link> ·{" "}
            <Link href="/automatizaciones-bahia-blanca" className="underline underline-offset-2 hover:text-crema/80">Automatizaciones</Link> ·{" "}
            <Link href="/servicios" className="underline underline-offset-2 hover:text-crema/80">Todos los servicios</Link>
          </p>
        </div>
      </section>
    </>
  );
}
