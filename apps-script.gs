// 260908 교사교육 실습지 — 제출 받기
// 시트: 260908_교사교육_실습지_제출_집계
var SHEET_ID = '1hbi2oj9ATHwBt9VAHkaVC5TgVjwom8YmMyGYBG4iCsk';

function doPost(e) {
  var d = (e && e.parameter) ? e.parameter : {};
  var sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sh.appendRow([
    new Date(),
    d.name || '', d.branch || '',
    d.q1a || '', d.q1b || '', d.sig || '', d.q1c || '',
    d.q2a || '', d.q2b || '', d.q2c || '',
    d.cs || '', d.q3a || '', d.q3b || '', d.q3c || '', d.q3d || '', d.q3e || '',
    d.std || '',
    d.act || '', d.q5a || '',
    d.star || '', d.good || '', d.rev || '', d.rev2 || '', d.agree || ''
  ]);
  return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
}
