
/**
 * A component representing a new product item in the product list.
 * 
 * Displays product image, collection, and name. Shows additional information when hovered over.
 * 
 * @module NewProductItem
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique identifier for the product.
 * @param {string} props.name - The name of the product.
 * @param {string} props.collection - The collection to which the product belongs.
 * @param {string} props.image - The image URL of the product.
 * 
 * @returns {JSX.Element} The new product item element.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewProductItem.module.css";

function NewProductItem({id, name, collection, image}) {
  /**
   * State to manage the hover effect.
   * @type {[boolean, function]} - The hover state and its setter function.
   */
  const [isHover, setIsHover] = useState(false);

  /**
   * Sets the hover state to true when mouse enters.
   */
  function handleStartHover() {
    setIsHover(true);
  }

  /**
   * Sets the hover state to false when mouse leaves.
   */
  function handleStopHover() {
    setIsHover(false);
  }

  return (
    <li className={classes["new-item"]}>
      <Link
        to={`/shop/${id}`}
        onMouseEnter={handleStartHover}
        onMouseLeave={handleStopHover}
      >
        <div className={classes["item-image"]}>
          <img src={image} alt={name} />
          <span className={classes["new-badge"]}>New</span>
        </div>
        {isHover && (
          <div className={classes["item-info"]}>
            <h2>{collection}</h2>
            <p>{name}</p>
          </div>
        )}
      </Link>
    </li>
  );
}

export default NewProductItem;
