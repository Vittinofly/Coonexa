const responseHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

const jsonResponse = (statusCode, body) => new Response(JSON.stringify(body), {
  status: statusCode,
  headers: responseHeaders
});

const cleanText = (value, limit) => (
  typeof value === "string" ? value.trim().slice(0, limit) : ""
);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async (request) => {
  if (request.method !== "POST") {
    return jsonResponse(405, { ok: false, message: "Método não permitido." });
  }

  const expectedOrigin = process.env.COONEXA_SITE_ORIGIN || "https://coonexa.netlify.app";
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin !== expectedOrigin) {
    return jsonResponse(403, { ok: false, message: "Origem não autorizada. Atualize a página e tente novamente." });
  }

  const sheetEndpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  const sharedSecret = process.env.GOOGLE_SHEETS_API_SECRET;
  if (!sheetEndpoint || !sharedSecret) {
    return jsonResponse(503, {
      ok: false,
      message: "A integração com a planilha ainda não foi configurada. Tente novamente mais tarde."
    });
  }

  if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(sheetEndpoint)) {
    console.error("GOOGLE_SHEETS_WEB_APP_URL must be a Google Apps Script web app URL.");
    return jsonResponse(503, { ok: false, message: "A integração com a planilha está configurada incorretamente." });
  }

  let data;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12_000) {
      return jsonResponse(413, { ok: false, message: "A mensagem excede o tamanho permitido." });
    }
    data = JSON.parse(rawBody);
  } catch {
    return jsonResponse(400, { ok: false, message: "Não foi possível ler os dados enviados. Revise o formulário e tente novamente." });
  }

  if (cleanText(data["campo-filtro"], 200)) {
    return jsonResponse(400, { ok: false, message: "O envio não foi aceito. Revise o formulário e tente novamente." });
  }

  const submission = {
    name: cleanText(data.nome, 100),
    email: cleanText(data.email, 254),
    whatsapp: cleanText(data.whatsapp, 25),
    service: cleanText(data.servico, 120),
    message: cleanText(data.mensagem, 2000),
    consent: data.consentimento === "aceito"
  };

  if (!submission.name || !isValidEmail(submission.email) || !submission.message || !submission.consent) {
    return jsonResponse(400, { ok: false, message: "Confira seu nome, e-mail, mensagem e autorização de uso dos dados." });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);
    let sheetResponse;
    try {
      sheetResponse = await fetch(sheetEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: sharedSecret, submission }),
        signal: controller.signal,
        redirect: "follow"
      });
    } finally {
      clearTimeout(timeout);
    }

    const result = await sheetResponse.json().catch(() => null);
    if (!sheetResponse.ok || result?.ok !== true) {
      console.error("Google Sheets rejected a contact form submission.", {
        status: sheetResponse.status,
        error: result?.error || "Unexpected response"
      });
      return jsonResponse(502, { ok: false, message: "Não foi possível salvar na planilha. Tente novamente ou use o envio alternativo." });
    }

    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error("Google Sheets integration request failed.", error);
    return jsonResponse(502, { ok: false, message: "Não foi possível conectar à planilha. Tente novamente ou use o envio alternativo." });
  }
};
