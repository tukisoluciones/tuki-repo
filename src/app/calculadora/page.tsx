import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import LostClientsCalculator from "@/components/tools/LostClientsCalculator";

export const metadata: Metadata = {
  title: "¿Cuántos clientes estás perdiendo?",
  description:
    "Calculá cuántos clientes potenciales pierde tu negocio cada mes por no estar en Google. Herramienta gratuita de Tuki, agencia digital en Bahía Blanca.",
  alternates: { canonical: "/calculadora" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Calculadora", item: `${SITE.url}/calculadora` },
  ],
};

export default function CalculadoraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-16 text-crema sm:px-8 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Herramienta gratuita</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            ¿Cuántos clientes estás perdiendo por no estar en Google?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/60">
            Elegí tu rubro, ingresá tu ciudad, y te mostramos cuántas personas buscan lo que vendés cada mes — y cuántas se están yendo con tu competencia.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f5f1] px-6 py-16 sm:px-8 sm:py-24">
        <LostClientsCalculator />
      </section>
    </>
  );
}
