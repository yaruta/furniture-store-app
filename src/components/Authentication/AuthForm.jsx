/**
 * AuthForm component allows users to log in or sign up.
 * 
 * This form component handles user input for email and password, validates the inputs,
 * and handles form submission to either log the user in or create a new account.
 * The component also displays error messages in case of invalid input or authentication errors.
 * 
 * @module AuthForm
 * @returns {JSX.Element} - The rendered authentication form for login or signup.
 */
import { useState } from "react";
import { Form, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword,
} from "../../firebase/auth";
import { isValidInput } from "../../util/validating";
import classes from "./AuthForm.module.css";

import FormInput from "../UI/FormInput";
import TextButton from "../UI/TextButton";

function AuthForm() {
  // Determine if the user is in login or signup mode based on URL query parameter
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") !== "signup";
  const {pathname} = useLocation();
  const navigate = useNavigate();

  // State to manage form submission and error handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  /**
   * Handles input change and validates the input value.
   * 
   * @param {Event} event - The change event triggered by the input field.
   */
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const isValid = isValidInput(value, name);
    setErrorMessage(false);
    // Update the error state based on validation
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

  /**
   * Handles form submission, either logging in or signing up the user.
   * 
   * @param {Event} event - The submit event triggered by clicking the submit button.
   */
  async function handleSubmit(event) {
    event.preventDefault();
    if (!isSubmitting && !isError.email && !isError.password) {
      setIsSubmitting(true);

      const formData = new FormData(event.target.form);
      const data = Object.fromEntries(formData);

      try {
        // Check if it's login or signup based on the mode
        if (isLogin) {
          await doSignInWithEmailAndPassword(data.email, data.password);
        } else if (!isLogin) {
          await doCreateUserWithEmailAndPassword(data.email, data.password);
        }
        setIsSubmitting(false);
      } catch (err) {
        if (err.code === "auth/invalid-credential") {
          setErrorMessage(
            "Die E-Mail und das Passwort für die Anmeldung stimmen nicht überein."
          );
        } else {
          setErrorMessage(err.code);
        }
        setIsSubmitting(false);
        return;
      }
    }
    // Redirect to the shop page after successful login/signup
    {pathname === "/auth" && navigate("/shop")};
  }

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <Form className={classes.form}>
        <div>
          <FormInput
            label="Email"
            type="email"
            id="emailLogin"
            name="email"
            onChange={handleChange}
            errorMessage="Bitte geben Sie eine gültige E-Mail ein."
            isError={isError.email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            errorMessage="Das Passwort muss mindestens 8 Zeichen lang sein, eine Zahl und ein Sonderzeichen enthalten."
            isError={isError.password}
            required
          />
        </div>
        <TextButton onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign up"}
        </TextButton>
      </Form>
    </>
  );
}

export default AuthForm;
