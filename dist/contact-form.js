"use strict";

(() => {
  const form = document.querySelector("form[data-netlify='true']");
  const status = document.querySelector("[data-form-status]");
  const fallbackButton = document.querySelector("[data-netlify-fallback]");

  if (!form || !status || !fallbackButton) return;

  const submitButton = form.querySelector("button[type='submit']");
  const initialButtonText = submitButton?.textContent?.trim() || "Enviar solicitação";

  const showStatus = (message, isError = false) => {
    status.textContent = message;
    status.hidden = false;
    status.classList.toggle("is-error", isError);
  };

  fallbackButton.textContent = "Tentar envio alternativo pelo Netlify";
  fallbackButton.addEventListener("click", () => {
    fallbackButton.disabled = true;
    showStatus("Enviando pelo formulário alternativo do Netlify...");
    HTMLFormElement.prototype.submit.call(form);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    fallbackButton.hidden = true;
    showStatus("Enviando sua mensagem...");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
      submitButton.textContent = "Enviando...";
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/.netlify/functions/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Não foi possível registrar sua mensagem agora.");
      }

      document.dispatchEvent(new CustomEvent("coonexa:lead-submitted"));
      window.location.assign("/obrigado/");
    } catch (error) {
      console.error("Falha ao enviar o formulário de contato.", error);
      showStatus(`${error.message} Você pode tentar o envio alternativo.`, true);
      fallbackButton.hidden = false;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
        submitButton.textContent = initialButtonText;
      }
    }
  });
})();
