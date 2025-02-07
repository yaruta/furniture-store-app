/**
 * A button component that applies motion effects and custom styling.
 * The button scales up when hovered.
 * 
 * @module Button
 * @param {object} props - The properties passed to the button component.
 * @param {React.ReactNode} children - The content to be displayed inside the button (usually text or icons).
 * @param {string} [className] - Optional additional class names to be added to the button.
 * @returns {JSX.Element} - The rendered button component with hover effects.
 */
import classes from "./Button.module.css";
import { motion } from "framer-motion";

function Button({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring" }}
      className={`${classes["icon-button"]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
