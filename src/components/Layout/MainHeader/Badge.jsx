/**
 * Badge component displays a badge with a value inside it.
 * The badge animates by scaling when rendered.
 *
 * @module Badge
 * @param {Object} props - Component props
 * @param {string|number} props.value - The value to display inside the badge
 * @returns {JSX.Element} - Rendered Badge component with animated scaling effect
 */
import classes from "./Badge.module.css";
import { motion } from "framer-motion";

function Badge({ value }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }} // Animates the scale of the badge (pulsing effect)
      transition={{ duration: 0.3 }} // Transition duration for the scale animation
      key={value} // Unique key based on the value to manage component updates
      className={classes.badge}
    >
      <span>{value}</span>
    </motion.div>
  );
}

export default Badge;
