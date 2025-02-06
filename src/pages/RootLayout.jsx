/**
 * RootLayout component serves as the main layout for the app.
 * 
 * It includes the header, footer, and a section to render child routes
 * using the `Outlet` component. Additionally, it conditionally displays
 * the cart using `AnimatePresence` from `framer-motion` for animation.
 * 
 * @returns {JSX.Element} - The main layout of the app, including the header, footer, and conditional cart display.
 */
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./RootLayout.module.css";
import { AnimatePresence } from "framer-motion";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer/Footer";

function RootLayout() {
  // Get the visibility status of the cart from the Redux store
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <main className={classes.main}>
      <MainHeader />
      <AnimatePresence>{showCart && <Cart modal />}</AnimatePresence>
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default RootLayout;
