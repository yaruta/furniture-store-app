import { useEffect, useState } from "react";
import classes from "./UserDataForm.module.css";
import FormInput from "./FormInput";
import { isValidInput } from "../../../util/validating";
import { Form } from "react-router-dom";

function UserDataForm({ onError }) {
  const [isError, setIsError] = useState({
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    postcode: "",
    city: "",
    email: false,
  });

  useEffect(() => {
    const errors = Object.values(isError).filter((error) => error === true || error === "");
    if (errors.length > 0) {
      onError(errors);
    } else {
      onError(null);
    }
  }, [isError]);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const isValid = isValidInput(value, name);
    if (!isValid) {
      setIsError((prevState) => {
        return { ...prevState, [name]: true };
      });
    } else {
      setIsError((prevState) => {
        return { ...prevState, [name]: false };
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
          required
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
          required
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
          required
        />
        <FormInput
          label="Hausnummer"
          type="text"
          id="houseNumber"
          name="houseNumber"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige Hausnummer ein."
          isError={isError.houseNumber}
          required
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
          required
        />
        <FormInput
          label="Stadt"
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          errorMessage="Die Stadt sollte mindestens 3 Zeichen lang sein."
          isError={isError.city}
          required
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
          required
        />
      </div>
    </Form>
  );
}

export default UserDataForm;
