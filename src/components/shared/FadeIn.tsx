"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { prefersReducedMotion } from "@/lib/motion";

const directionOffset = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
} as const;

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const skip = prefersReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={skip ? { opacity: 1 } : { opacity: 0, ...directionOffset[direction] }}
      animate={
        skip || isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
