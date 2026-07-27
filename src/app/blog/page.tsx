import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog — Consejos para tu Negocio",
  description:
    "Artículos sobre diseño web, marketing digital, SEO y tecnología para negocios locales en Bahía Blanca. Tips prácticos de la agencia Tuki.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "cuanto-cuesta-pagina-web-bahia-blanca",
    title: "¿Cuánto cuesta una página web en Bahía Blanca en 2026?",
    excerpt: "Desglosamos los precios reales del mercado: qué incluye, qué no, y cómo elegir sin que te cobren de más.",
    date: "2026-06-15",
    category: "Diseño Web",
  },
  {
    slug: "como-aparecer-en-google-negocio-local",
    title: "Cómo hacer que tu negocio aparezca primero en Google",
    excerpt: "Guía paso a paso de SEO local para negocios en Bahía Blanca: Google Business, keywords, y lo que realmente funciona.",
    date: "2026-06-10",
    category: "SEO",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Tuki",
  url: `${SITE.url}/blog`,
  description: "Artículos sobre diseño web, marketing digital y tecnología para negocios en Bahía Blanca.",
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(blogJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-20 text-crema sm:px-8 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">Blog</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Consejos para tu negocio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-crema/70">
            Tips prácticos sobre diseño web, marketing digital y tecnología
            para negocios locales. Sin humo, sin tecnicismos.
          </p>
        </div>
      </section>

      <section className="bg-crema px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-8">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-negro/8 bg-white/70 p-6 transition-all hover:border-rojo/30 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-rojo/10 px-3 py-1 font-display font-bold text-rojo">{post.category}</span>
                <span className="text-negro/40">{new Date(post.date).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight text-negro group-hover:text-rojo sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-negro/55">{post.excerpt}</p>
              <span className="mt-4 inline-block font-display text-sm font-bold text-rojo">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
