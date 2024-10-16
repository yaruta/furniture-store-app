import classes from "./CtaButton.module.css";
import { Link } from "react-router-dom";

function CtaButton({path, title, typ2, className=""}) {
  return (
    <div className={`${classes.cta}`}>
      <Link to={path} className={`${typ2 ? classes.typ2 : classes.typ1} ${className}`}>{title}</Link>
    </div>
  );
}

export default CtaButton;
