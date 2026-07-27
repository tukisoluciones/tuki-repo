"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SERVICES } from "@/lib/content";
import { isDesktopFinePointer, prefersReducedMotion } from "@/lib/motion";

const ITEMS = SERVICES.map((service) => service.title);

export default function ServicesMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 32,
      ease: "none",
    });
    tweenRef.current = tween;

    return () => {
      tween.kill();
      tweenRef.current = null;
    };
  }, []);

  function handleMouseEnter() {
    if (isDesktopFinePointer()) tweenRef.current?.pause();
  }

  function handleMouseLeave() {
    if (isDesktopFinePointer()) tweenRef.current?.play();
  }

  const group = (key: string) => (
    <div key={key} className="flex flex-none items-center gap-10 pr-10">
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase tracking-wide text-crema sm:text-4xl"
        >
          {item}
          <span className="h-1.5 w-1.5 rounded-full bg-rojo sm:h-2 sm:w-2" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="-mx-[1%] w-[102%] -rotate-[0.3deg] overflow-hidden bg-negro py-6 sm:py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className="flex w-max flex-none">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
