import { Outlet } from "react-router-dom";
import Checkout from "../../components/checkout/Checkout";

function CheckoutRoot() {
  return (
    <>
      <Checkout />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CheckoutRoot;
