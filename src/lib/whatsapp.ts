import { SITE } from "./content";

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola! Vi la web de Tuki y quiero pedir mi demo gratis.";
