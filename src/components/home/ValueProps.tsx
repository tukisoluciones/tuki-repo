import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { whatsappLink } from "@/lib/whatsapp";

const ITEMS = [
  {
    title: "Una web que vende sola",
    description:
      "Tu sitio muestra tus servicios, responde las dudas más comunes y manda al cliente directo a tu WhatsApp, las 24 horas.",
  },
  {
    title: "Turnos sin fricción",
    description:
      "Tu cliente elige día y hora y queda reservado. Se terminan las llamadas y las idas y vueltas para coordinar un horario.",
  },
  {
    title: "Hecho a tu medida",
    description:
      "Nada de plantillas genéricas: diseñamos y armamos cada sitio y cada sistema pensando en cómo trabajás vos.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-crema px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
              Por qué Tuki
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Tu negocio no necesita que estés en todos lados a la vez.
            </h2>
            <p className="mt-6 text-base text-negro/70 sm:text-lg">
              Gran parte de tu día se va en cosas que un sistema bien armado
              podría hacer por vos: responder lo mismo una y otra vez,
              coordinar turnos, ordenar el stock, armar contenido para tus
              redes. Nosotros armamos esas piezas — vos te quedás con el
              tiempo y con el negocio.
            </p>
            <a
              href={whatsappLink("Hola! Quiero saber cómo Tuki puede ayudarme a automatizar mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-negro underline decoration-rojo decoration-2 underline-offset-4 transition-colors hover:text-rojo"
            >
              Contanos tu negocio y te decimos cómo →
            </a>
          </div>

          <RevealOnScroll stagger={0.12} className="flex flex-col">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-6 border-t border-negro/10 py-8 first:border-t-0 first:pt-0 sm:gap-10"
              >
                <span className="font-display text-4xl font-black leading-none text-rojo/25 sm:text-5xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-negro/70 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
