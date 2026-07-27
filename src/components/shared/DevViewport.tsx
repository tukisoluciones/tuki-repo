"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type DeviceId = "phone" | "tablet";

const DEVICES: { id: DeviceId; label: string; w: number; radius: string }[] = [
  { id: "phone", label: "📱 Celular", w: 390, radius: "rounded-[36px]" },
  { id: "tablet", label: "📟 Tablet", w: 768, radius: "rounded-2xl" },
];

export default function DevViewport() {
  const [active, setActive] = useState<DeviceId | null>(null);
  const [viewportW, setViewportW] = useState(0);
  const [bp, setBp] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setViewportW(w);
      if (w < 640) setBp("mobile");
      else if (w < 768) setBp("sm");
      else if (w < 1024) setBp("tablet");
      else if (w < 1280) setBp("lg");
      else setBp("desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const device = DEVICES.find((d) => d.id === active) ?? null;

  return (
    <>
      {/* Floating badge */}
      <div className="fixed bottom-20 left-4 z-[300] flex flex-col gap-1.5 rounded-2xl border border-negro/10 bg-crema/95 p-2.5 shadow-lg shadow-black/10 backdrop-blur-md">
        <p className="px-1 font-display text-[10px] font-bold uppercase tracking-widest text-negro/40">
          Vista previa
        </p>
        <p className="px-1 font-mono text-[10px] text-negro/60">
          {viewportW}px · {bp}
        </p>
        <div className="mt-0.5 flex flex-col gap-1">
          {DEVICES.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive((prev) => (prev === d.id ? null : d.id))}
              className={`rounded-xl px-3 py-1.5 text-left font-display text-[11px] font-semibold transition-colors ${
                active === d.id
                  ? "bg-negro text-crema"
                  : "text-negro/70 hover:bg-negro/5 hover:text-negro"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Device overlay */}
      {device && (
        <div
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center bg-negro/80 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controls */}
            <div className="flex items-center gap-3">
              {DEVICES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide transition-colors ${
                    active === d.id
                      ? "bg-rojo text-crema"
                      : "bg-white/10 text-crema/60 hover:bg-white/20 hover:text-crema"
                  }`}
                >
                  {d.label}
                </button>
              ))}
              <button
                onClick={() => setActive(null)}
                className="rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-crema/60 hover:bg-white/20 hover:text-crema"
              >
                ✕ Cerrar
              </button>
            </div>

            {/* Device frame */}
            <div
              className={`border-4 border-white/20 bg-black shadow-2xl ${device.radius} overflow-hidden`}
              style={{
                width: device.w,
                height: device.id === "phone" ? "min(844px, 85vh)" : "min(900px, 85vh)",
              }}
            >
              {/* Notch bar for phone */}
              {device.id === "phone" && (
                <div className="flex h-7 items-center justify-center bg-black">
                  <div className="h-4 w-24 rounded-full bg-negro/80" />
                </div>
              )}
              <iframe
                key={`${device.id}-${pathname}`}
                src={pathname}
                title={`Vista ${device.label}`}
                className="border-0 bg-white"
                style={{
                  width: device.w,
                  height: device.id === "phone" ? "calc(min(844px, 85vh) - 28px)" : "min(900px, 85vh)",
                }}
              />
            </div>

            <p className="font-mono text-xs text-crema/30">
              {device.w}px · Hacé clic fuera o Esc para cerrar
            </p>
          </div>
        </div>
      )}
    </>
  );
}
