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
  const { userLoggedIn} = useAuth();
  const { userdata } = useSelector((state) => state.checkout);
  const [asGast, setAsGast] = useState(userdata ? true : false);
  const [formErrors, setFormErrors] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.target.form || formErrors) {
      return;
    }
    const formData = new FormData(event.target.form);
    const data = Object.fromEntries(formData);
    dispatch(checkoutActions.addUserData({ userdata: { ...data } }));
    navigate("/checkout/delivery");
  }

  function handleFormErrors(errors) {
    setFormErrors(errors);
  }

  function handleAsGastClick() {
    setAsGast(true);
  }

  function handleBack() {
    navigate("/cart");
  }

  return (
    <Section className={classes.checkout}>
      <div className={classes.formsSection}>
        <Header>Deine Daten</Header>
        {!userLoggedIn && <>
          <AuthForm /> 
          <Divider />
          {!asGast && (
          <TextButton onClick={handleAsGastClick}>
            Als Gast fortfahren
          </TextButton>
          )}
          {asGast && <UserDataForm onError={handleFormErrors} />}
        </>}
        {userLoggedIn && (
            <UserDataForm onError={handleFormErrors} />
        )}
       
      </div>
      <CheckoutSidebar
        form="checkout-form"
        onBack={handleBack}
        onNext={handleSubmit}
      />
    </Section>
  );
}

export default UserFormSection;
