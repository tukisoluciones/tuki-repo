"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const RUBROS = [
  {
    value: "odontologo",
    label: "Odontólogo",
    color: "#4ECDC4",
    services: ["Limpieza dental", "Ortodoncia", "Implantes", "Blanqueamiento"],
    heroText: "Tu sonrisa en las mejores manos.",
    icon: "🦷",
  },
  {
    value: "psicologo",
    label: "Psicólogo",
    color: "#7B8F6B",
    services: ["Terapia individual", "Terapia de pareja", "Sesiones online", "Primera consulta"],
    heroText: "Un espacio seguro para vos.",
    icon: "🧠",
  },
  {
    value: "gimnasio",
    label: "Gimnasio",
    color: "#E63027",
    services: ["Musculación", "Clases grupales", "Funcional", "Personal trainer"],
    heroText: "Entrená sin excusas.",
    icon: "🏋️",
  },
  {
    value: "peluqueria",
    label: "Peluquería",
    color: "#C48B6C",
    services: ["Corte", "Color", "Alisado", "Tratamientos capilares"],
    heroText: "Tu mejor versión empieza acá.",
    icon: "✂️",
  },
  {
    value: "restaurante",
    label: "Restaurante",
    color: "#D4763C",
    services: ["Menú del día", "Carta completa", "Delivery", "Reservas online"],
    heroText: "Sabores que vuelven.",
    icon: "🍽️",
  },
  {
    value: "inmobiliaria",
    label: "Inmobiliaria",
    color: "#2C5F7C",
    services: ["Venta de propiedades", "Alquileres", "Tasaciones", "Asesoramiento"],
    heroText: "Tu próximo hogar te espera.",
    icon: "🏠",
  },
  {
    value: "abogado",
    label: "Abogado",
    color: "#1A1A2E",
    services: ["Derecho civil", "Derecho laboral", "Consultas online", "Mediación"],
    heroText: "Tu derecho, nuestra prioridad.",
    icon: "⚖️",
  },
  {
    value: "estetica",
    label: "Centro de Estética",
    color: "#D4A5A5",
    services: ["Limpieza facial", "Depilación láser", "Masajes", "Tratamientos corporales"],
    heroText: "Sentite bien en tu piel.",
    icon: "💆",
  },
];

export default function PreviewGenerator() {
  const [nombre, setNombre] = useState("");
  const [rubroIdx, setRubroIdx] = useState(0);

  const rubro = RUBROS[rubroIdx];
  const displayName = nombre || "Tu Negocio";

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      {/* Formulario */}
      <div>
        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block font-display text-sm font-bold uppercase tracking-wide text-negro/60">
              Nombre de tu negocio
            </label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Clínica Dental Sonríe"
              className="mt-2 w-full rounded-xl border border-negro/10 bg-white px-5 py-4 font-display text-lg font-bold text-negro placeholder:text-negro/25 focus:border-rojo focus:outline-none focus:ring-2 focus:ring-rojo/20"
            />
          </div>

          <div>
            <label className="block font-display text-sm font-bold uppercase tracking-wide text-negro/60">
              ¿A qué se dedica?
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {RUBROS.map((r, i) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRubroIdx(i)}
                  className={`rounded-xl border-2 px-3 py-3 text-center text-sm font-bold transition-all ${
                    i === rubroIdx
                      ? "border-rojo bg-rojo/5 text-rojo"
                      : "border-negro/8 text-negro/50 hover:border-negro/20"
                  }`}
                >
                  <span className="block text-lg">{r.icon}</span>
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-rojo/15 bg-rojo/5 p-6">
          <p className="font-display text-lg font-extrabold text-negro">
            ¿Te gusta cómo se ve?
          </p>
          <p className="mt-1 text-sm text-negro/50">
            Esto es solo un preview. La web real se ve todavía mejor — con tu contenido, tus fotos y tu marca.
          </p>
          <a
            href={whatsappLink(`Hola! Probé el generador de preview y me gustó cómo se ve para mi negocio "${displayName}" (${rubro.label}). Quiero pedir mi demo gratis.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("preview-generator")}
            className="mt-4 inline-flex items-center rounded-full bg-rojo px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-crema transition-colors hover:bg-red-700"
          >
            Pedí tu demo real gratis →
          </a>
        </div>
      </div>

      {/* Phone Preview */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="h-[350px] w-[350px] rounded-full blur-[80px]" style={{ backgroundColor: `${rubro.color}20` }} />
          </div>

          {/* Phone frame */}
          <div className="relative z-10 aspect-[9/19.5] w-[270px] overflow-hidden rounded-[2.8rem] border-[5px] border-negro/15 bg-white shadow-2xl shadow-negro/20 ring-1 ring-negro/10 sm:w-[300px]">
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-negro" />

            {/* Screen content */}
            <div className="flex h-full flex-col">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-8 pb-2 text-[10px] font-bold text-negro/40">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>●●●●</span>
                  <span>WiFi</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Hero section */}
              <div className="relative flex-1">
                <div className="h-[45%] px-5 pt-4" style={{ backgroundColor: rubro.color }}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{rubro.icon}</span>
                    <span className="font-display text-xs font-black uppercase tracking-wider text-white/90">
                      {displayName}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-xl font-black leading-tight text-white">
                    {rubro.heroText}
                  </p>
                  <button className="mt-3 rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                    Pedir turno →
                  </button>
                </div>

                {/* Services */}
                <div className="px-5 pt-5">
                  <p className="font-display text-[10px] font-bold uppercase tracking-wider text-negro/40">
                    Servicios
                  </p>
                  <div className="mt-2 space-y-2">
                    {rubro.services.map((s, i) => (
                      <div key={s} className="flex items-center gap-2 rounded-lg border border-negro/6 px-3 py-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: rubro.color }} />
                        <span className="text-[11px] font-semibold text-negro/70">{s}</span>
                        {i === 0 && (
                          <span className="ml-auto rounded-full px-2 py-0.5 text-[8px] font-bold text-white" style={{ backgroundColor: rubro.color }}>
                            Popular
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-negro/6 bg-white px-4 py-3">
                  <span className="text-[10px] font-bold" style={{ color: rubro.color }}>Inicio</span>
                  <span className="text-[10px] font-bold text-negro/30">Servicios</span>
                  <span className="text-[10px] font-bold text-negro/30">Turnos</span>
                  <span className="text-[10px] font-bold text-negro/30">Contacto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
