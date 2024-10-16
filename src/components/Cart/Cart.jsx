import classes from "./Cart.module.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CtaButton from "../UI/CTAButton";
import { currencyFormatter } from "../../util/formatting";
import PageTitle from "../UI/PageTitle";

export default function Cart({ modal }) {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(uiActions.toggle());
  }

  let content;

  content = (
    <>
      <ul className={classes.cartList}>
        {items.length === 0 && (
          <p className={classes.empty}>Der Warenkorb ist leer</p>
        )}
        {items.map((cartItem) => (
          <CartItem key={`${cartItem.id}${cartItem.color}`} {...cartItem} />
        ))}
      </ul>
    </>
  );

  return (
    <>
      {modal && (
        <Modal open onClose={handleCloseCart} onPathnameClose="/cart">
          <div className={classes.cartHeader}>
            <h2>Ihr Warenkorb</h2>
            <button onClick={handleCloseCart}>X</button>
          </div>
          {content}
          <div className={classes.cartTotal}>
            <span>Zwischensumme</span>
            <span>{currencyFormatter.format(totalPrice)}</span>
          </div>
          <div className={classes.cartActions}>
            <CtaButton
              title="Warenkorb anzeigen"
              path="/cart"
              onClose={handleCloseCart}
            />
            <CtaButton title="Zur Kasse" path="/checkout" typ2 />
          </div>
        </Modal>
      )}
      {!modal && (
        <>
          <PageTitle title="Ihr Warenkorb" />
          <section className={classes.cartFullscreen}>
            <div className={classes.productsInfo}>{content}</div>
            <div className={classes.generalInfo}>
              <div className={classes.cartTotal}>
                <span>Zwischensumme</span>
                <span>{currencyFormatter.format(totalPrice)}</span>
              </div>
              <p className={classes.additionalInfo}>Versand wird an der Kasse berechnet*</p>
              <div className={classes.cartActions}>
                <CtaButton title="Zur Kasse" path="/checkout" typ2 className={classes.actButton}/>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
