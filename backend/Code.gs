// THIS IS THE GOOGLE APPS SCRIPT CODE.
// COPY PASTE THIS INTO YOUR GOOGLE SHEETS > EXTENSIONS > APPS SCRIPT

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse(e.postData.contents);
    var sheetName = data.sheetName;
    var eventType = data.eventType || "Unknown"; 
    var eventName = data.eventName || "General";
    
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // 1. Handle Main Registration Sheet
    // Updated header to remove Phone and add Transaction ID
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow([
        "Timestamp", "Team Name", "Event Name", "Leader", "College", "Dept", "Year", 
        "WhatsApp", "Email", "Total Members", "Additional Members", 
        "Transaction ID", "Screenshot URL"
      ]);
    }

    // Handle Image Upload (Base64)
    var fileUrl = "";
    if (data.paymentScreenshot) {
      var folderName = "Symposium_Uploads";
      var folder;
      var folders = DriveApp.getFoldersByName(folderName);
      
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }
      
      // Basic Base64 parsing
      var contentType = data.paymentScreenshot.substring(5, data.paymentScreenshot.indexOf(';'));
      var base64 = data.paymentScreenshot.substring(data.paymentScreenshot.indexOf(',') + 1);
      var blob = Utilities.newBlob(Utilities.base64Decode(base64), contentType, data.teamName + "_" + eventName + "_payment.png");
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    // Append Data to Main Sheet
    sheet.appendRow([
      new Date(),
      data.teamName,
      eventName, // Event Name in same row
      data.teamLeaderName,
      data.collegeName,
      data.department,
      data.yearOfStudy,
      "'"+data.whatsappNumber, // Force string
      data.email,
      data.teamSize,
      data.teamMembers.join(", "),
      data.transactionId, // New Transaction ID field
      fileUrl
    ]);

    // 2. Handle Separate Food Count Sheet
    var foodSheetName = "Food Count";
    var foodSheet = ss.getSheetByName(foodSheetName);
    
    if(!foodSheet) {
       foodSheet = ss.insertSheet(foodSheetName);
       // Header as requested
       foodSheet.appendRow(["Team Name", "Event Type", "Event Name", "Total Team Members", "Veg Count", "Non-Veg Count"]);
    }
    
    if (vegCount + nonVegCount !== totalMembers) {
        throw new Error("Food count mismatch");
    }

    // Append Food Data
    // Validation (Veg + NonVeg == Total) is handled on Frontend, but we log whatever is sent.
    foodSheet.appendRow([
      data.teamName, 
      eventType, 
      eventName, 
      data.teamSize,
      data.vegCount, 
      data.nonVegCount
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}