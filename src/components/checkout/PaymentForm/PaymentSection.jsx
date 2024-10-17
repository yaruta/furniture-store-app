import classes from "./PaymentSection.module.css";
import { useNavigate } from "react-router-dom";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutSidebar from "../CheckoutSidebar";

function Payment() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    navigate("/checkout/summary");
  }

  function handleBack() {
    navigate("/checkout/delivery");
  }
  return (
    <Section>
      <div className={classes.formsSection}>
        <Header>Payment</Header>
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
