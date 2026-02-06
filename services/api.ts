// ../services/api.ts
import axios from "axios";
import { RegistrationForm } from "../types";

export const submitRegistration = async (
  category: string,
  data: RegistrationForm
) => {
  let sheetName = "";

  switch (category) {
    case "tech":
      sheetName = "Tech_Registrations";
      break;
    case "non-tech":
      sheetName = "NonTech_Registrations";
      break;
    case "workshop":
      sheetName = "Workshop_Registrations";
      break;
    case "ev":
      sheetName = "EV_Registrations";
      break;
  }

  const payload = {
    sheetName,
    eventType: data.type,
    ...data,
    submittedAt: new Date().toISOString()
  };

  try {
    const res = await axios.post(
      import.meta.env.VITE_GOOGLE_SCRIPT_URL,
      payload,
      {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );
    // console.log("RAW GAS RESPONSE 👉", res.data);
    return {
      success: res.data?.result === "success",
      message: "Registration successful!"
      // message: JSON.stringify(res.data),
    };

  } catch (err) {
    console.error(err);
    return { success: false, message: "Network error" };
  }
};
