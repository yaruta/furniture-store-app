/**
 * A button component used for adding an item to the cart.
 * 
 * This component renders a button with customizable text (children) and applies 
 * styles from the AddButton module. It spreads all other passed props onto 
 * the button element, such as event handlers or custom attributes.
 * 
 * @module AddButton
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button (e.g., text).
 * 
 * @returns {JSX.Element} The button component.
 */
import classes from "./AddButton.module.css";

function AddButton({children, ...props}) {
  return (
    <button className={classes.button} {...props}>
        {children}
    </button>
  );
}

export default AddButton;
