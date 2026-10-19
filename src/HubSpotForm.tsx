import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt?: any;
    dataLayer?: any[];
  }
}

export function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      window.hbspt?.forms.create({
        portalId: '52189384',
        formId: 'b812e6ad-49da-4278-8ef6-7026f16a4655',
        region: 'na1',
        target: '#hubspot-form',
        onFormSubmitted: () => {
          // Dispara el evento personalizado para Google Tag Manager / GA4
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'envio_formulario' });
        },
      });
    };
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <div id="hubspot-form" />;
}