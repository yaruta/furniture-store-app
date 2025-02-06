/**
 * PaymentFormPage component displays the payment form section during checkout.
 * 
 * This component imports and renders the `PaymentSection` component, which
 * allows the user to enter their payment details for completing the checkout process.
 * 
 * @returns {JSX.Element} - The rendered payment form page with the `PaymentSection` component.
 */
import PaymentSection from "../../components/checkout/PaymentForm/PaymentSection";

function PaymentFormPage() {
  return <PaymentSection />;
}

export default PaymentFormPage;
