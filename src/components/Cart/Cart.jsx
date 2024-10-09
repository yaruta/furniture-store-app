import classes from "./Cart.module.css";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CtaButton from "../UI/CTAButton";
import { currencyFormatter } from "../../util/formatting";

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <Modal open onClose={handleCloseCart}>
      <div className={classes.cartHeader}>
        <h2>Ihr Warenkorb</h2>
        <button onClick={handleCloseCart}>X</button>
      </div>
      <ul className={classes.cartList}>
        {items.map((cartItem) => (
          <CartItem key={`${cartItem.id}${cartItem.color}`} {...cartItem}/>
        ))}
      </ul>
      <div className={classes.cartTotal}>
        <span>Zwischensumme</span>
        <span>{currencyFormatter.format(totalPrice)}</span>
      </div>
      <div className={classes.cartActions}>
        <CtaButton title="Warenkorb anzeigen" path="/" />
        <CtaButton title="Zur Kasse" path="/" typ2 />
      </div>
    </Modal>
  );
}
