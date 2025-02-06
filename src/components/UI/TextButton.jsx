/**
 * A button component that provides hover animation and supports different styles.
 * It accepts different props such as style type and custom class names for customization.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content (text or elements) inside the button.
 * @param {string} [props.className] - Optional additional class names for custom styling.
 * @param {string} [props.styleType] - Optional style type that defines the button's appearance.
 * @param {React.MouseEventHandler} [props.onClick] - Optional event handler for the click event.
 * @returns {JSX.Element} - The rendered button with hover animation and style customization.
 */
import classes from "./TextButton.module.css";
import { motion } from "framer-motion";

function TextButton({ children, className = "", styleType = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      {...props}
      className={`${classes.textButton} ${className} ${
        styleType === "type2" ? classes.type2 : ""
      }`}
    >
      {children}
    </motion.button>
  );
}

export default TextButton;
