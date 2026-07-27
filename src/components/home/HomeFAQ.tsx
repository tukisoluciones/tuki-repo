import { stringifyJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/content";

const FAQS = [
  {
    q: "¿Cuánto tiempo tardan en entregar una página web?",
    a: "Entregamos en 3 días hábiles desde que aprobás el diseño. Negocios como odontólogos, gimnasios o psicólogos tienen su web lista en menos de una semana.",
  },
  {
    q: "¿Cuánto sale una página web en Bahía Blanca?",
    a: "Depende del proyecto. Ofrecemos una demo gratuita y sin compromiso para que veas cómo quedaría tu web antes de pagar. Pedila por WhatsApp y te enviamos el presupuesto.",
  },
  {
    q: "¿Trabajan con cualquier tipo de negocio?",
    a: "Sí. Trabajamos con médicos, odontólogos, psicólogos, gimnasios, restaurantes, peluquerías, abogados, inmobiliarias y cualquier negocio que quiera crecer online en Bahía Blanca y alrededores.",
  },
  {
    q: "¿Necesito saber de tecnología para tener una web?",
    a: "No. Nosotros nos encargamos de todo: diseño, desarrollo, hosting y publicación. Solo tenés que darnos los datos de tu negocio y nosotros hacemos el resto.",
  },
  {
    q: "¿La web va a funcionar bien en celular?",
    a: "Sí. Todas las webs que hacemos están optimizadas para celular (mobile-first), que es donde más del 80% de tus clientes potenciales te van a buscar.",
  },
  {
    q: "¿También hacen turnos online, catálogos con QR y software a medida?",
    a: "Sí. Además del diseño web, ofrecemos sistemas de turnos y reservas, catálogos digitales con QR para gastronomía y comercio, software a medida y automatizaciones para tu negocio.",
  },
  {
    q: "¿Qué pasa con mi web después de que me la entregan?",
    a: "Incluimos soporte post-entrega para que tu web siga funcionando bien. Si necesitás hacer cambios o agregar algo, te ayudamos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="bg-[#f6f5f1] px-6 py-20 sm:px-8 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl">
        <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
          Preguntas frecuentes
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-negro sm:text-4xl">
          Lo que todos preguntan antes de arrancar.
        </h2>

        <div className="mt-10 divide-y divide-negro/8">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-bold text-negro sm:text-lg">
                  {q}
                </span>
                <span
                  className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-negro/12 text-negro/40 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-negro/55 sm:pr-12">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-rojo/15 bg-rojo/5 px-6 py-5">
          <p className="text-sm text-negro/60">
            ¿Tenés una pregunta que no está acá?{" "}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hola!%20Tengo%20una%20consulta%20sobre%20los%20servicios%20de%20Hora%20Libre.`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rojo underline-offset-2 hover:underline"
            >
              Escribinos por WhatsApp
            </a>{" "}
            y te respondemos en minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
