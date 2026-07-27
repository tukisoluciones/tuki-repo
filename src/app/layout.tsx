import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import DevViewport from "@/components/shared/DevViewport";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Tuki | Agencia Digital en Bahía Blanca",
    template: "%s | Tuki · Bahía Blanca",
  },
  description: "Agencia digital en Bahía Blanca: sitios web, turnos online, software a medida y SEO para que tu negocio funcione solo. Entrega en 3 días.",
  keywords: [
    "agencia digital Bahía Blanca",
    "diseño web Bahía Blanca",
    "páginas web para negocios en Bahía Blanca",
    "turnos online para negocios",
    "software a medida Bahía Blanca",
    "SEO Bahía Blanca",
    "agencia marketing digital Bahía Blanca",
    "sitio web para negocio local",
    "presencia digital Bahía Blanca",
    "diseño web profesional Argentina",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "2AG4t5Amq2RVq2OSY9-r29rAkWIcF7EGcCxuFlwV7d0",
  },
  alternates: {
    languages: {
      "es-AR": SITE.url,
      es: SITE.url,
    },
  },
  openGraph: {
    title: "Tuki | Agencia Digital en Bahía Blanca",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${SITE.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Tuki — Agencia Digital en Bahía Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuki | Agencia Digital en Bahía Blanca",
    description: SITE.description,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "es-AR",
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo-dark.png`,
      width: 240,
      height: 151,
    },
    sameAs: [SITE.instagramUrl, SITE.facebookUrl],
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: SITE.name,
  alternateName: "Tuki Agencia Digital",
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: `+${SITE.whatsapp}`,
  image: [
    `${SITE.url}/logo-dark.png`,
    `${SITE.url}/opengraph-image.png`,
  ],
  logo: `${SITE.url}/logo-dark.png`,
  priceRange: "$$",
  currenciesAccepted: "ARS",
  paymentAccepted: "Transferencia bancaria, efectivo",
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-13:00"],
  foundingYear: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahía Blanca",
    addressRegion: "Buenos Aires",
    postalCode: "8000",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.7183,
    longitude: -62.2661,
  },
  hasMap: "https://maps.app.goo.gl/bahiablanca",
  areaServed: [
    {
      "@type": "City",
      name: "Bahía Blanca",
      sameAs: "https://es.wikipedia.org/wiki/Bah%C3%ADa_Blanca",
    },
    { "@type": "State", name: "Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -38.7183,
      longitude: -62.2661,
    },
    geoRadius: "150000",
  },
  knowsAbout: [
    "Diseño web",
    "Desarrollo web",
    "SEO",
    "Marketing digital",
    "Software a medida",
    "Turnos online",
    "Presencia digital",
    "Publicidad en Google",
    "Publicidad en Meta",
  ],
  sameAs: [SITE.instagramUrl, SITE.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-crema text-negro">
        <GoogleAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(localBusinessJsonLd) }} />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          {process.env.NODE_ENV === "development" && <DevViewport />}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
