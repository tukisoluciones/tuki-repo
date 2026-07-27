"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** If set, animates direct children with a stagger instead of the wrapper itself */
  stagger?: number;
  start?: string;
};

export default function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.9,
  stagger,
  start = "top 85%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element | Element[] =
      stagger !== undefined ? Array.from(el.children) : el;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
      return;
    }

    const from: gsap.TweenVars = { opacity: 0 };
    switch (direction) {
      case "up":
        from.y = 48;
        break;
      case "down":
        from.y = -48;
        break;
      case "left":
        from.x = 48;
        break;
      case "right":
        from.x = -48;
        break;
      case "scale":
        from.scale = 0.92;
        break;
    }

    gsap.set(targets, from);

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, delay, duration, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
