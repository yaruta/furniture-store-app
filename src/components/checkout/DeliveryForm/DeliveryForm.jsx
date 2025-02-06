/**
 * The `DeliveryForm` component allows the user to choose the delivery method (delivery or pickup)
 * and adjust the delivery price accordingly. It updates the checkout state with the selected delivery type 
 * and the corresponding delivery price.
 * 
 * @returns {JSX.Element} - A form that lets the user select a delivery type and displays relevant options.
 */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import DeliveryType from "./DeliveryType";
import StoreType from "./StoreType";
import DeliveryFormItem from "./DeliveryFormItem";

function DeliveryForm() {
  const dispatch = useDispatch();
  const {delivery: deliveryState} = useSelector(state => state.checkout);
  /**
   * State variables for handling the delivery type and delivery price.
   * 
   * @type {string}
   */
  const [delivery, setDelivery] = useState(deliveryState ? deliveryState.type : "pickup");
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  /**
   * Dispatches the action to update the checkout state with the selected delivery type 
   * and the corresponding delivery price whenever they change.
   */
  useEffect(() => {
    dispatch(
      checkoutActions.addDelivery({
        delivery: { type: delivery, deliveryPrice: deliveryPrice },
      })
    );
  }, [delivery, deliveryPrice]);

  /**
   * Handles the change in the selected delivery type.
   * 
   * @param {Object} event - The change event from the delivery type input.
   */
  function handleDeliveryTypeChange(event) {
    setDelivery(event.target.value);
  }

  /**
   * Handles the change in the delivery price.
   * 
   * @param {number} price - The new price of the delivery.
   */
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
