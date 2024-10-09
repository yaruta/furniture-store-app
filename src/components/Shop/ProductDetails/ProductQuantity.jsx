import classes from "./ProductQuantity.module.css";
import { useRef, useState } from "react";

function ProductQuantity({onQuantity}) {
  const quantityRef = useRef();

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
