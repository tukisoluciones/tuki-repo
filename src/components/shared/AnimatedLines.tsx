"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function AnimatedLines({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelectorAll<HTMLElement>("[data-anim-line]");

    if (prefersReducedMotion()) {
      gsap.set(inner, { x: "0%", opacity: 1 });
      return;
    }

    gsap.set(inner, { x: "-110%", opacity: 0 });
    gsap.to(inner, {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.15,
    });
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <span data-anim-line className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
