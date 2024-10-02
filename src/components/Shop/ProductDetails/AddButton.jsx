import classes from "./AddButton.module.css";

function AddButton({children}) {
  return (
    <button className={classes.button}>
        {children}
    </button>
  );
}

export default AddButton;
