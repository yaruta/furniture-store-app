import { useSelector } from "react-redux";
import classes from "./CheckoutNavigation.module.css";
import CheckoutNavItem from "./CheckoutNavItem";
import Divider from "./Divider";

function CheckoutNavigation() {
  const {userdata, delivery, payment} = useSelector(state => state.checkout);
  return (
    <nav className={classes.checkoutNavigation}>
      <ul>
        <CheckoutNavItem
          path="/checkout/userinfo"
          number={1}
          title="Userinformationen"
          checked={userdata!==null}
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/delivery"
          number={2}
          title="Versand"
          disabled={userdata ? false : true}
          checked={delivery!==null}
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/payment"
          number={3}
          title="Zahlung"
          disabled={userdata && delivery ? false : true}
          checked={payment!==null}
        />
        <Divider />
        <CheckoutNavItem
          path="/checkout/summary"
          number={4}
          title="Zusammenfassung"
          disabled={userdata && delivery && payment ? false : true}
        />
      </ul>
    </nav>
  );
}

export default CheckoutNavigation;
