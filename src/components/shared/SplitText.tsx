"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { prefersReducedMotion } from "@/lib/motion";

type VariantName = "fade-up" | "wave" | "reveal";

function makeVariants(name: VariantName, i: number): Variants {
  switch (name) {
    case "fade-up":
      return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: i * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      };
    case "wave":
      return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: i * 0.03, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
      };
    case "reveal":
      return {
        hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        visible: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition: { delay: i * 0.02, duration: 0.7, ease: [0.77, 0, 0.18, 1] } },
      };
  }
}

export default function SplitText({
  text,
  variant = "fade-up",
  className = "",
}: {
  text: string;
  variant?: VariantName;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const skip = prefersReducedMotion();

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char) => {
            const ci = charIndex++;
            return (
              <motion.span
                key={ci}
                className="inline-block"
                initial={skip ? "visible" : "hidden"}
                animate={skip || isInView ? "visible" : "hidden"}
                variants={makeVariants(variant, ci)}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}
