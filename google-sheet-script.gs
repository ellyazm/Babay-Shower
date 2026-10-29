// Paste this into Extensions > Apps Script inside your Google Sheet.
// It adds one row (time, name, amount) every time a guest sends the gift card form.
function doPost(e) {
  var p = (e && e.parameter) || {};
  var name = String(p.name || '').trim().slice(0, 100);
  var amount = String(p.amount || '').trim();
  if (!name || ['50', '100', '200'].indexOf(amount) === -1) {
    return ContentService.createTextOutput('ignored');
  }
  SpreadsheetApp.getActiveSheet().appendRow([new Date(), name, Number(amount)]);
  return ContentService.createTextOutput('ok');
}
