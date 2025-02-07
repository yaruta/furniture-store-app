/**
 * UserDataForm is a form component for capturing user data such as first name, last name, address, and email.
 * It validates the user input and provides error messages if the input does not meet the required criteria.
 * 
 * @module UserDataForm
 * @param {function} onError - A callback function to handle form validation errors.
 * 
 * @returns {JSX.Element} - A form element with input fields for user data.
 */
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { isValidInput } from "../../../util/validating";
import { useAuth } from "../../../store/authContext";
import classes from "./UserDataForm.module.css";
import FormInput from "../../UI/FormInput";

function UserDataForm({ onError }) {
  /**
   * Hook to check if the user is logged in
   * If the user logged in, then we will use email from 'current user' as the default email
  */
  const {userLoggedIn, currentUser} = useAuth(); 
  const { userdata } = useSelector((state) => state.checkout);
  const [isError, setIsError] = useState(
    userdata
      ? {
          firstName: false,
          lastName: false,
          street: false,
          houseNumber: false,
          postcode: false,
          city: false,
          email: false,
        }
      : {
          firstName: "",
          lastName: "",
          street: "",
          houseNumber: "",
          postcode: "",
          city: "",
          email: "",
        }
  );

  useEffect(() => {
    const errors = Object.values(isError).filter(
      (error) => error === true || error === ""
    );
    if (errors.length > 0) {
      onError(errors);
    } else {
      onError(null);
    }
  }, [isError]);

  /**
   * Handles input field changes, validating the user input.
   * 
   * @param {Event} event - The event object triggered by an input change.
   */
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
          label="Vorname*"
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          errorMessage="Der Vorname sollte 2-16 Zeichen lang sein und darf keine Zahlen oder
       Sonderzeichen enthalten."
          isError={isError.firstName}
          defaultValue={userdata ? userdata.firstName : ""}
          required
        />
        <FormInput
          label="Nachname*"
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          errorMessage="Der Nachname sollte 2-16 Zeichen lang sein und darf keine Zahlen
       oder Sonderzeichen enthalten."
          isError={isError.lastName}
          defaultValue={userdata ? userdata.lastName : ""}
          required
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Straße*"
          type="text"
          id="street"
          name="street"
          onChange={handleChange}
          errorMessage="Die Straße sollte mindestens 3 Zeichen lang sein."
          isError={isError.street}
          defaultValue={userdata ? userdata.street : ""}
          required
        />
        <FormInput
          label="Hausnummer*"
          type="text"
          id="houseNumber"
          name="houseNumber"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige Hausnummer ein."
          isError={isError.houseNumber}
          defaultValue={userdata ? userdata.houseNumber : ""}
          required
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Postleitzahl*"
          type="text"
          id="postcode"
          name="postcode"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige Postleitzahl ein."
          isError={isError.postcode}
          defaultValue={userdata ? userdata.postcode : ""}
          required
        />
        <FormInput
          label="Stadt*"
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          errorMessage="Die Stadt sollte mindestens 3 Zeichen lang sein."
          isError={isError.city}
          defaultValue={userdata ? userdata.city : ""}
          required
        />
      </div>
      <div className={classes.formLine}>
        <FormInput
          label="Email*"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          errorMessage="Bitte geben Sie eine gültige E-Mail ein."
          isError={isError.email}
          defaultValue={userLoggedIn ? currentUser.email : userdata ? userdata.email : ""}
          required
        />
      </div>
    </Form>
  );
}

export default UserDataForm;
