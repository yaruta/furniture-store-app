import { Outlet } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader/MainHeader";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";

function RootLayout() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <MainHeader />
      {showCart && <Cart modal />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
