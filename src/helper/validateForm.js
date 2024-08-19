export function validateForm(data) {
  // Email format check
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(data.email)) {
    return { isValid: false, message: "Please enter a valid email address." };
  }

  if (data.name.length < 3)
    return {
      isValid: false,
      message: "Please enter a valid name(i.e minimum length 3)",
    };
  if (data.message.length < 25)
    return {
      isValid: false,
      message: "Message length can't be less than 25 charcaters.",
    };

  // Optional additional checks (can be uncommented if needed)
  // if (!/^\d{4}$/.test(patientData.year.toString())) {
  //   return { isValid: false, message: "Year must be a valid 4-digit number." };
  // }
  // if (!/^\d{1,2}$/.test(patientData.month.toString())) {
  //   return { isValid: false, message: "Month must be a valid number between 1 and 12." };
  // }
  // ... (add checks for email format, zip code format, etc.)

  return { isValid: true };
}
