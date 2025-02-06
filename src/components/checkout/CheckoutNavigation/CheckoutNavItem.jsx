/**
 * The CheckoutNavItem component represents a single step in the checkout process navigation.
 * 
 * It renders a list item containing a navigation link (`NavLink`) to the provided `path`. 
 * The component dynamically styles the link based on whether it is active or not, using the `active` class.
 * Additionally, it displays a number and title for each step, with optional styling to indicate if the step has been completed (via the `checked` prop).
 * 
 * - The `number` prop is used to display the step number.
 * - The `title` prop is used to display the name of the step.
 * - The `path` prop determines the URL the link will navigate to.
 * - The `disabled` prop prevents navigation if set to `true`, by triggering the `handleNoClick` function.
 * - The `checked` prop is used to apply a special style indicating that the step has been completed (if `true`).
 * 
 * @param {Object} props - The props object.
 * @param {number} props.number - The step number to display.
 * @param {string} props.title - The title of the step.
 * @param {string} props.path - The path the navigation item links to.
 * @param {boolean} props.disabled - Whether the navigation item is disabled and should prevent navigation.
 * @param {boolean} [props.checked=false] - Whether the step is considered completed, which adds a checked style.
 * 
 * @returns {JSX.Element} - The rendered checkout navigation item.
 */
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
