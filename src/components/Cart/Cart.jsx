import classes from "./Cart.module.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CtaButton from "../UI/CTAButton";
import { currencyFormatter } from "../../util/formatting";
import PageTitle from "../UI/PageTitle";
import CheckoutSidebar from "../checkout/CheckoutSidebar";
import { useNavigate } from "react-router-dom";

export default function Cart({ modal }) {
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(uiActions.toggle());
  }

  function handleNext() {
    navigate("/checkout/userinfo");
  }

  function handleBack() {
    navigate("/shop");
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
            <CtaButton title="Zur Kasse" path="/checkout/userinfo" typ2 />
          </div>
        </Modal>
      )}
      {!modal && (
        <>
          <PageTitle title="Ihr Warenkorb" />
          <section className={classes.cartFullscreen}>
            <div className={classes.productsInfo}>{content}</div>
            <CheckoutSidebar
              onNext={handleNext}
              onBack={handleBack}
              backTitle="Zurück zum Shop"
            />
          </section>
        </>
      )}
    </>
  );
}
