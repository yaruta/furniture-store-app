/**
 * The SummaryCart component is responsible for displaying a list of items in the cart summary.
 * It fetches the cart items from the Redux store and passes each item to the SummaryCartItem component to display.
 *
 * @module SummaryCart
 * @returns {JSX.Element} The rendered SummaryCart component containing a list of cart items.
 */
import classes from "./SummaryCart.module.css";
import { useSelector } from "react-redux";
import Header from "../../UI/Header";
import SummaryCartItem from "./SummaryCartItem";

function SummaryCart() {
  // Access the cart items from the Redux store
  const { items } = useSelector((state) => state.cart);

  return (
      <article>
        <Header>Ihr Warenkorb</Header>
        <ul className={classes.cartList}>
          {items.map((cartItem) => (
            <SummaryCartItem key={`${cartItem.id}${cartItem.color}`} {...cartItem} />
          ))}
        </ul>
      </article>
  );
}

export default SummaryCart;
