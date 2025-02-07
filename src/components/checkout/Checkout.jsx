/**
 * The checkout component acts as a wrapper for the `CheckoutNavigation` component.
 * 
 * @module Checkout
 * @returns {JSX.Element} - The rendered checkout page with the checkout navigation.
 */
import CheckoutNavigation from "./CheckoutNavigation/CheckoutNavigation";

function Checkout() {
  return <CheckoutNavigation />;
}

export default Checkout;
