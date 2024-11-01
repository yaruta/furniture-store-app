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
