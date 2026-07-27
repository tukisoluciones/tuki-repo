"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 7, suffix: "", label: "servicios disponibles" },
  { value: 10, suffix: "", label: "demos reales a elegir" },
  { value: 100, suffix: "%", label: "personalizado, sin plantillas" },
  { value: 24, suffix: "/7", label: "tu web tomando consultas" },
] as const;

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const counters = Array.from(
      container.querySelectorAll<HTMLElement>("[data-count]")
    );

    if (prefersReducedMotion()) {
      counters.forEach((el) => {
        el.textContent = el.dataset.count ?? "";
      });
      return;
    }

    counters.forEach((el) => {
      const target = Number(el.dataset.count ?? 0);
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate() {
          el.textContent = String(Math.round(obj.val));
        },
      });
    });
  }, []);

  return (
    <section ref={ref} className="bg-crema px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <p className="font-display text-5xl font-black leading-none tracking-tight text-negro sm:text-6xl">
                <span data-count={value}>0</span>
                <span className="text-rojo">{suffix}</span>
              </p>
              <p className="text-sm text-negro/50 sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
