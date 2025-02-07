/**
 * A component to select the quantity of a product to add to the cart.
 * 
 * This component renders an input field of type "number" to allow users
 * to select the quantity of the product. The minimum quantity is 1 and the 
 * maximum is 8. The quantity is updated when the user changes the value.
 * 
 * @module ProductQuantity
 * @param {Object} props - The component props.
 * @param {Function} props.onQuantity - Callback function to handle the selected quantity.
 * 
 * @returns {JSX.Element} The quantity input field component.
 */
import classes from "./ProductQuantity.module.css";
import { useRef } from "react";

function ProductQuantity({onQuantity}) {
  // Reference to the quantity input field
  const quantityRef = useRef();

  /**
   * Handles the change of the quantity input.
   * 
   * This function reads the value from the input field, parses it as an integer, 
   * and passes the value to the parent component through the onQuantity callback.
   */
  function handleChangeQuantity() {
    const quantity = parseInt(quantityRef.current.value);
    onQuantity(quantity);
  }

  return (
    <input
      type="number"
      name="quantity"
      id="quantity"
      ref={quantityRef}
      min={1}
      max={8}
      defaultValue={1}
      className={classes.amount}
      onChange={handleChangeQuantity}
    />
  );
}

export default ProductQuantity;
