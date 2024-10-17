export function isValidInput(value, type) {
  const nameReg = RegExp(/^[A-Za-z]{2,16}$/);
  const streetReg = RegExp(/^[A-Za-z/\s/.]{3,20}$/);
  const houseNumberReg = RegExp(/^[0-9]{1,4}$/);
  const postcodeReg = RegExp(/^[0-9]{5}$/);
  const cityReg = RegExp(/^[A-Za-z/-]{3,20}$/);

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
    isValid = true;
  }

  return isValid;
}
