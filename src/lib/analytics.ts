type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: EventParams) => void;
  }
}

/** Envia um evento ao Google Analytics (GA4). Sem GA carregado, não faz nada. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
