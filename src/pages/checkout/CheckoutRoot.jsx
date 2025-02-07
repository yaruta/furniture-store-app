/**
 * CheckoutRoot component manages the checkout process and displays the checkout form.
 *
 * It conditionally renders the `Checkout` component based on the current URL path.
 * If the user has already completed the checkout (indicated by the path `/checkout/completed`),
 * the `Checkout` component will not be displayed. The `Outlet` component is used to render nested routes.
 *
 * @module CheckoutRoot
 * @returns {JSX.Element} - The rendered checkout page with the optional `Checkout` component and nested routes.
 */
import { Outlet, useLocation } from "react-router-dom";
import Checkout from "../../components/checkout/Checkout";

function CheckoutRoot() {
  // Get the current URL path using useLocation
  const { pathname } = useLocation();

  return (
    <>
      {/* Only show Checkout if the path is not '/checkout/completed' */}
      {pathname !== "/checkout/completed" && <Checkout />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CheckoutRoot;
