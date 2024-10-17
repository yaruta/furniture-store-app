import classes from "./UserFormSection.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import UserDataForm from "./UserDataForm";
import TotalPrice from "../TotalPrice";
import TextButton from "../../UI/TextButton";
import Divider from "../../UI/Divider";
import Header from "../../UI/Header";
import { useNavigate } from "react-router-dom";
import Section from "../../UI/Section";
import CheckoutSidebar from "../CheckoutSidebar";

function UserFormSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [asGast, setAsGast] = useState(false);
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
    <Section>
      <div className={classes.formsSection}>
        <Header>Deine Daten</Header>
        <p>Login...</p>
        <Divider />
        {!asGast && (
          <TextButton onClick={handleAsGastClick}>
            Als Gast fortfahren
          </TextButton>
        )}
        {asGast && <UserDataForm onError={handleFormErrors} />}
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
