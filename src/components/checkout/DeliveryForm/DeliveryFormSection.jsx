/**
 * The DeliveryFormSection component handles the display of the delivery options
 * in the checkout process. It renders a form for selecting the delivery method 
 * and provides navigation buttons for moving between sections of the checkout.
 * 
 * @module DeliveryFormSection
 * @returns {JSX.Element} - A section displaying the delivery form and checkout sidebar.
 */
import classes from "./DeliveryFormSection.module.css";
import { useNavigate } from "react-router-dom";

import DeliveryForm from "./DeliveryForm";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutSidebar from "../CheckoutSidebar";

function DeliveryFormSection() {
  const navigate = useNavigate();

  /**
   * Navigate to the user information page (previous step).
   */
  function handleBack() {
    navigate("/checkout/userinfo");
  }

  /**
   * Navigate to the payment page (next step).
   */
  function handleNext() {
    navigate("/checkout/payment");
  }

  return (
    <Section className={classes.checkout}>
      <div className={classes.formsSection}>
        <Header>Lieferung</Header>
        <DeliveryForm />
      </div>
      <CheckoutSidebar
        form="delivery-form"
        onBack={handleBack}
        onNext={handleNext}
      />
    </Section>
  );
}

export default DeliveryFormSection;
