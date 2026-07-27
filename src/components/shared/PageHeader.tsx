import RevealOnScroll from "./RevealOnScroll";
import AnimatedLines from "./AnimatedLines";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-negro px-6 pb-20 pt-36 text-crema sm:px-8 sm:pb-28 sm:pt-44">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rojo/15 blur-3xl motion-safe:animate-float"
        aria-hidden="true"
      />
      <RevealOnScroll className="relative mx-auto max-w-6xl">
        <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
          {eyebrow}
        </span>
        <AnimatedLines
          lines={[title]}
          className="mt-4 font-display text-5xl font-black uppercase leading-[1.15] tracking-tight sm:text-7xl"
        />
        {description && (
          <p className="mt-6 max-w-2xl text-base text-crema/70 sm:text-lg">
            {description}
          </p>
        )}
      </RevealOnScroll>
    </section>
  );
}
