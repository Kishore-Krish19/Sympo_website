// ../backend/Code.gs
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // safer than tryLock

  try {
    var data = JSON.parse(e.postData.contents);

    var sheetName = data.sheetName;
    var eventType = data.eventType || "Unknown";
    var eventName = data.eventName || "General";
    //https://docs.google.com/spreadsheets/d/1Klmy77PJ2ACJy4oxs-BCSsqM-PC07W1BQf1Ysw1KPpE/edit?usp=sharing
    // ✅ ALWAYS use openById for Web Apps
    var SPREADSHEET_ID = "1Klmy77PJ2ACJy4oxs-BCSsqM-PC07W1BQf1Ysw1KPpE";
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    // ===============================
    // 🛡️ VALIDATION RULES
    // ===============================
    
    // 1️⃣ TECH EVENT VALIDATION
    if (data.type === "tech") {
      var size = Number(data.teamSize);
      
      // RULE: Team Size 1
      if (size === 1) {
        if (data.nonTechEvent && data.nonTechEvent !== "") {
          throw new Error("Solo participants cannot register for a Non-Tech event (only for teams of 2 or 3).");
        }
        // OK to have optionalWorkshop (Game Dev or ECU)
        if (data.optionalWorkshop) {
          if (data.optionalWorkshop.toLowerCase().indexOf("drone") !== -1 || data.optionalWorkshop.toLowerCase().indexOf("uav") !== -1) {
             throw new Error("Drone Workshop is not available as an add-on.");
          }
        }
      }
      
      // RULE: Team Size > 1
      if (size > 1) {
        if (data.optionalWorkshop && data.optionalWorkshop !== "") {
          throw new Error("Workshop add-on is only available for Solo participants.");
        }
        // OK to have nonTechEvent
      }
    }

    // 2️⃣ WORKSHOP AMOUNT VALIDATION
    if (data.type === "workshop") {
      var size = Number(data.teamSize);
      var expectedAmount = 0;

      if (eventName.toLowerCase().indexOf("drone") !== -1 || eventName.toLowerCase().indexOf("uav") !== -1) {
        expectedAmount = 500 * size;
      } else {
        // Game Dev or ECU (Updated to 300)
        expectedAmount = 300 * size;
      }
      
      // If data.amount is provided, validate it. 
      // Note: Front-end sends amount, but sometimes it might be string or number.
      if (data.amount && Number(data.amount) !== expectedAmount) {
         throw new Error("Invalid workshop amount. Expected: " + expectedAmount + ", Received: " + data.amount);
      }
    }


    // ===============================
    // 1️⃣ MAIN REGISTRATION SHEET
    // ===============================
    var sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow([
        "Timestamp",
        "Team Name",
        "Event Name",
        "Leader",
        "College",
        "Dept",
        "Year",
        "Phone Number",
        "WhatsApp Number",
        "Email",
        "Total Members",
        "Additional Members",
        "Transaction ID",
        "Screenshot URL"
      ]);
    }
    //https://drive.google.com/drive/folders/1DGvhTEbW_8rUBUIXc5dNbwaiheXAP3Fp?usp=sharing
    // ===============================
    // 2️⃣ PAYMENT SCREENSHOT UPLOAD
    // ===============================
    var fileUrl = "";

    if (data.paymentScreenshot) {

      // ===============================
      // 📁 DRIVE FOLDER STRUCTURE
      // ===============================
      var ROOT_FOLDER_ID = "1DGvhTEbW_8rUBUIXc5dNbwaiheXAP3Fp";
      var rootFolder = DriveApp.getFolderById(ROOT_FOLDER_ID);

      // 1️⃣ Decide parent folder from `type`
      var parentFolderName;

      switch (data.type) {
        case "tech":
          parentFolderName = "Tech";
          break;
        case "non-tech":
          parentFolderName = "Non-Tech";
          break;
        case "workshop":
          parentFolderName = "Workshop";
          break;
        case "ev":
          parentFolderName = "EV Racing";
          break;
        default:
          parentFolderName = "Others";
      }

      // 2️⃣ Get or create parent folder
      var parentFolder;
      var parentFolders = rootFolder.getFoldersByName(parentFolderName);

      if (parentFolders.hasNext()) {
        parentFolder = parentFolders.next();
      } else {
        parentFolder = rootFolder.createFolder(parentFolderName);
      }

      // 3️⃣ Event subfolder (CAD Design, Quiz, etc.)
      var eventFolder;
      var eventFolders = parentFolder.getFoldersByName(eventName);

      if (eventFolders.hasNext()) {
        eventFolder = eventFolders.next();
      } else {
        eventFolder = parentFolder.createFolder(eventName);
      }

      // ===============================
      // 3️⃣ Extract & Validate MIME Type
      // ===============================
      var contentType = data.paymentScreenshot.substring(
        5,
        data.paymentScreenshot.indexOf(";")
      );

      if (!data.phoneNumber || !data.whatsappNumber) {
        throw new Error("Phone number and WhatsApp number are required");
      }

      var allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
      if (!allowedTypes.includes(contentType)) {
        throw new Error("Only image files (PNG, JPG, JPEG, WEBP) are allowed");
      }

      // ===============================
      // 4️⃣ Decode Base64 & Upload
      // ===============================
      var base64 = data.paymentScreenshot.substring(
        data.paymentScreenshot.indexOf(",") + 1
      );

      var safeTeamName = data.teamName.replace(/\s+/g, "_");
      var safeEventName = eventName.replace(/\s+/g, "_");

      var fileName =
        safeTeamName + "_" + safeEventName + "_payment.png";

      var blob = Utilities.newBlob(
        Utilities.base64Decode(base64),
        contentType,
        fileName
      );

      var file = eventFolder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    // ===============================
    // 3️⃣ APPEND MAIN DATA
    // ===============================
    sheet.appendRow([
      new Date(),
      data.teamName,
      eventName,
      data.teamLeaderName,
      data.collegeName,
      data.department,
      data.yearOfStudy,
      data.phoneNumber,
      data.whatsappNumber,
      data.email,
      data.teamSize,
      (data.teamMembers || []).join(", "),
      data.transactionId,
      fileUrl
    ]);

    // ===============================
    // 🔁 OPTIONAL NON-TECH REGISTRATION
    // ===============================
    if (data.nonTechEvent && data.nonTechEvent !== "") {

      var nonTechSheetName = "Non-Tech-Free";
      var nonTechSheet = ss.getSheetByName(nonTechSheetName);

      if (!nonTechSheet) {
        nonTechSheet = ss.insertSheet(nonTechSheetName);
        nonTechSheet.appendRow([
          "Timestamp",
          "Team Name",
          "Non-Tech Event Name",
          "Leader",
          "College",
          "Dept",
          "Year",
          "Phone Number",
          "WhatsApp Number",
          "Email"
        ]);
      }

      // 🚫 DUPLICATE CHECK (Team + Event)
      var existingData = nonTechSheet.getDataRange().getValues();

      for (var i = 1; i < existingData.length; i++) {
        var existingTeam = existingData[i][1];   // Team Name
        var existingEvent = existingData[i][2];  // Non-Tech Event Name

        if (
          existingTeam === data.teamName &&
          existingEvent === data.nonTechEvent
        ) {
          throw new Error(
            "This team has already registered for the selected non-technical event"
          );
        }
      }
      // ✅ SAFE TO INSERT
      nonTechSheet.appendRow([
        new Date(),
        data.teamName,
        data.nonTechEvent,
        data.teamLeaderName,
        data.collegeName,
        data.department,
        data.yearOfStudy,
        data.phoneNumber,
        data.whatsappNumber,
        data.email
      ]);
    }

    // ===============================
    // 🔁 OPTIONAL WORKSHOP (TECH ADD-ON)
    // ===============================
    if (data.optionalWorkshop && data.optionalWorkshop !== "") {

      var workshopSheetName = "Workshop_Registrations";
      var workshopSheet = ss.getSheetByName(workshopSheetName);

      if (!workshopSheet) {
        workshopSheet = ss.insertSheet(workshopSheetName);
        workshopSheet.appendRow([
          "Timestamp",
          "Team Name",
          "Event Name",
          "Leader",
          "College",
          "Dept",
          "Year",
          "Phone Number",
          "WhatsApp Number",
          "Email",
          "Total Members",
          "Additional Members",
          "Transaction ID",
          "Screenshot URL"
        ]);
      }

      // 🚫 DUPLICATE CHECK (Team + Event)
      var existingData = workshopSheet.getDataRange().getValues();

      for (var i = 1; i < existingData.length; i++) {
        var existingTeam = existingData[i][1];   // Team Name
        var existingEvent = existingData[i][2];  // Event Name

        if (
          existingTeam === data.teamName &&
          existingEvent === data.optionalWorkshop
        ) {
           throw new Error(
             "This team has already registered for the selected workshop: " + data.optionalWorkshop
           );
        }
      }
      
      // ✅ SAFE TO INSERT
      workshopSheet.appendRow([
        new Date(),
        data.teamName,
        data.optionalWorkshop, // Event Name
        data.teamLeaderName,
        data.collegeName,
        data.department,
        data.yearOfStudy,
        data.phoneNumber,
        data.whatsappNumber,
        data.email,
        data.teamSize,
        (data.teamMembers || []).join(", "),
        data.transactionId,
        fileUrl
      ]);
    }

    // ===============================
    // 4️⃣ FOOD COUNT SHEET
    // ===============================
    var foodSheetName = "Food Count";
    var foodSheet = ss.getSheetByName(foodSheetName);

    if (!foodSheet) {
      foodSheet = ss.insertSheet(foodSheetName);
      foodSheet.appendRow([
        "Team Name",
        "Event Type",
        "Event Name",
        "Total Team Members",
        "Veg Count",
        "Non-Veg Count"
      ]);
    }

    // ✅ Backend validation (IMPORTANT)
    var veg = Number(data.vegCount);
    var nonVeg = Number(data.nonVegCount);
    var total = Number(data.teamSize);

    if (veg + nonVeg !== total) {
      throw new Error("Food count mismatch");
    }

    foodSheet.appendRow([
      data.teamName,
      eventType,
      eventName,
      total,
      veg,
      nonVeg
    ]);

    // ===============================
    // 📧 SEND CONFIRMATION EMAIL
    // ===============================
    var eventTypeLabel = "";

    switch (data.type) {
      case "tech":
        eventTypeLabel = "Technical Event";
        break;
      case "non-tech":
        eventTypeLabel = "Non-Technical Event";
        break;
      case "workshop":
        eventTypeLabel = "Workshop";
        break;
      case "ev":
        eventTypeLabel = "EV Racing";
        break;
      default:
        eventTypeLabel = "Event";
    }

    var subject = "EFFICACY Registration Confirmation – " + eventTypeLabel;

    var message =
      "Hello " + data.teamLeaderName + ",\n\n" +
      "Your registration for EFFICACY has been successfully completed.\n\n" +
      "📌 Event Category: " + eventTypeLabel + "\n" +
      "📌 Event Name: " + data.eventName + "\n";

    if (data.nonTechEvent && data.nonTechEvent !== "") {
      message += "📌 Additional Non-Technical Event: " + data.nonTechEvent + " (Free)\n";
    }

    if (data.optionalWorkshop && data.optionalWorkshop !== "") {
       message += "📌 Additional Workshop (Tech Add-on): " + data.optionalWorkshop + " (₹50)\n";
    }

    if (data.type === "workshop") {
       message += "📌 Workshop Fee: ₹" + (data.amount || "0") + "\n";
    }

    message +=
      "\n👥 Team Name: " + data.teamName +
      "\n👤 Total Members: " + data.teamSize +
      "\n Transaction ID :" + data.transactionId +
      "\n Screenshot link :" + fileUrl +
      "\n\n📢 Important:\n" +
      "WhatsApp group link :\n" +
      "Tech: https://chat.whatsapp.com/B6QRLt0JFJqEyg76ScTXY6?mode=gi_t \n" +
      "Non-Tech : https://chat.whatsapp.com/HKLWX6wkgzuI8ysfjXZxqC?mode=gi_t \n" +
      "Contact:\n" +
      "Name: Venkataprasath R (Coordinator)\n" +
      "Phone: 7010591904 \n\n" +
      "Regards,\n" +
      "Team EFFICACY";

    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      body: message
    });

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        type: data.type,
        eventType: data.eventType,
        eventName: data.eventName,
        nonTechEvent: data.nonTechEvent || ""
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
