import classes from "./DeliveryForm.module.css";
import { useEffect, useState } from "react";
import DeliveryType from "./DeliveryType";
import Header from "../../UI/Header";
import StoreType from "./StoreType";
import DeliveryFormItem from "./DeliveryFormItem";
import { useDispatch } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";

function DeliveryForm() {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState("pickup");
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  useEffect(() => {
    dispatch(
      checkoutActions.addDelivery({
        delivery: { type: delivery, deliveryPrice: deliveryPrice },
      })
    );
  }, [delivery, deliveryPrice]);

  function handleDeliveryTypeChange(event) {
    setDelivery(event.target.value);
  }

  function handleChangeDeliveryPrice(price) {
    console.log(price);
    setDeliveryPrice(price);
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
      {delivery === "delivery" && <DeliveryType onDelivery={handleChangeDeliveryPrice}/>}
      {delivery === "pickup" && <StoreType onPickup={handleChangeDeliveryPrice}/>}
    </section>
  );
}

export default DeliveryForm;
