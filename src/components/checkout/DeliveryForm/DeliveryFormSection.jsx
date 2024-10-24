import classes from "./DeliveryFormSection.module.css";
import { useNavigate } from "react-router-dom";

import DeliveryForm from "./DeliveryForm";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutSidebar from "../CheckoutSidebar";

function DeliveryFormSection() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/checkout/userinfo");
  }

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
