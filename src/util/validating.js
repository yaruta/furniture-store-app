/**
 * Validates user input based on the specified type.
 *
 * @param {string} value - The input value to be validated.
 * @param {string} type - The type of input to validate ('firstName', 'lastName', 'street', 'houseNumber', 'postcode', 'city', 'email', 'password').
 * @returns {boolean} True if the input is valid, otherwise false.
 */
export function isValidInput(value, type) {
  /** Regular expression for validating a name (2-16 alphabetic characters) */
  const nameReg = RegExp(/^[A-Za-z]{2,16}$/);

  /** Regular expression for validating a street name (3-20 alphabetic characters, spaces, or dots) */
  const streetReg = RegExp(/^[A-Za-z/\s/.]{3,20}$/);
  
  /** Regular expression for validating a house number (1-4 numeric characters) */
  const houseNumberReg = RegExp(/^[0-9]{1,4}$/);
  
  /** Regular expression for validating a postcode (exactly 5 numeric characters) */
  const postcodeReg = RegExp(/^[0-9]{5}$/);
  
  /** Regular expression for validating a city name (3-20 alphabetic characters, hyphens allowed) */
  const cityReg = RegExp(/^[A-Za-z/-]{3,20}$/);
  
  /** Regular expression for validating an email address (standard email format) */
  const emailReg = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  
  /** Regular expression for validating a password (at least 8 characters, including one letter, one number, and one special character) */
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
