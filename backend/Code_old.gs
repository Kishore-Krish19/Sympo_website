// ../backend/Code_old.gs
function doPost(e) {
  try {
    Logger.log("POST DATA: " + e.postData.contents);

    const data = JSON.parse(e.postData.contents);

    Logger.log("PARSED DATA OK");

    // const data = JSON.parse(e.postData.contents);

    const base64Image = data.paymentScreenshot;
    const fileName = data.paymentFileName || "payment.png";

    delete data.paymentScreenshot;
    delete data.paymentFileName;

    // ---- SAVE IMAGE TO DRIVE ----
    const folder = DriveApp.getFolderById("1NVKjHXiQwurM6Jvc6I8xbs6gFFGHupb0");

    const imageBlob = Utilities.newBlob(
      Utilities.base64Decode(
        base64Image.split(",")[1]
      ),
      "image/png",
      fileName
    );

    const file = folder.createFile(imageBlob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const fileUrl = file.getUrl();

    // ---- SAVE DATA TO SHEET ----
    const sheetName = data.sheetName || "Other";
    delete data.sheetName;

    data.paymentLink = fileUrl;
    data.submittedAt = new Date().toISOString();

    const ss = SpreadsheetApp.openById("1FnxGe2u7XVIgo7bDZzcnO_g9Fwro8qYmbp4hE5Q5eVg");
    let sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(Object.keys(data));
    }

    sheet.appendRow(Object.values(data));

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", fileUrl })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/* CORS */
function doOptions() {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON);
}
