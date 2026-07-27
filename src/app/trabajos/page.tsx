import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PhoneDemoCard from "@/components/work/PhoneDemoCard";
import { DEMOS, SITE } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { stringifyJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Portafolio de Webs por Rubro",
  description:
    "Demos reales de páginas web para psicólogos, gimnasios, odontólogos, restaurantes y más. Mirá cómo puede verse tu negocio en Google. Entrega en 3 días.",
  alternates: { canonical: "/trabajos" },
  openGraph: {
    title: "Portafolio de Webs por Rubro | Tuki · Bahía Blanca",
    description:
      "Webs para psicólogos, gimnasios, odontólogos y restaurantes en Bahía Blanca. Demos reales de cómo puede verse tu negocio online.",
    url: "/trabajos",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Demos web — Tuki Bahía Blanca" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Trabajos", item: `${SITE.url}/trabajos` },
  ],
};

const videosJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Demos de sitios web por rubro — Tuki",
  itemListElement: DEMOS.map((demo, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: `Demo sitio web para ${demo.rubro} — Tuki Bahía Blanca`,
      description: `Demo de diseño web para ${demo.rubro} realizado por Tuki, agencia digital en Bahía Blanca. Incluye ${demo.accion.toLowerCase()}.`,
      thumbnailUrl: `${SITE.url}/opengraph-image.png`,
      uploadDate: "2026-06-15",
      contentUrl: `${SITE.url}${demo.file}`,
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: `${SITE.url}/logo-dark.png` },
      },
    },
  })),
};

export default function TrabajosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(videosJsonLd) }} />

      <PageHeader
        eyebrow="Trabajos"
        title="10 rubros, 10 ideas distintas."
        description="Tuki recién arranca, así que estos son demos: ejemplos hechos por nosotros para mostrar nuestra capacidad de diseño por rubro. Datos inventados, diseño real. La próxima demo puede ser la de tu negocio."
      />

      <section className="bg-crema px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll
          stagger={0.08}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4"
        >
          {DEMOS.map((demo) => (
            <PhoneDemoCard key={demo.slug} demo={demo} />
          ))}
        </RevealOnScroll>
      </section>

      <section className="bg-negro px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
            Tu negocio también entra acá
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-crema sm:text-4xl">
            No importa el rubro. Si tenés un negocio,{" "}
            <span className="text-rojo">te hacemos la web.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-crema/60">
            Comercios, profesionales independientes, servicios a domicilio,
            emprendimientos, estudios, talleres — si vendés algo, te ponemos
            online con una web que realmente trabaja para vos.
          </p>
          <a
            href={whatsappLink(
              "Hola! Vi los demos de Tuki y me interesa una web para mi negocio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-rojo px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-rojo-soft"
          >
            Contanos tu negocio →
          </a>
        </div>
      </section>
    </>
  );
}
