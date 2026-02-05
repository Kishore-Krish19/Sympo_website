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
    ...data,
    submittedAt: new Date().toISOString()
  };

  try {
    // const res = await axios.post(
    //   import.meta.env.VITE_GOOGLE_SCRIPT_URL,
    //   payload,
    //   {
    //     headers: {
    //       "Content-Type": "text/plain;charset=utf-8"
    //     }
    //   }
    // );

    // if (res.data.result === "success") {
    //   return { success: true, message: "Registration successful!" };
    // }

    // return { success: false, message: "Submission failed" };
    const res = await axios.post(
      import.meta.env.VITE_GOOGLE_SCRIPT_URL,
      payload,
      {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );

    console.log("RAW GAS RESPONSE 👉", res.data);

    return {
      success: res.data?.result === "success",
      message: JSON.stringify(res.data),
    };

  } catch (err) {
    console.error(err);
    return { success: false, message: "Network error" };
  }
};
