import { stringifyJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/content";

const FAQS = [
  {
    q: "¿Qué hace Tuki exactamente?",
    a: "Somos una agencia digital: hacemos turnos y reservas online, páginas web, catálogos digitales con QR, software a medida y automatizaciones. No vendemos un solo producto de catálogo — armamos lo que tu negocio necesita para funcionar sin que tengas que estar encima de todo.",
  },
  {
    q: "No sé cuál de todo eso necesito, ¿cómo elijo?",
    a: "No hace falta que lo sepas de antemano. Nos escribís, nos contás qué tarea te consume más tiempo o qué te gustaría resolver, y te decimos qué tiene sentido para tu negocio. Muchas veces es una combinación: por ejemplo, una web con turnos online, o un catálogo con QR más un panel para actualizarlo solo.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende de qué estemos armando. Una página web la entregamos en 3 días hábiles desde que aprobás el diseño, y un catálogo con QR puede estar listo incluso antes. Un sistema de turnos, software a medida o una automatización llevan un poco más porque dependen de cómo trabaja tu negocio hoy — te damos un tiempo estimado apenas hablamos.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Cotizamos cada proyecto a medida, según el alcance. Para páginas web y catálogos con QR te mostramos una demo gratis y sin compromiso antes de que pagues nada; para software a medida y automatizaciones armamos la propuesta después de entender bien qué necesitás. Pedilo por WhatsApp y te respondemos con un presupuesto.",
  },
  {
    q: "¿Con qué tipos de negocio trabajan?",
    a: "Con cualquiera que quiera dejar de hacer tareas a mano. Médicos, odontólogos, psicólogos, gimnasios, peluquerías y abogados suelen empezar por turnos online o su web; restaurantes y comercios, por el catálogo con QR; y negocios con procesos más particulares (stock, gestión, turnos complejos) nos piden software a medida o automatizaciones.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Nosotros nos encargamos de todo: diseño, desarrollo, configuración y puesta en marcha. Vos solo tenés que contarnos cómo funciona tu negocio hoy; nosotros construimos la solución y te la dejamos lista para usar.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Incluimos soporte post-entrega para que todo siga funcionando bien. Si necesitás hacer cambios, sumar algo nuevo o ajustar cómo funciona, te ayudamos.",
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
              href={`https://wa.me/${SITE.whatsapp}?text=Hola!%20Tengo%20una%20consulta%20sobre%20los%20servicios%20de%20Tuki.`}
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
