type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<{ event: string } & AnalyticsParams>;
  }
}

export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const dataLayer = window.dataLayer ?? (window.dataLayer = []);
  dataLayer.push({ event, ...params });
}