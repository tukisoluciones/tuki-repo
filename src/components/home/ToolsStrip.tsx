import RevealOnScroll from "@/components/shared/RevealOnScroll";
import {
  GoogleIcon,
  MetaIcon,
  N8nIcon,
  NextjsIcon,
  ShopifyIcon,
  WhatsAppIcon,
} from "./tool-icons";

const TOOLS = [
  { name: "Google", Icon: GoogleIcon },
  { name: "Meta Ads", Icon: MetaIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "Shopify", Icon: ShopifyIcon },
  { name: "n8n", Icon: N8nIcon },
  { name: "WhatsApp", Icon: WhatsAppIcon },
] as const;

export default function ToolsStrip() {
  return (
    <section className="bg-negro px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-sm font-bold uppercase tracking-[0.25em] text-crema/40">
          Trabajamos con
        </p>

        <RevealOnScroll
          stagger={0.06}
          className="mt-10 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-6"
        >
          {TOOLS.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 text-crema/50 transition-colors hover:text-rojo"
            >
              <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
              <span className="font-display text-xs font-semibold uppercase tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
