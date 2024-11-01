import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./RootLayout.module.css";
import { AnimatePresence } from "framer-motion";

import MainHeader from "../components/Layout/MainHeader/MainHeader";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer/Footer";

function RootLayout() {
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
