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
