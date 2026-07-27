import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto — Pedí tu Demo Gratis",
  description:
    "Contactate con Tuki, agencia digital en Bahía Blanca. Escribinos por WhatsApp o completá el formulario y te respondemos el mismo día. Primera demo gratis.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Tuki · Agencia Digital Bahía Blanca",
    description:
      "Escribinos por WhatsApp o completá el formulario. Agencia digital en Bahía Blanca — te respondemos el mismo día.",
    url: "/contacto",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Contacto — Tuki Bahía Blanca" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Contacto", item: `${SITE.url}/contacto` },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — Tuki",
  url: `${SITE.url}/contacto`,
  description: "Página de contacto de Tuki, agencia digital en Bahía Blanca.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: `+${SITE.whatsapp}`,
    email: SITE.email,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahía Blanca",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(contactPageJsonLd) }} />

      <PageHeader
        eyebrow="Contacto"
        title="Hablemos de tu negocio."
        description="Contanos qué hace tu negocio y qué te gustaría resolver. Te respondemos por WhatsApp."
      />

      <section className="bg-crema px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <RevealOnScroll direction="right" className="space-y-10">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
                Directo
              </h3>
              <a
                href={whatsappLink("Hola! Te escribo desde la página de contacto de Tuki.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-display text-2xl font-extrabold tracking-tight transition-colors hover:text-rojo sm:text-3xl"
              >
                {SITE.whatsappDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 block text-base text-negro/70 transition-colors hover:text-rojo"
              >
                {SITE.email}
              </a>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
                Ubicación
              </h3>
              <p className="mt-3 text-base text-negro/70">{SITE.location}</p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
                Redes
              </h3>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-base text-negro/70 transition-colors hover:text-rojo"
              >
                {SITE.instagramHandle}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            direction="left"
            className="rounded-3xl bg-negro p-6 text-crema sm:p-10"
          >
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
