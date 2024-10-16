import { useState } from "react";
import classes from "./UserDataForm.module.css";
import FormInput from "./FormInput";
import { isValidInput } from "../../util/validating";
import { Form } from "react-router-dom";

function UserDataForm() {
  const [isError, setIsError] = useState({
    firstName: false,
    lastName: false,
    street: false,
    houseNumber: false,
    postcode: false,
    city: false,
    email: false,
  });

  function handleChange(event) {
    setIsError((prevState) => {
      return { ...prevState, [event.target.name]: false };
    });
    const isValid = isValidInput(event.target.value, event.target.name);
    if (!isValid) {
      setIsError((prevState) => {
        return { ...prevState, [event.target.name]: true };
      });
    }
  }

  return (
    <Form id="checkout-form" className={classes.form}>
      <div className={classes.formLine}>
        <FormInput
          label="Vorname"
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          errorMessage="Der Vorname sollte 2-16 Zeichen lang sein und darf keine Zahlen oder
       Sonderzeichen enthalten."
          isError={isError.firstName}
        />
        <FormInput
          label="Nachname"
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          errorMessage="Der Nachname sollte 2-16 Zeichen lang sein und darf keine Zahlen
       oder Sonderzeichen enthalten."
          isError={isError.lastName}
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Straße"
          type="text"
          id="street"
          name="street"
          onChange={handleChange}
          errorMessage="Die Straße sollte mindestens 3 Zeichen lang sein."
          isError={isError.street}
        />
        <FormInput
          label="Hausnummer"
          type="text"
          id="houseNumber"
          name="houseNumber"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige Hausnummer ein."
          isError={isError.houseNumber}
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Postleitzahl"
          type="text"
          id="postcode"
          name="postcode"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige Postleitzahl ein."
          isError={isError.postcode}
        />
        <FormInput
          label="Stadt"
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          errorMessage="Die Stadt sollte mindestens 3 Zeichen lang sein."
          isError={isError.city}
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige E-Mail ein."
          isError={false}
        />
      </div>
    </Form>
  );
}

export default UserDataForm;
