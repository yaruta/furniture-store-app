import classes from "./Button.module.css";

function Button({ children, className, ...props }) {
  return (
    <button className={`${classes["icon-button"]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
