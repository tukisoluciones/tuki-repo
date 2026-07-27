"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell,
  PieChart, Pie, Tooltip,
} from "recharts";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const RUBROS = [
  { value: "dentista", label: "Odontólogo", emoji: "🦷", baseSearches: 1200, conversion: 0.12, ticketAvg: 35000, keyword: "dentista" },
  { value: "psicologo", label: "Psicólogo", emoji: "🧠", baseSearches: 800, conversion: 0.15, ticketAvg: 25000, keyword: "psicólogo" },
  { value: "gimnasio", label: "Gimnasio", emoji: "🏋️", baseSearches: 1500, conversion: 0.10, ticketAvg: 20000, keyword: "gimnasio" },
  { value: "peluqueria", label: "Peluquería", emoji: "✂️", baseSearches: 900, conversion: 0.14, ticketAvg: 15000, keyword: "peluquería" },
  { value: "restaurante", label: "Restaurante", emoji: "🍽️", baseSearches: 2000, conversion: 0.08, ticketAvg: 18000, keyword: "restaurante" },
  { value: "inmobiliaria", label: "Inmobiliaria", emoji: "🏠", baseSearches: 1000, conversion: 0.05, ticketAvg: 150000, keyword: "inmobiliaria" },
  { value: "abogado", label: "Abogado", emoji: "⚖️", baseSearches: 650, conversion: 0.12, ticketAvg: 50000, keyword: "abogado" },
  { value: "estetica", label: "Estética", emoji: "💆", baseSearches: 700, conversion: 0.13, ticketAvg: 22000, keyword: "estética" },
  { value: "veterinaria", label: "Veterinaria", emoji: "🐾", baseSearches: 850, conversion: 0.11, ticketAvg: 20000, keyword: "veterinaria" },
  { value: "contador", label: "Contador", emoji: "📊", baseSearches: 550, conversion: 0.10, ticketAvg: 40000, keyword: "contador" },
  { value: "medico", label: "Médico", emoji: "🩺", baseSearches: 1300, conversion: 0.11, ticketAvg: 30000, keyword: "médico" },
  { value: "taller", label: "Taller mecánico", emoji: "🔧", baseSearches: 950, conversion: 0.13, ticketAvg: 45000, keyword: "taller mecánico" },
];

const CITY_SIZES = [
  { label: "Chica", sub: "< 100K hab.", multiplier: 0.4, icon: "🏘️" },
  { label: "Mediana", sub: "100K — 500K", multiplier: 1.0, icon: "🏙️" },
  { label: "Grande", sub: "> 500K hab.", multiplier: 2.5, icon: "🌆" },
];

const CTR = 0.28;

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  return val;
}

function AnimNum({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const v = useCounter(value);
  return <>{prefix}{v.toLocaleString("es-AR")}{suffix}</>;
}

function CircularProgress({ pct, label, color }: { pct: number; label: string; color: string }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle cx="40" cy="40" r={r} fill="none" stroke="#1414140a" strokeWidth="6" />
          <motion.circle
            cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg font-black text-negro">{pct}%</span>
        </div>
      </div>
      <span className="text-center text-xs font-bold text-negro/50">{label}</span>
    </div>
  );
}

export default function LostClientsCalculator() {
  const [rubroIdx, setRubroIdx] = useState<number | null>(null);
  const [cityIdx, setCityIdx] = useState<number | null>(null);
  const [ciudad, setCiudad] = useState("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [realVolume, setRealVolume] = useState<number | null>(null);
  const [dataSource, setDataSource] = useState<"estimate" | "google_ads">("estimate");
  const [loading, setLoading] = useState(false);

  const rubro = rubroIdx !== null ? RUBROS[rubroIdx] : null;
  const citySize = cityIdx !== null ? CITY_SIZES[cityIdx] : null;

  const estimatedSearches = rubro && citySize ? Math.round(rubro.baseSearches * citySize.multiplier) : 0;
  const searches = realVolume ?? estimatedSearches;
  const clicks = Math.round(searches * CTR);
  const clients = rubro ? Math.round(clicks * rubro.conversion) : 0;
  const revMonth = rubro ? clients * rubro.ticketAvg : 0;
  const revYear = revMonth * 12;
  const displayCity = ciudad.trim() || "tu ciudad";

  const fetchRealData = useCallback(async () => {
    if (!rubro || !ciudad.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: `${rubro.keyword} ${ciudad.trim()}`,
          location: "Argentina",
        }),
      });
      const data = await res.json();
      if (data.source === "google_ads" && data.volume) {
        setRealVolume(data.volume);
        setDataSource("google_ads");
      } else {
        setDataSource("estimate");
      }
    } catch {
      setDataSource("estimate");
    } finally {
      setLoading(false);
    }
  }, [rubro, ciudad]);

  const handleShowResults = () => {
    if (cityIdx === null) return;
    setStep(3);
    fetchRealData();
  };

  const funnelData = [
    { name: "Buscan", value: searches, fill: "#141414" },
    { name: "Hacen clic", value: clicks, fill: "#555" },
    { name: "Contratan", value: clients, fill: "#0D3FE3" },
  ];

  const pieData = [
    { name: "Clientes perdidos", value: clients, fill: "#0D3FE3" },
    { name: "No convierten", value: clicks - clients, fill: "#14141415" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Progress */}
      <div className="mb-10 flex items-center justify-center gap-1">
        {["Rubro", "Ciudad", "Resultados"].map((lbl, i) => (
          <div key={lbl} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => { if (i + 1 < step) setStep((i + 1) as 1 | 2 | 3); }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                step >= i + 1 ? "bg-negro text-crema" : "bg-negro/5 text-negro/30"
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">{i + 1}</span>
              <span className="hidden sm:inline">{lbl}</span>
            </button>
            {i < 2 && <div className={`h-px w-4 sm:w-10 ${step > i + 1 ? "bg-negro" : "bg-negro/10"}`} />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
            <div className="text-center">
              <h2 className="font-display text-2xl font-black text-negro sm:text-3xl">¿Cuál es tu rubro?</h2>
              <p className="mt-2 text-negro/40">Seleccioná el que más se parezca a tu negocio</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {RUBROS.map((r, i) => (
                <button key={r.value} type="button" onClick={() => setRubroIdx(i)}
                  className={`group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all ${
                    rubroIdx === i ? "border-rojo bg-white shadow-xl shadow-rojo/10" : "border-transparent bg-white/60 hover:bg-white hover:shadow-lg"
                  }`}>
                  <span className="text-3xl">{r.emoji}</span>
                  <p className={`mt-2 font-display text-sm font-extrabold ${rubroIdx === i ? "text-rojo" : "text-negro"}`}>{r.label}</p>
                  {rubroIdx === i && (
                    <motion.div layoutId="selected" className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-rojo text-[10px] text-white">✓</motion.div>
                  )}
                </button>
              ))}
            </div>
            <div className="text-center">
              <button type="button" onClick={() => rubroIdx !== null && setStep(2)} disabled={rubroIdx === null}
                className="group inline-flex items-center gap-2 rounded-full bg-negro px-10 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-all hover:bg-rojo disabled:opacity-20">
                Siguiente
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
            <div className="text-center">
              <h2 className="font-display text-2xl font-black text-negro sm:text-3xl">¿Dónde está tu negocio?</h2>
            </div>
            <div className="mx-auto max-w-sm">
              <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Ej: Rosario, Córdoba, Mendoza..."
                className="w-full rounded-2xl border-2 border-negro/8 bg-white px-6 py-4 text-center font-display text-lg font-bold text-negro placeholder:text-negro/20 focus:border-rojo focus:outline-none" />
            </div>
            <div>
              <p className="text-center text-sm font-bold text-negro/40">Tamaño de la ciudad</p>
              <div className="mx-auto mt-3 grid max-w-2xl gap-3 sm:grid-cols-3">
                {CITY_SIZES.map((c, i) => (
                  <button key={c.label} type="button" onClick={() => setCityIdx(i)}
                    className={`rounded-2xl border-2 p-6 text-center transition-all ${
                      cityIdx === i ? "border-rojo bg-white shadow-xl shadow-rojo/10" : "border-transparent bg-white/60 hover:bg-white"
                    }`}>
                    <span className="text-2xl">{c.icon}</span>
                    <p className={`mt-1 font-display text-base font-extrabold ${cityIdx === i ? "text-rojo" : "text-negro"}`}>{c.label}</p>
                    <p className="text-xs text-negro/35">{c.sub}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button type="button" onClick={() => setStep(1)} className="rounded-full border-2 border-negro/8 px-6 py-3 text-sm font-bold text-negro/40 hover:text-negro">← Atrás</button>
              <button type="button" onClick={handleShowResults} disabled={cityIdx === null}
                className="group inline-flex items-center gap-2 rounded-full bg-negro px-10 py-4 font-display text-sm font-bold uppercase tracking-wide text-crema transition-all hover:bg-rojo disabled:opacity-20">
                Ver resultados <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && rubro && (
          <motion.div key="s3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-negro/5 text-2xl">{rubro.emoji}</span>
                <div>
                  <p className="font-display text-lg font-black text-negro">{rubro.label} en {displayCity}</p>
                  <p className="text-xs text-negro/40">
                    {dataSource === "google_ads" ? "📡 Datos de Google Ads" : "📊 Estimación de industria"}
                    {loading && " · Consultando Google..."}
                  </p>
                </div>
              </div>
              <button type="button" onClick={() => { setStep(1); setRealVolume(null); }}
                className="rounded-full bg-negro/5 px-4 py-2 text-xs font-bold text-negro/50 hover:bg-negro/10">Cambiar</button>
            </div>

            {/* Funnel Chart */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="grid gap-6 sm:grid-cols-[1fr_auto]">
              <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-negro/30">Embudo mensual</p>
                <div className="mt-4 h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData} layout="vertical" barCategoryGap="30%">
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 12, fontWeight: 700, fill: "#14141470" }} axisLine={false} tickLine={false} />
                      <Tooltip formatter={(v) => Number(v).toLocaleString("es-AR")} contentStyle={{ borderRadius: 12, border: "1px solid #1414140f", fontSize: 13 }} />
                      <Bar dataKey="value" radius={[0, 8, 8, 0]} animationDuration={1200} animationEasing="ease-out">
                        {funnelData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-sm sm:min-w-[200px]">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-negro/30">Conversión</p>
                <div className="h-36 w-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={60} strokeWidth={0} animationDuration={1200}>
                        {pieData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                      </Pie>
                      <Tooltip formatter={(v) => Number(v).toLocaleString("es-AR")} contentStyle={{ borderRadius: 12, border: "1px solid #1414140f", fontSize: 13 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-xs text-negro/40">
                  <strong className="text-rojo">{clients}</strong> clientes/mes van con otro
                </p>
              </div>
            </motion.div>

            {/* Conversion rates */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4">
              <CircularProgress pct={Math.round(CTR * 100)} label="CTR en Google" color="#141414" />
              <CircularProgress pct={Math.round(rubro.conversion * 100)} label="Tasa de conversión" color="#0D3FE3" />
              <CircularProgress pct={Math.round((clients / searches) * 100) || 1} label="Clientes / Búsquedas" color="#0D3FE3" />
            </motion.div>

            {/* Big revenue */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
              className="overflow-hidden rounded-3xl bg-negro text-crema">
              <div className="p-10 text-center">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-crema/30">Facturación que perdés cada mes</p>
                <p className="mt-4 font-display text-6xl font-black tracking-tight text-rojo sm:text-8xl">
                  $<AnimNum value={revMonth} />
                </p>
              </div>
              <div className="grid grid-cols-3 divide-x divide-crema/8 border-t border-crema/8">
                {[
                  { label: "Pérdida anual", value: `$${revYear.toLocaleString("es-AR")}` },
                  { label: "Clientes/mes perdidos", value: String(clients) },
                  { label: "Clientes/año perdidos", value: String(clients * 12) },
                ].map((s) => (
                  <div key={s.label} className="py-5 text-center">
                    <p className="font-display text-xl font-black text-crema sm:text-2xl">{s.value}</p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-crema/30">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comparison */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-negro/8 text-sm">✕</span>
                  <span className="font-display text-sm font-extrabold text-negro/40">Sin presencia online</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-negro/50">
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-negro/20">—</span>No aparecés en Google</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-negro/20">—</span>{searches.toLocaleString("es-AR")} personas/mes no te ven</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-negro/20">—</span>{clients} clientes eligen a otro</li>
                  <li className="flex items-start gap-2 font-bold text-rojo"><span className="mt-0.5">—</span>Perdés ${revMonth.toLocaleString("es-AR")}/mes</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rojo/20 bg-rojo/[0.03] p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rojo text-sm text-white">✓</span>
                  <span className="font-display text-sm font-extrabold text-rojo">Con presencia online</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-negro/70">
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-rojo">✓</span>Top de Google en tu zona</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-rojo">✓</span>{clicks} visitas/mes a tu web</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-rojo">✓</span>{clients} clientes nuevos/mes</li>
                  <li className="flex items-start gap-2 font-extrabold text-negro"><span className="mt-0.5 text-rojo">✓</span>+${revMonth.toLocaleString("es-AR")}/mes</li>
                </ul>
              </div>
            </motion.div>

            {/* Source */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <details className="rounded-2xl bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between font-display text-xs font-bold uppercase tracking-widest text-negro/30">
                  Metodología y fuentes
                  <span className="text-negro/20 transition-transform open:rotate-45">+</span>
                </summary>
                <div className="mt-4 space-y-1.5 text-xs text-negro/40">
                  {dataSource === "google_ads" ? (
                    <p>• Volumen de búsqueda obtenido en tiempo real desde Google Ads API para &quot;{rubro.keyword} {ciudad.trim()}&quot;.</p>
                  ) : (
                    <p>• Volúmenes basados en promedios de la industria (Google Trends + benchmarks sectoriales), ajustados por tamaño de ciudad.</p>
                  )}
                  <p>• CTR {Math.round(CTR * 100)}%: promedio posiciones 1-3 en Google (Backlinko, 2025).</p>
                  <p>• Conversión {Math.round(rubro.conversion * 100)}%: benchmark del sector (WordStream Industry Benchmarks).</p>
                  <p>• Ticket ${rubro.ticketAvg.toLocaleString("es-AR")}: estimación conservadora para Argentina.</p>
                  <p>• Para datos exactos, verificar con Google Keyword Planner.</p>
                </div>
              </details>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
              className="rounded-3xl bg-rojo p-8 text-center text-crema sm:p-12">
              <p className="font-display text-3xl font-black tracking-tight sm:text-5xl">
                Dejá de regalarle<br />clientes a otro.
              </p>
              <p className="mx-auto mt-4 max-w-md text-crema/60">
                Web profesional + Google en 3 días. Primera demo gratis.
              </p>
              <a
                href={whatsappLink(`Hola! Usé la calculadora y vi que como ${rubro.label.toLowerCase()} en ${displayCity} podría estar perdiendo $${revMonth.toLocaleString("es-AR")}/mes. Quiero mi demo gratis.`)}
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("calculator-cta")}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-crema px-10 py-5 font-display text-sm font-bold uppercase tracking-wide text-negro transition-all hover:bg-white hover:shadow-xl"
              >
                Quiero mi demo gratis
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="mt-4 text-xs text-crema/30">Sin tarjeta · Sin compromiso · Entrega en 3 días</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
