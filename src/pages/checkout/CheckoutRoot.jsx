import { Outlet, useLocation } from "react-router-dom";
import Checkout from "../../components/checkout/Checkout";

function CheckoutRoot() {
  const {pathname} = useLocation();

  return (
    <>
      {pathname !== "/checkout/completed" && <Checkout />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CheckoutRoot;
