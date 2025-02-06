/**
 * A simple divider component that visually separates content with an "or" text in the middle.
 * It is commonly used for separating two sections, like in forms or options.
 * 
 * @returns {JSX.Element} - The rendered divider component.
 */
import classes from './Divider.module.css';

function Divider() {
  return (
    <p className={classes.divider}>
      <span></span> {/* Left side of the divider line */}
      <span>or</span> {/* Text in the middle of the divider */}
      <span></span> {/* Right side of the divider line */}
    </p>
  );
}

export default Divider;
