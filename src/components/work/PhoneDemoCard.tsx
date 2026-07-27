"use client";

import { useEffect, useRef } from "react";
import TiltCard from "@/components/shared/TiltCard";
import type { Demo } from "@/lib/content";

export default function PhoneDemoCard({ demo }: { demo: Demo }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <TiltCard
      className="flex flex-col items-center"
      options={{ max: 6, scale: 1.03 }}
    >
      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[230px] rounded-[2rem] border-[6px] border-negro bg-negro shadow-xl shadow-black/10">
        <div
          className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-negro"
          aria-hidden="true"
        />
        <div className="h-full w-full overflow-hidden rounded-[1.5rem]">
          <video
            ref={videoRef}
            src={demo.file}
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="font-display text-base font-bold tracking-tight">
          {demo.rubro}
        </p>
        <p className="mt-1 font-display text-xs font-semibold uppercase tracking-widest text-rojo">
          {demo.accion}
        </p>
      </div>
    </TiltCard>
  );
}
