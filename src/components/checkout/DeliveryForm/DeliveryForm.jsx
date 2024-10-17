import classes from "./DeliveryForm.module.css";
import { useState } from "react";
import DeliveryType from "./DeliveryType";
import Header from "../../UI/Header";
import StoreType from "./StoreType";
import DeliveryFormItem from "./DeliveryFormItem";
import { useDispatch } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";

function DeliveryForm() {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState("pickup");

  function handleDeliveryTypeChange(event) {
    setDelivery(event.target.value);
    dispatch(
      checkoutActions.addDelivery({ delivery: { type: event.target.value } })
    );
  }

  return (
    <section className={classes.deliveryForm}>
      <Header styleType="type1">Lieferung</Header>
      <form id="delivery-form">
        <DeliveryFormItem
          id="delivery"
          label="Lieferung"
          onChange={handleDeliveryTypeChange}
          name="delivery"
        />
        <DeliveryFormItem
          id="pickup"
          label="Abholung im Laden"
          onChange={handleDeliveryTypeChange}
          name="delivery"
          defaultChecked
        />
      </form>
      {delivery === "delivery" && <DeliveryType />}
      {delivery === "pickup" && <StoreType />}
    </section>
  );
}

export default DeliveryForm;
