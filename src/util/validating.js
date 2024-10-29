export function isValidInput(value, type) {
  const nameReg = RegExp(/^[A-Za-z]{2,16}$/);
  const streetReg = RegExp(/^[A-Za-z/\s/.]{3,20}$/);
  const houseNumberReg = RegExp(/^[0-9]{1,4}$/);
  const postcodeReg = RegExp(/^[0-9]{5}$/);
  const cityReg = RegExp(/^[A-Za-z/-]{3,20}$/);
  const emailReg = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  const passwordReg = RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  );

  let isValid;

  if (type === "firstName" || type === "lastName") {
    isValid = nameReg.test(value);
  } else if (type === "street") {
    isValid = streetReg.test(value);
  } else if (type === "houseNumber") {
    isValid = houseNumberReg.test(value);
  } else if (type === "postcode") {
    isValid = postcodeReg.test(value);
  } else if (type === "city") {
    isValid = cityReg.test(value);
  } else if (type === "email") {
    isValid = emailReg.test(value);
  } else if (type === "password") {
    isValid = passwordReg.test(value);
  }

  return isValid;
}
