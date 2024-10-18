import classes from "./CheckoutNavItem.module.css";
import { NavLink } from "react-router-dom";

function CheckoutNavItem({ number, title, path, disabled, checked=false }) {
    function handleNoClick(event) {
        event.preventDefault();
    }
  return (
    <li className={classes.checkoutItem}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={disabled && handleNoClick}
      >
        <span className={`${classes.itemNumber} ${checked ? classes.checked : undefined}`}>{number}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default CheckoutNavItem;
