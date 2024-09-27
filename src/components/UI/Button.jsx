import classes from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button className={classes["button-icon"]} {...props}>
      {children}
    </button>
  );
}

export default Button;
