import classes from "./Badge.module.css";
import { motion } from "framer-motion";

function Badge({ value }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3 }}
      key={value}
      className={classes.badge}
    >
      <span>{value}</span>
    </motion.div>
  );
}

export default Badge;
