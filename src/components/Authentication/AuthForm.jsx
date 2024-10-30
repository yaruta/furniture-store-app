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
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") !== "signup";
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const isValid = isValidInput(value, name);
    setErrorMessage(false);
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

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isSubmitting && !isError.email && !isError.password) {
      setIsSubmitting(true);

      const formData = new FormData(event.target.form);
      const data = Object.fromEntries(formData);

      try {
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
