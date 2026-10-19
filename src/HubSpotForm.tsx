import { useEffect, useRef, useState } from "react";
import { trackEvent } from "./analytics";

type HubSpotFormOptions = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
  onFormSubmitted: () => void;
};

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: HubSpotFormOptions) => void;
      };
    };
  }
}

let hubSpotScriptPromise: Promise<void> | undefined;

function loadHubSpotScript() {
  if (window.hbspt?.forms) return Promise.resolve();

  if (!hubSpotScriptPromise) {
    hubSpotScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        hubSpotScriptPromise = undefined;
        reject(new Error("No se pudo cargar el formulario de HubSpot."));
      };
      document.body.appendChild(script);
    });
  }

  return hubSpotScriptPromise;
}

export function HubSpotForm() {
  const formTarget = useRef<HTMLDivElement>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    loadHubSpotScript()
      .then(() => {
        if (!isMounted) return;
        if (!window.hbspt?.forms) throw new Error("HubSpot no está disponible.");

        window.hbspt.forms.create({
          portalId: "52189384",
          formId: "b812e6ad-49da-4278-8ef6-7026f16a4655",
          region: "na1",
          target: "#hubspot-form",
          onFormSubmitted: () => {
            trackEvent("envio_formulario", { form_id: "b812e6ad-49da-4278-8ef6-7026f16a4655" });
          },
        });
      })
      .catch(() => {
        if (isMounted) setLoadFailed(true);
      });

    return () => {
      isMounted = false;
      formTarget.current?.replaceChildren();
    };
  }, []);

  return (
    <>
      <div id="hubspot-form" ref={formTarget} />
      {loadFailed && (
        <p className="mt-4 text-center text-sm text-[#7a3030]" role="alert">
          No pudimos cargar el formulario. Recarga la página para intentarlo de nuevo.
        </p>
      )}
    </>
  );
}