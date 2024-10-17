import classes from "./CheckoutNavItem.module.css";
import { NavLink } from "react-router-dom";

function CheckoutNavItem({ number, title, path }) {
  return (
    <li className={classes.checkoutItem}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <span className={classes.itemNumber}>{number}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default CheckoutNavItem;
