import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { sendOrder } from "../../../util/http";
import { checkoutActions } from "../../../store/checkout-slice";
import classes from "./SummarySection.module.css";
import Section from "../../UI/Section";
import Header from "../../UI/Header";
import CheckoutInfo from "./CheckoutInfo";
import SummaryCart from "./SummaryCart";
import TotalPrice from "../TotalPrice";
import TextButton from "../../UI/TextButton";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import { cartActions } from "../../../store/cart-slice";

function SummarySection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userdata, delivery, payment } = useSelector(
    (state) => state.checkout
  );
  const cart = useSelector((state) => state.cart);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendOrder,
    onSuccess: () => {
      navigate("/checkout/completed");
      dispatch(checkoutActions.clearCheckoutData());
      dispatch(cartActions.clearCart());
    },
  });

  function handleSubmit() {
    mutate({
      cart: cart,
      userInfo: userdata,
      delivery: delivery,
      payment: payment,
    });
  }

  function handleBack() {
    navigate("/checkout/payment");
  }

  let content;
  if (isPending) {
    content = (
      <PageContent title="Bestellung wird gesendet...">
        <p>Bestellung wird gesendet...</p>
      </PageContent>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Bestellung konnte nicht geschickt werden"
        message={
          error.info?.message ||
          "Bestellung konnte nicht geschickt werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }

  return (
    <Section className={classes.summary}>
      {content}
      <Header>Zusammenfassung</Header>
      <CheckoutInfo />
      <SummaryCart />
      <TotalPrice />
      <div className={classes.actions}>
        <TextButton onClick={handleBack}>Zurück</TextButton>
        <TextButton styleType="type2" onClick={handleSubmit}>
          Kauf abschließen
        </TextButton>
      </div>
    </Section>
  );
}

export default SummarySection;
