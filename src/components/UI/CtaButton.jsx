import classes from "./CtaButton.module.css";
import { Link } from "react-router-dom";

function CtaButton({path, title}) {
  return (
    <div className={classes.cta}>
      <Link to={path}>{title}</Link>
    </div>
  );
}

export default CtaButton;
