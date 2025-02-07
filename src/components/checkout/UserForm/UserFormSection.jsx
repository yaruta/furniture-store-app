/**
 * The UserFormSection component handles the user data form in the checkout process.
 * It allows the user to log in, continue as a guest, and submit user data.
 * 
 * @module UserFormSection
 */
import classes from "./UserFormSection.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutActions } from "../../../store/checkout-slice";
import { useAuth } from "../../../store/authContext";
import UserDataForm from "./UserDataForm";
import TextButton from "../../UI/TextButton";
import Divider from "../../UI/Divider";
import Header from "../../UI/Header";
import Section from "../../UI/Section";
import CheckoutSidebar from "../CheckoutSidebar";
import AuthForm from "../../Authentication/AuthForm";

function UserFormSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** @type {boolean} The login status of the user */
  const { userLoggedIn} = useAuth();

  /** @type {Object} The user data from the Redux state */
  const { userdata } = useSelector((state) => state.checkout);

  /** @type {boolean} State to determine if the user is continuing as a guest */
  const [asGast, setAsGast] = useState(userdata ? true : false);

  /** @type {Object} State to track any form errors */
  const [formErrors, setFormErrors] = useState(null);

  /**
   * Handles form submission, validates if there are errors before proceeding.
   * @param {Event} event - The form submit event.
   */
  function handleSubmit(event) {
    event.preventDefault();
    // If form is invalid or there are errors, prevent submission
    if (!event.target.form || formErrors) {
      return;
    }
    // Create a data object from the form and dispatch it to the Redux store
    const formData = new FormData(event.target.form);
    const data = Object.fromEntries(formData);
    dispatch(checkoutActions.addUserData({ userdata: { ...data } }));
    // Navigate to the next checkout step
    navigate("/checkout/delivery");
  }

  /**
   * Sets form validation errors.
   * @param {Array} errors - List of errors to set.
   */
  function handleFormErrors(errors) {
    setFormErrors(errors);
  }

  /**
   * Handles the user's choice to continue as a guest.
   */
  function handleAsGastClick() {
    setAsGast(true);
  }

  /**
   * Navigates the user back to the cart.
   */
  function handleBack() {
    navigate("/cart");
  }

  return (
    <Section className={classes.checkout}>
      <div className={classes.formsSection}>
        <Header>Deine Daten</Header>
        {/* Render authentication or guest form depending on login status */}
        {!userLoggedIn && <>
          <AuthForm /> 
          <Divider />
          {/* Show the option to continue as a guest */}
          {!asGast && (
          <TextButton onClick={handleAsGastClick}>
            Als Gast fortfahren
          </TextButton>
          )}
          {/* Display the user data form for guest users */}
          {asGast && <UserDataForm onError={handleFormErrors} />}
        </>}
        {/* If the user is logged in, show the user data form */}
        {userLoggedIn && (
            <UserDataForm onError={handleFormErrors} />
        )}
       
      </div>
       {/* Sidebar with navigation buttons for checkout process */}
      <CheckoutSidebar
        form="checkout-form"
        onBack={handleBack}
        onNext={handleSubmit}
      />
    </Section>
  );
}

export default UserFormSection;
