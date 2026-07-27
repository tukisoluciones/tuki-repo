import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { stringifyJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una web en Bahía Blanca?",
  description:
    "Precios reales de páginas web en Bahía Blanca en 2026. Qué incluye cada tipo de web, rangos de precio y cómo elegir la mejor opción para tu negocio.",
  alternates: { canonical: "/blog/cuanto-cuesta-pagina-web-bahia-blanca" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Cuánto cuesta una página web en Bahía Blanca en 2026?",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: `${SITE.url}/logo-dark.png` } },
  mainEntityOfPage: `${SITE.url}/blog/cuanto-cuesta-pagina-web-bahia-blanca`,
  description: "Precios reales de páginas web en Bahía Blanca en 2026.",
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }} />

      <section className="bg-negro px-6 pt-36 pb-16 text-crema sm:px-8 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo hover:underline">← Blog</Link>
          <h1 className="mt-6 font-display text-3xl font-black tracking-tight sm:text-5xl">
            ¿Cuánto cuesta una página web en Bahía Blanca en 2026?
          </h1>
          <p className="mt-4 text-sm text-crema/40">15 de junio, 2026 · 5 min de lectura</p>
        </div>
      </section>

      <article className="bg-crema px-6 py-16 sm:px-8 sm:py-20">
        <div className="prose prose-lg mx-auto max-w-3xl text-negro/80">
          <p className="text-lg leading-relaxed">
            Si tenés un negocio en Bahía Blanca y estás pensando en hacerte una página web,
            la primera pregunta que te surge es obvia: <strong>¿cuánto sale?</strong> La
            respuesta corta es que depende. La respuesta útil es la que viene a continuación.
          </p>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">Los rangos de precio en 2026</h2>
          <p>El mercado de diseño web en Bahía Blanca tiene un rango bastante amplio. Estos son los precios aproximados según el tipo de web:</p>

          <div className="mt-6 space-y-3">
            {[
              { type: "Landing page (1 página)", range: "$80.000 - $200.000", desc: "Ideal para un negocio que necesita presencia online básica con formulario de contacto o WhatsApp." },
              { type: "Web institucional (3-5 páginas)", range: "$200.000 - $500.000", desc: "Para negocios que necesitan mostrar servicios, portfolio, contacto y secciones adicionales." },
              { type: "eCommerce básico", range: "$400.000 - $1.000.000+", desc: "Tienda online con carrito, pagos y gestión de productos." },
              { type: "Web con sistema (turnos, CRM)", range: "$300.000 - $800.000+", desc: "Web + funcionalidad específica como reservas online o panel de gestión." },
            ].map((p) => (
              <div key={p.type} className="rounded-xl border border-negro/8 bg-white/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-negro">{p.type}</span>
                  <span className="font-display text-sm font-black text-rojo">{p.range}</span>
                </div>
                <p className="mt-1 text-sm text-negro/55">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">¿Qué debería incluir tu web?</h2>
          <p>Independientemente del precio, una web profesional para un negocio local tiene que incluir como mínimo:</p>
          <ul className="mt-4 space-y-2">
            <li><strong>Diseño responsive</strong> — que se vea bien en celular. El 80% de tus clientes te van a buscar desde el teléfono.</li>
            <li><strong>Velocidad de carga</strong> — menos de 3 segundos. Google penaliza las webs lentas.</li>
            <li><strong>WhatsApp integrado</strong> — un botón visible para que te contacten al instante.</li>
            <li><strong>SEO básico</strong> — que aparezca en Google cuando busquen tu rubro en tu zona.</li>
            <li><strong>HTTPS</strong> — certificado de seguridad. Los navegadores marcan como inseguras las webs sin HTTPS.</li>
            <li><strong>Hosting y dominio</strong> — preguntá siempre si está incluido y por cuánto tiempo.</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">¿Freelancer, agencia o plataforma tipo Wix?</h2>
          <p>
            Un freelancer suele ser más económico pero puede no tener disponibilidad constante
            ni ofrecer soporte a largo plazo. Las plataformas tipo Wix o WordPress con plantilla
            son la opción más barata, pero tu web va a parecerse a miles de otras y vas a
            depender de sus limitaciones.
          </p>
          <p className="mt-4">
            Una agencia local como Tuki te da lo mejor de ambos mundos: precio accesible
            (no somos Buenos Aires), diseño personalizado, soporte directo por WhatsApp y
            entrega rápida. Hacemos tu web en 3 días y la primera demo es gratis.
          </p>

          <h2 className="mt-10 font-display text-2xl font-extrabold text-negro">¿Cómo elegir sin que te cobren de más?</h2>
          <ul className="mt-4 space-y-2">
            <li>Pedí ver trabajos anteriores del diseñador o agencia.</li>
            <li>Preguntá qué pasa después: ¿incluye mantenimiento? ¿Cuánto cuesta un cambio?</li>
            <li>Desconfiá de precios demasiado bajos (probablemente sea una plantilla sin personalizar).</li>
            <li>Pedí una demo o boceto antes de pagar el total.</li>
          </ul>

          <div className="mt-12 rounded-2xl border border-rojo/20 bg-rojo/5 p-6 text-center">
            <p className="font-display text-lg font-extrabold text-negro">
              ¿Querés saber cuánto costaría la web de tu negocio?
            </p>
            <p className="mt-2 text-sm text-negro/60">Te hacemos una demo gratis y te damos el presupuesto sin compromiso.</p>
            <a
              href={whatsappLink("Hola! Leí el artículo sobre precios de webs y quiero pedir presupuesto.")}
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-rojo px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-crema hover:bg-red-700"
            >
              Pedir presupuesto gratis
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
