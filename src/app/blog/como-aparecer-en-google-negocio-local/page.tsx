import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Cómo aparecer primero en Google",
  description:
    "Guía completa de SEO local para negocios en Bahía Blanca: Google Business Profile, keywords, contenido y links. Lo que realmente funciona para posicionar.",
  alternates: { canonical: "/blog/como-aparecer-en-google-negocio-local" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo hacer que tu negocio aparezca primero en Google",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: `${SITE.url}/logo-dark.png` } },
  mainEntityOfPage: `${SITE.url}/blog/como-aparecer-en-google-negocio-local`,
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-16 text-crema sm:px-8 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo hover:underline">← Blog</Link>
          <h1 className="mt-6 font-display text-3xl font-black tracking-tight sm:text-5xl">
            Cómo hacer que tu negocio aparezca primero en Google
          </h1>
          <p className="mt-4 text-sm text-crema/40">10 de junio, 2026 · 7 min de lectura</p>
        </div>
      </section>

      <article className="bg-crema px-6 py-16 sm:px-8 sm:py-20">
        <div className="prose prose-lg mx-auto max-w-3xl text-negro/80">
          <p className="text-lg leading-relaxed">
            Si alguien en Bahía Blanca busca &quot;dentista cerca&quot; o &quot;gimnasio
            en el centro&quot;, ¿aparecés vos o aparece tu competencia? El <strong>SEO
            local</strong> es lo que decide eso — y no es tan difícil como parece.
          </p>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">1. Creá tu perfil de Google Business</h2>
          <p>
            Esto es lo primero y más importante. Google Business Profile (antes Google
            My Business) es gratuito y es lo que hace que tu negocio aparezca en el
            mapa de Google y en las búsquedas locales con la ficha de la derecha.
          </p>
          <p className="mt-3">Para configurarlo bien necesitás:</p>
          <ul className="mt-2 space-y-1">
            <li>Nombre exacto de tu negocio (como lo conocen tus clientes)</li>
            <li>Dirección física verificada</li>
            <li>Número de teléfono y WhatsApp</li>
            <li>Horarios de atención actualizados</li>
            <li>Fotos reales de tu negocio (mínimo 5)</li>
            <li>Categoría correcta (ej: &quot;Odontólogo&quot;, no &quot;Salud&quot;)</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">2. Tu web tiene que decir dónde estás</h2>
          <p>
            Google necesita confirmar que tu negocio está en Bahía Blanca. Tu web tiene
            que mencionar la ciudad naturalmente en los títulos, descripciones y contenido.
            No se trata de repetir &quot;Bahía Blanca&quot; 50 veces — se trata de que
            tu web responda la pregunta &quot;¿dónde estás?&quot; de forma clara.
          </p>
          <p className="mt-3">Lo mínimo que tu web necesita para SEO local:</p>
          <ul className="mt-2 space-y-1">
            <li>Título con tu ciudad: &quot;Peluquería en Bahía Blanca&quot;</li>
            <li>Dirección en el footer</li>
            <li>Mapa embebido de Google Maps</li>
            <li>Schema markup de LocalBusiness (datos estructurados)</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">3. Conseguí reseñas de clientes</h2>
          <p>
            Las reseñas de Google son uno de los factores más importantes para el SEO local.
            Un negocio con 20 reseñas positivas le gana casi siempre a uno con 3.
          </p>
          <p className="mt-3">
            La clave es pedirlas activamente: después de cada atención, enviá un mensaje
            con el link directo a tu ficha de Google para dejar reseña. La mayoría de los
            clientes satisfechos están dispuestos a dejarte una reseña si se lo pedís.
          </p>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">4. Publicá contenido relevante</h2>
          <p>
            Google premia las webs que tienen contenido actualizado y relevante. Un blog
            con artículos sobre tu rubro te posiciona para búsquedas que tus competidores
            ni están pensando en atacar.
          </p>
          <p className="mt-3">
            Por ejemplo: si tenés un consultorio odontológico, un artículo como &quot;Cuánto
            cuesta un implante dental en Bahía Blanca&quot; puede traerte decenas de
            pacientes nuevos al mes desde Google.
          </p>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">5. Que tu web sea rápida y funcione en celular</h2>
          <p>
            Google mide la velocidad de tu web y si funciona bien en celular. Una web
            que tarda más de 3 segundos en cargar pierde posiciones. Y si no se ve
            bien en celular, directamente no rankea para búsquedas móviles (que son
            el 80% de las búsquedas locales).
          </p>

          <div className="mt-12 rounded-2xl border border-rojo/20 bg-rojo/5 p-6 text-center">
            <p className="font-display text-lg font-extrabold text-negro">
              ¿Querés que tu negocio aparezca primero en Google?
            </p>
            <p className="mt-2 text-sm text-negro/60">
              Hacemos webs optimizadas para SEO local con todo lo que necesitás para posicionar.
            </p>
            <a
              href={whatsappLink("Hola! Leí el artículo de SEO y quiero mejorar el posicionamiento de mi negocio.")}
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-rojo px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-crema hover:bg-red-700"
            >
              Consultá gratis
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
