
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewProductItem.module.css";
import productImage from "../../../assets/images/product-1.png";

function NewProductItem() {
  const [isHover, setIsHover] = useState(false);

  function handleStartHover() {
    setIsHover(true);
  }

  function handleStopHover() {
    setIsHover(false);
  }

  return (
    <li className={classes["new-item"]}>
      <Link
        to="/shop"
        onMouseEnter={handleStartHover}
        onMouseLeave={handleStopHover}
      >
        <div className={classes["item-image"]}>
          <img src={productImage} alt="product image" />
          <span className={classes["new-bage"]}>New</span>
        </div>
        {isHover && (
          <div className={classes["item-info"]}>
            <h2>Kollektion 1</h2>
            <p>Header</p>
          </div>
        )}
      </Link>
    </li>
  );
}

export default NewProductItem;
