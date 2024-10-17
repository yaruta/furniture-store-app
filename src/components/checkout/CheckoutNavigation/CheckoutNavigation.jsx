import classes from "./CheckoutNavigation.module.css";
import CheckoutNavItem from "./CheckoutNavItem";
import Divider from "./Divider";

function CheckoutNavigation() {
  return (
    <nav className={classes.checkoutNavigation}>
      <ul>
        <CheckoutNavItem
          path="/checkout/userinfo"
          number={1}
          title="Userinformationen"
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/delivery"
          number={2}
          title="Versand"
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/payment"
          number={3}
          title="Zahlung"
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/summary"
          number={4}
          title="Zusammenfassung"
        />
      </ul>
    </nav>
  );
}

export default CheckoutNavigation;
