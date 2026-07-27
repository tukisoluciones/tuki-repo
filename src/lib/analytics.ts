declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
) {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", "conversion", source);
}
