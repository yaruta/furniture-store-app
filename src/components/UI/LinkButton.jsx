/**
 * A customizable link button that uses React Router's Link component.
 * The button has hover effects and supports two different styles.
 * 
 * @module LinkButton
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.path - The target path for the link.
 * @param {string} props.title - The text to be displayed inside the button.
 * @param {boolean} [props.typ2] - A flag to determine whether to apply the secondary button style.
 * @param {string} [props.className] - Additional CSS class names to be added to the button.
 * @param {boolean} [props.disabled] - Disables the button and prevents navigation when clicked.
 * @returns {JSX.Element} - The rendered link button.
 */
import classes from "./LinkButton.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LinkButton({ path, title, typ2, className = "", disabled }) {
  /**
   * Prevents the link from navigating if the button is disabled.
   * 
   * @param {Event} event - The click event.
   */
  function handleDisabledClick(event) {
    event.preventDefault();
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${classes.cta}`}
    >
      <Link
        to={path}
        className={`${typ2 ? classes.typ2 : classes.typ1} ${className}`}
        onClick={disabled ? handleDisabledClick : undefined}
      >
        {title}
      </Link>
    </motion.div>
  );
}

export default LinkButton;
