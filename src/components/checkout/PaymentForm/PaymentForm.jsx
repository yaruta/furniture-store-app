/**
 * The PaymentForm component manages the payment method selection in the checkout process.
 * It allows the user to choose between different payment methods, such as credit card and PayPal.
 * 
 * The component uses Redux to manage the payment method state and adds the selected
 * payment method to the Redux store.
 * 
 * @returns {JSX.Element} - The rendered form for selecting a payment method.
 */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import PaymentTypeItem from "./PaymentTypeItem";

function PaymentForm() {
  const dispatch = useDispatch();
  const { payment: paymentType } = useSelector((state) => state.checkout);
  const [payment, setPayment] = useState(paymentType ? paymentType : "paypal");

  useEffect(() => {
    // Adds the selected payment method to the store
    dispatch(
      checkoutActions.addPayment({
        payment: { type: payment },
      })
    );
  }, [payment]);

  /**
   * Handles the change in selected payment method.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the radio button.
   */
  function handlePaymentTypeChange(event) {
    setPayment(event.target.value);
  }

  return (
    <form id="payment-form">
      <PaymentTypeItem
        id="card"
        label="Karte"
        name="payment"
        onChange={handlePaymentTypeChange}
        defaultChecked={paymentType && paymentType.type === "card"}
      />
      <PaymentTypeItem
        id="paypal"
        label="Paypal"
        name="payment"
        onChange={handlePaymentTypeChange}
        defaultChecked={
          (paymentType && paymentType.type === "paypal") || !paymentType
        }
      />
    </form>
  );
}

export default PaymentForm;
