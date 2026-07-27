"use client";

import { useEffect, useRef } from "react";
import { isCoarsePointer, isDesktopFinePointer, prefersReducedMotion } from "@/lib/motion";

type Props = {
  colors?: string[];
  count?: number;
  className?: string;
};

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  color: string;
  opacity: number;
};

const LINK_DIST = 100;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const MOUSE_DIST = 140;
const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;
const FRAME_MS = 1000 / 24; // ~24fps cap

export default function ParticleCanvas({
  colors = ["#0d3fe3", "#f2f1ed"],
  count = 40,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion() || isCoarsePointer()) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fine = isDesktopFinePointer();
    let animId = 0;
    let lastTime = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize(entries?: ResizeObserverEntry[]) {
      if (entries?.[0]) {
        const { width, height } = entries[0].contentRect;
        canvas!.width = width;
        canvas!.height = height;
      } else {
        const rect = canvas!.getBoundingClientRect();
        canvas!.width = rect.width;
        canvas!.height = rect.height;
      }
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.6 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.22 + 0.1,
    }));

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() { mouse.x = -9999; mouse.y = -9999; }

    if (fine) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
    }

    function draw(now: number) {
      animId = requestAnimationFrame(draw);

      // Throttle a ~30fps
      if (now - lastTime < FRAME_MS) return;
      lastTime = now;

      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

        ctx!.globalAlpha = p.opacity;
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Líneas con distancia al cuadrado — evita sqrt en el 95% de los pares
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < LINK_DIST_SQ) {
            const d = Math.sqrt(dSq);
            ctx!.globalAlpha = (1 - d / LINK_DIST) * 0.16;
            ctx!.strokeStyle = a.color;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }

        if (fine) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < MOUSE_DIST_SQ) {
            const d = Math.sqrt(dSq);
            ctx!.globalAlpha = (1 - d / MOUSE_DIST) * 0.5;
            ctx!.strokeStyle = a.color;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (animId === 0) animId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animId);
          animId = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      if (fine) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [colors, count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
