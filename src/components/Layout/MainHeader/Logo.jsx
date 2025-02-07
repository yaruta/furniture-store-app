/**
 * Logo component renders the brand's logo as a clickable link.
 * Clicking the logo navigates to the homepage.
 *
 * @module Logo
 * @returns {JSX.Element} - Rendered Logo component with a clickable brand name
 */
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <Link to="/">
        <h1>Möbel-Deko</h1>
      </Link>
    </div>
  );
}

export default Logo;
