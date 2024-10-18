import classes from "./SummaryCart.module.css";
import { useSelector } from "react-redux";
import Header from "../../UI/Header";
import SummaryCartItem from "./SummaryCartItem";

function SummaryCart() {
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
