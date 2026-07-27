"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import type { HTMLVanillaTiltElement, TiltOptions } from "vanilla-tilt";
import { isCoarsePointer, prefersReducedMotion } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  options?: TiltOptions;
};

const DEFAULT_OPTIONS: TiltOptions = {
  max: 8,
  speed: 400,
  glare: false,
  scale: 1.02,
  perspective: 900,
};

export default function TiltCard({ children, className, options }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current as HTMLVanillaTiltElement | null;
    if (!el || prefersReducedMotion() || isCoarsePointer()) return;

    VanillaTilt.init(el, { ...DEFAULT_OPTIONS, ...options });

    return () => {
      el.vanillaTilt?.destroy();
    };
  }, [options]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
