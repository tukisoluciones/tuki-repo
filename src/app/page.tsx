import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import ServicesPreview from "@/components/home/ServicesPreview";
import ToolsStrip from "@/components/home/ToolsStrip";
import DemoGalleryPreview from "@/components/home/DemoGalleryPreview";
import HowWeWork from "@/components/home/HowWeWork";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Tuki | Agencia Digital en Bahía Blanca",
  description:
    "Diseño web, turnos online, SEO y publicidad en Google para negocios en Bahía Blanca. Entrega en 3 días, sin contratos. Primera demo gratis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tuki | Agencia Digital en Bahía Blanca",
    description:
      "Diseño web, turnos online, SEO y publicidad en Google para negocios en Bahía Blanca. Entrega en 3 días. Primera demo gratis.",
    url: "/",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Tuki — Agencia Digital en Bahía Blanca" }],
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tuki — Agencia Digital en Bahía Blanca",
  url: SITE.url,
  description:
    "Agencia digital en Bahía Blanca especializada en diseño web, turnos online, SEO y publicidad digital para negocios locales.",
  inLanguage: "es-AR",
  isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
  about: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
  keywords:
    "agencia digital Bahía Blanca, diseño web Bahía Blanca, páginas web para negocios, turnos online, SEO Bahía Blanca, publicidad Google",
  dateModified: new Date().toISOString(),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(webPageJsonLd) }} />
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <ToolsStrip />
      <DemoGalleryPreview />
      <HowWeWork />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
