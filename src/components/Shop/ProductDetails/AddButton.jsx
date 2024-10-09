import classes from "./AddButton.module.css";

function AddButton({children, ...props}) {
  return (
    <button className={classes.button} {...props}>
        {children}
    </button>
  );
}

export default AddButton;
