import RevealOnScroll from "@/components/shared/RevealOnScroll";
import TiltCard from "@/components/shared/TiltCard";
import { GoogleWordmark, MetaLogo } from "./brand-icons";

const phoneFrame =
  "w-[230px] overflow-hidden rounded-[2rem] border-[6px] border-negro bg-white shadow-2xl shadow-black/20 sm:w-[260px]";

export default function TrustPhones() {
  return (
    <section className="overflow-hidden bg-crema px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-rojo">
            Presencia digital
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Que te encuentren en Google y en Instagram.
          </h2>
          <p className="mt-4 text-base text-negro/70 sm:text-lg">
            Trabajamos con Google y Meta para que tu negocio aparezca cuando
            alguien busca lo que vendés — y para que tus campañas de
            publicidad lleguen a la gente correcta.
          </p>
        </div>

        <RevealOnScroll
          stagger={0.15}
          className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0"
        >
          {/* Google search phone */}
          <div className="rotate-0 sm:-rotate-6 sm:translate-x-6">
          <TiltCard
            className={phoneFrame}
            options={{ max: 6, scale: 1.02 }}
          >
            <div className="relative flex aspect-[9/19] flex-col bg-white">
              <div
                className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-negro"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2 border-b border-negro/5 px-4 pt-9 pb-3">
                <span className="text-[11px]">🔒</span>
                <span className="truncate text-[11px] text-negro/40">
                  google.com
                </span>
              </div>

              <div className="px-4 pt-4">
                <GoogleWordmark className="text-lg" />
                <div className="mt-3 flex items-center gap-2 rounded-full border border-negro/10 px-3 py-2">
                  <span className="text-xs">🔎</span>
                  <span className="truncate text-xs text-negro/60">
                    diseño web bahía blanca
                  </span>
                </div>
              </div>

              <div className="mt-5 flex-1 space-y-1 px-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-negro font-display text-[9px] font-bold text-crema">
                    HL
                  </span>
                  <span className="text-[10px] text-negro/40">
                    horaslibres.site
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#1a0dab]">
                  Tuki — Agencia digital en Bahía Blanca
                </p>
                <p className="text-[11px] text-rojo">
                  ★★★★★ · Bahía Blanca, Argentina
                </p>
                <p className="text-[11px] leading-snug text-negro/50">
                  Sitios web, turnos online y software a medida para que tu
                  negocio funcione sin que estés encima de todo.
                </p>
              </div>
            </div>
          </TiltCard>
          </div>

          {/* Instagram / Meta phone */}
          <div className="z-10 rotate-0 sm:rotate-3 sm:-translate-x-6">
          <TiltCard
            className={phoneFrame}
            options={{ max: 6, scale: 1.02 }}
          >
            <div className="relative flex aspect-[9/19] flex-col bg-white">
              <div
                className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-negro"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between border-b border-negro/5 px-4 pt-9 pb-3">
                <span className="font-display text-sm font-bold text-negro">
                  Instagram
                </span>
                <MetaLogo />
              </div>

              <div className="px-4 pt-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-negro font-display text-[10px] font-bold text-rojo">
                    HL
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-negro">
                      horaslibres
                    </p>
                    <p className="text-[10px] text-negro/40">Publicidad</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-1 flex-col">
                <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-negro px-4 text-center text-crema">
                  <span className="font-display text-3xl font-black tracking-tight">
                    HL
                  </span>
                  <p className="font-display text-sm font-bold uppercase tracking-wide">
                    Pedí tu demo gratis
                  </p>
                  <p className="text-[11px] text-crema/60">
                    Tu negocio, online en días.
                  </p>
                </div>
                <div className="space-y-1 px-4 py-3">
                  <button className="w-full rounded-lg bg-negro/5 py-2 text-xs font-semibold text-negro">
                    Más información
                  </button>
                  <p className="text-[11px] text-negro/40">
                    ❤️ 128 · 💬 12 · ↗️ Compartir
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
