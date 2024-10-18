import { useNavigate } from "react-router-dom";
import classes from "./SummarySection.module.css";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutInfo from "./CheckoutInfo";
import SummaryCart from "./SummaryCart";
import TotalPrice from "../TotalPrice";
import TextButton from "../../UI/TextButton";

function SummarySection() {
  const navigate = useNavigate();

  function handleNext() {
    // navigate("/checkout/summary");
  }

  function handleBack() {
    navigate("/checkout/payment");
  }
  return (
    <Section className={classes.summary}>
      <Header>Zusammenfassung</Header>
      <CheckoutInfo />
      <SummaryCart />
      <TotalPrice />
      <div className={classes.actions}>
        <TextButton onClick={handleBack}>Zurück</TextButton>
        <TextButton styleType="type2">Kauf abschließen</TextButton>
      </div>
    </Section>
  );
}

export default SummarySection;
