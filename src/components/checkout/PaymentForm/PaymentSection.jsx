/**
 * The Payment component represents the payment section of the checkout process.
 * It includes a form for the user to select a payment method and navigate to the next step in the checkout.
 * 
 * This component also handles navigation between the checkout steps and manages the submission of the payment form.
 * 
 * @returns {JSX.Element} - The rendered payment section of the checkout process.
 */
import classes from "./PaymentSection.module.css";
import { useNavigate } from "react-router-dom";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutSidebar from "../CheckoutSidebar";
import PaymentForm from "./PaymentForm";

function Payment() {
  const navigate = useNavigate();

  /**
   * Handles the form submission by navigating to the summary page.
   * 
   * @param {React.FormEvent} event - The form submission event.
   */
  function handleSubmit(event) {
    navigate("/checkout/summary");
  }

  /**
   * Handles the navigation back to the delivery section.
   */
  function handleBack() {
    navigate("/checkout/delivery");
  }
  return (
    <Section className={classes.checkout}>
      <div className={classes.formsSection}>
        <Header>Zahlung</Header>
        <PaymentForm />
      </div>
      <CheckoutSidebar
        form="payment-form"
        onBack={handleBack}
        onNext={handleSubmit}
      />
    </Section>
  );
}

export default Payment;
