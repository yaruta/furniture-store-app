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
