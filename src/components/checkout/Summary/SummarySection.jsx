/**
 * The SummarySection component displays the summary of the order, including user data, 
 * delivery, payment information, cart items, and total price. It also handles the 
 * submission of the order to the backend and navigation to the completion page.
 *
 * @returns {JSX.Element} The rendered SummarySection component.
 */
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

  // Mutation to send the order using react-query
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendOrder,
    onSuccess: () => {
      // Navigate to the order completion page and reset checkout and cart state
      navigate("/checkout/completed");
      dispatch(checkoutActions.clearCheckoutData());
      dispatch(cartActions.clearCart());
    },
  });

  /**
   * Handles the submission of the order by calling the mutate function to send 
   * the order details.
   */
  function handleSubmit() {
    mutate({
      cart: cart,
      userInfo: userdata,
      delivery: delivery,
      payment: payment,
    });
  }

  /**
   * Navigates the user back to the payment page.
   */
  function handleBack() {
    navigate("/checkout/payment");
  }

  // Render content based on the mutation state (pending, error)
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
      {/* Action buttons for navigating back or completing the purchase */}
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
