import classes from "./LinkButton.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LinkButton({ path, title, typ2, className = "", disabled }) {
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
