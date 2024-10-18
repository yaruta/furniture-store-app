import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import DeliveryType from "./DeliveryType";
import StoreType from "./StoreType";
import DeliveryFormItem from "./DeliveryFormItem";

function DeliveryForm() {
  const dispatch = useDispatch();
  const {delivery: deliveryState} = useSelector(state => state.checkout);
  const [delivery, setDelivery] = useState(deliveryState ? deliveryState.type : "pickup");
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
    setDeliveryPrice(price);
  }

  return (
    <>
      <form id="delivery-form">
        <DeliveryFormItem
          id="delivery"
          label="Lieferung"
          onChange={handleDeliveryTypeChange}
          name="delivery"
          defaultChecked = {deliveryState && deliveryState.type==="delivery"}
        />
        <DeliveryFormItem
          id="pickup"
          label="Abholung im Laden"
          onChange={handleDeliveryTypeChange}
          name="delivery"
          defaultChecked = {(deliveryState && deliveryState.type==="pickup") || !deliveryState}
        />
      </form>
      {delivery === "delivery" && <DeliveryType onDelivery={handleChangeDeliveryPrice}/>}
      {delivery === "pickup" && <StoreType onPickup={handleChangeDeliveryPrice}/>}
    </>
  );
}

export default DeliveryForm;
