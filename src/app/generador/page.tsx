import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import PreviewGenerator from "@/components/tools/PreviewGenerator";

export const metadata: Metadata = {
  title: "Generador de Preview — Mirá tu web",
  description:
    "Escribí el nombre de tu negocio y mirá al instante cómo podría verse tu página web. Generador gratuito de Tuki, agencia digital en Bahía Blanca.",
  alternates: { canonical: "/generador" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Generador de Preview", item: `${SITE.url}/generador` },
  ],
};

export default function GeneradorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-16 text-crema sm:px-8 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Herramienta gratuita</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            ¿Cómo se vería la web de tu negocio?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/60">
            Escribí el nombre y elegí tu rubro. Te mostramos un preview al instante.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f5f1] px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <PreviewGenerator />
        </div>
      </section>
    </>
  );
}
