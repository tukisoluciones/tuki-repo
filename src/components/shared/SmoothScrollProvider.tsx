"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isCoarsePointer, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // On touch devices native scroll is smoother than Lenis — only use Lenis on desktop.
    if (prefersReducedMotion() || isCoarsePointer()) return;

    const lenis = new Lenis({
      lerp: 0.13,
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // After client-side navigation recalculate scroll bounds (Lenis on desktop)
  // and refresh ScrollTrigger positions (all devices).
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      lenisInstance?.resize();
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
