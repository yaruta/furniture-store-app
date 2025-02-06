/**
 * The `CheckoutNavigation` component renders the navigation bar for the checkout process.
 * 
 * It uses the Redux `checkout` state to determine the status of each step (userdata, delivery, payment),
 * and dynamically updates the navigation items to reflect whether each step is completed or not.
 * 
 * - The first item ("Userinformationen") is always enabled.
 * - The second item ("Versand") is only enabled if user information is provided.
 * - The third item ("Zahlung") is enabled only when both user information and delivery details are provided.
 * - The final item ("Zusammenfassung") becomes enabled only when all prior steps are completed.
 * 
 * @returns {JSX.Element} - The rendered checkout navigation bar, with items representing each checkout step.
 */
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
