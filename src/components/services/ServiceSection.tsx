import RevealOnScroll from "@/components/shared/RevealOnScroll";
import MagneticButton from "@/components/shared/MagneticButton";
import { whatsappLink } from "@/lib/whatsapp";
import type { Service } from "@/lib/content";

export default function ServiceSection({ service }: { service: Service }) {
  const isFirst = service.number === "01";

  return (
    <section
      id={service.slug}
      className={`px-6 py-16 sm:px-8 sm:py-24 ${
        isFirst ? "" : "border-t border-negro/10"
      }`}
    >
      <RevealOnScroll className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <span className="font-display text-7xl font-black text-rojo/15 sm:text-8xl">
            {service.number}
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            {service.title}
          </h2>
          <p className="mt-3 font-display text-base font-semibold text-rojo">
            {service.short}
          </p>
        </div>

        <div>
          <p className="text-base text-negro/70 sm:text-lg">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-0.5 text-rojo">→</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <MagneticButton
            href={whatsappLink(
              `Hola! Quiero pedir mi demo gratis de Tuki para el servicio de ${service.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-negro px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-rojo"
          >
            Pedí tu demo gratis
          </MagneticButton>
        </div>
      </RevealOnScroll>
    </section>
  );
}
