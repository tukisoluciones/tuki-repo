"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";
import { scrollToTop } from "@/components/shared/SmoothScrollProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-negro text-crema">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo-white.png"
              alt="Tuki"
              width={532}
              height={228}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm font-display text-2xl font-extrabold tracking-tight">
              {SITE.slogan}
            </p>
            <p className="mt-3 max-w-sm text-sm text-crema/60">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-crema/40">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === link.href) {
                        e.preventDefault();
                        scrollToTop();
                      }
                    }}
                    className="text-sm text-crema/80 transition-colors hover:text-rojo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-crema/40">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-crema/80">
              <li>
                <a
                  href={whatsappLink("Hola! Quiero ponerme en contacto con Tuki.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rojo"
                >
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-rojo"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rojo"
                >
                  {SITE.instagramHandle}
                </a>
              </li>
              <li className="text-crema/50">{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-crema/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tuki. Todos los derechos reservados.</p>
          <p>Bahía Blanca, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
