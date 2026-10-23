"use strict";

(() => {
  const config = window.COONEXA_ANALYTICS_CONFIG;
  const consentPanel = document.querySelector("[data-analytics-consent]");
  const acceptButton = document.querySelector("[data-analytics-accept]");
  const declineButton = document.querySelector("[data-analytics-decline]");
  const resetButton = document.querySelector("[data-reset-analytics-consent]");
  const consentKey = "coonexa-analytics-consent";
  const validMeasurementId = /^G-[A-Z0-9]+$/;

  if (!consentPanel || !config || !validMeasurementId.test(config.measurementId)) return;

  window[`ga-disable-${config.measurementId}`] = true;
  let consent = null;
  let analyticsLoaded = false;

  const readConsent = () => {
    try {
      const savedConsent = window.localStorage.getItem(consentKey);
      return savedConsent === "accepted" || savedConsent === "declined" ? savedConsent : null;
    } catch (error) {
      console.warn("Não foi possível recuperar a preferência de analytics; a escolha valerá apenas nesta visita.", error);
      return null;
    }
  };

  const saveConsent = (value) => {
    consent = value;
    try {
      window.localStorage.setItem(consentKey, value);
    } catch (error) {
      console.warn("Não foi possível salvar a preferência de analytics; a escolha valerá apenas nesta visita.", error);
    }
    consentPanel.hidden = true;
    if (value === "accepted") {
      window[`ga-disable-${config.measurementId}`] = false;
      loadAnalytics();
    }
    else if (analyticsLoaded && typeof window.gtag === "function") {
      window[`ga-disable-${config.measurementId}`] = true;
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
  };

  const loadAnalytics = () => {
    if (analyticsLoaded || consent !== "accepted") return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", config.measurementId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.measurementId)}`;
    script.onerror = () => {
      analyticsLoaded = false;
      console.error("Não foi possível carregar o Google Analytics.");
    };
    document.head.append(script);
  };

  consent = readConsent();
  if (consent === "accepted") loadAnalytics();
  else if (!consent) consentPanel.hidden = false;

  acceptButton?.addEventListener("click", () => saveConsent("accepted"));
  declineButton?.addEventListener("click", () => saveConsent("declined"));
  resetButton?.addEventListener("click", () => {
    consent = null;
    try {
      window.localStorage.removeItem(consentKey);
    } catch (error) {
      console.warn("Não foi possível remover a preferência salva; a nova escolha valerá apenas nesta visita.", error);
    }
    if (analyticsLoaded && typeof window.gtag === "function") {
      window[`ga-disable-${config.measurementId}`] = true;
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    consentPanel.hidden = false;
    consentPanel.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  document.addEventListener("click", (event) => {
    if (consent !== "accepted" || typeof window.gtag !== "function") return;
    const link = event.target instanceof Element ? event.target.closest('a[href^="https://wa.me/"]') : null;
    if (!link) return;
    window.gtag("event", "whatsapp_click", {
      link_url: link.href,
      transport_type: "beacon"
    });
  });

  document.addEventListener("coonexa:lead-submitted", () => {
    if (consent === "accepted" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        method: "contact_form",
        transport_type: "beacon"
      });
    }
  });
})();
