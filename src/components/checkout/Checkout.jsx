import classes from "./Checkout.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkoutActions } from "../../store/checkout-slice";
import PageTitle from "../UI/PageTitle";
import UserDataForm from "./UserDataForm";
import TotalPrice from "./TotalPrice";
import TextButton from "../UI/TextButton";
import Divider from "../UI/Divider";
import DeliveryForm from "./DeliveryForm/DeliveryForm";

function Checkout() {
  const dispatch = useDispatch();
  const [asGast, setAsGast] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const data = Object.fromEntries(formData);
    if (formErrors) {
      return;
    }
    dispatch(checkoutActions.addUserData({ userdata: { ...data } }));
  }

  function handleFormErrors(errors) {
    setFormErrors(errors);
  }

  function handleAsGastClick() {
    setAsGast(true);
  }

  return (
    <>
      <PageTitle title="Checkout"></PageTitle>
      <section className={classes.checkout}>
        <div className={classes.formsSection}>
          <p>Login...</p>
          <Divider />
          {!asGast && (
            <TextButton onClick={handleAsGastClick}>
              Als Gast fortfahren
            </TextButton>
          )}
          {asGast && <UserDataForm onError={handleFormErrors} />}
          <DeliveryForm />
        </div>
        <div className={classes.generalInfo}>
          <TotalPrice />
          <div className={classes.cartActions}>
            <TextButton form="checkout-form" onClick={handleSubmit}>
              Bestellung überprüfen
            </TextButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
