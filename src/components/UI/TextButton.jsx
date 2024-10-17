import classes from "./TextButton.module.css";

function TextButton({ children, className = "", styleType = "", ...props }) {
  return (
    <button
      {...props}
      className={`${classes.textButton} ${className} ${
        styleType === "type2" ? classes.type2 : ""
      }`}
    >
      {children}
    </button>
  );
}

export default TextButton;
