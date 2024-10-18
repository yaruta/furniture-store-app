import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../store/checkout-slice";
import PaymentTypeItem from "./PaymentTypeItem";

function PaymentForm() {
  const dispatch = useDispatch();
  const { type: paymentType } = useSelector((state) => state.checkout.payment);
  const [payment, setPayment] = useState(paymentType ? paymentType : "paypal");

  useEffect(() => {
    dispatch(
      checkoutActions.addPayment({
        payment: { type: payment },
      })
    );
  }, [payment]);

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
        defaultChecked={paymentType && paymentType === "card"}
      />
      <PaymentTypeItem
        id="paypal"
        label="Paypal"
        name="payment"
        onChange={handlePaymentTypeChange}
        defaultChecked={
          (paymentType && paymentType === "paypal") || !paymentType
        }
      />
    </form>
  );
}

export default PaymentForm;
