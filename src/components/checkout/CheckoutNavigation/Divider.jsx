/**
 * The `Divider` component is a simple UI element that renders a horizontal divider line.
 * It is used to separate content visually, providing a clear visual distinction between sections.
 * 
 * @returns {JSX.Element} - The rendered divider element.
 */
import classes from "./Divider.module.css";

function Divider() {
  return <div className={classes.divider} />;
}

export default Divider;
