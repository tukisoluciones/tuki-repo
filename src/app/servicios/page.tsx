import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ServiceSection from "@/components/services/ServiceSection";
import { SERVICES, SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Turnos, Páginas Web y Catálogos con QR",
  description:
    "Turnos online, páginas web, catálogos digitales con QR y automatizaciones para negocios en Bahía Blanca. Entrega en 3 días, sin contratos de permanencia.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Turnos, Páginas Web y Catálogos con QR | Tuki · Bahía Blanca",
    description:
      "Turnos online, páginas web y catálogos digitales con QR para negocios en Bahía Blanca. Primera demo gratis, entrega en 3 días.",
    url: "/servicios",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Servicios digitales — Tuki Bahía Blanca" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE.url}/servicios` },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios digitales de Tuki en Bahía Blanca",
  url: `${SITE.url}/servicios`,
  itemListElement: SERVICES.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `${SITE.url}/servicios#${service.slug}`,
      provider: {
        "@type": "LocalBusiness",
        name: SITE.name,
        url: SITE.url,
        areaServed: "Bahía Blanca, Argentina",
      },
    },
  })),
};

export default function ServiciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(servicesJsonLd) }} />

      <PageHeader
        eyebrow="Servicios"
        title="Cuatro formas de devolverte horas."
        description="Cada servicio resuelve una tarea que hoy te roba tiempo. Los podés contratar de a uno o combinados, según lo que necesite tu negocio."
      />
      {SERVICES.map((service) => (
        <ServiceSection key={service.slug} service={service} />
      ))}
    </>
  );
}
