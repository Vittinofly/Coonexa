const SHEET_NAME = "Contatos";
const SPREADSHEET_PROPERTY = "COONEXA_SPREADSHEET_ID";
const SECRET_PROPERTY = "COONEXA_API_SECRET";
const HEADERS = [
  "Data do envio (Brasília)",
  "Nome",
  "E-mail",
  "WhatsApp",
  "Serviço",
  "Mensagem",
  "Autorização"
];

function setupCoonexaSheet() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(SPREADSHEET_PROPERTY);
  const spreadsheet = savedId
    ? SpreadsheetApp.openById(savedId)
    : SpreadsheetApp.create("Coonexa - Contatos");
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  spreadsheet.setSpreadsheetTimeZone("America/Sao_Paulo");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.getRange("A:A").setNumberFormat("dd/MM/yyyy HH:mm:ss");
    sheet.setColumnWidth(1, 175);
    sheet.setColumnWidth(2, 180);
    sheet.setColumnWidth(3, 230);
    sheet.setColumnWidth(4, 150);
    sheet.setColumnWidth(5, 220);
    sheet.setColumnWidth(6, 500);
    sheet.setColumnWidth(7, 130);
  }

  properties.setProperty(SPREADSHEET_PROPERTY, spreadsheet.getId());
  console.log(`Planilha de contatos pronta: ${spreadsheet.getUrl()}`);
}

function doPost(event) {
  try {
    const request = JSON.parse(event.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty(SECRET_PROPERTY);

    if (!expectedSecret || request.secret !== expectedSecret) {
      return jsonOutput({ ok: false, error: "Unauthorized" });
    }

    const submission = request.submission || {};
    const name = cleanField(submission.name, 100);
    const email = cleanField(submission.email, 254);
    const whatsapp = cleanField(submission.whatsapp, 25);
    const service = cleanField(submission.service, 120);
    const message = cleanField(submission.message, 2000);

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || submission.consent !== true) {
      return jsonOutput({ ok: false, error: "Invalid submission" });
    }

    const spreadsheetId = properties.getProperty(SPREADSHEET_PROPERTY);
    if (!spreadsheetId) {
      return jsonOutput({ ok: false, error: "Spreadsheet is not configured" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(SHEET_NAME);
      if (!sheet) {
        return jsonOutput({ ok: false, error: "Contacts sheet is missing" });
      }

      sheet.appendRow([
        new Date(),
        safeCell(name),
        safeCell(email),
        safeCell(whatsapp),
        safeCell(service),
        safeCell(message),
        "Sim"
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonOutput({ ok: true });
  } catch (error) {
    console.error("Failed to save a Coonexa contact submission.", error);
    return jsonOutput({ ok: false, error: "Could not save submission" });
  }
}

function cleanField(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function jsonOutput(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
