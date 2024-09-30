import { useState } from "react";

import classes from "./ProductItem.module.css";
import productImage from "../../assets/images/product-1.png";
import FavoritesIcon from "../Icons/FavoritesIcon";
import AddIcon from "../Icons/AddIcon";
import Button from "../UI/Button";

function ProductItem() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteHover, setIsFavoriteHover] = useState(false);

  function handleStartHoverFavorites() {
    setIsFavoriteHover(true);
  }

  function handleStopHoverFavorites() {
    setIsFavoriteHover(false);
  }

  function handleClickFavorites() {
    setIsFavorite(!isFavorite);
  }

  return (
    <li className={classes["product-item"]}>
      <article>
        <div className={classes["item-image-section"]}>
          <img src={productImage} alt="product image" />
          <button
            className={classes["favorites-icon"]}
            onClick={handleClickFavorites}
            onMouseEnter={handleStartHoverFavorites}
            onMouseLeave={handleStopHoverFavorites}
          >
            <FavoritesIcon color={isFavorite ? "rgb(230, 6, 2)" : "white"} hover={isFavoriteHover} hoverColor="rgb(230, 6, 2)" />
          </button>
        </div>
        <div>
          <h2 className={classes["product-item-header"]}>Header</h2>
          <div className={classes["product-item-info"]}>
            <p className={classes["product-item-price"]}>5,00$</p>
            <div className={classes["product-item-actions"]}>
              <Button><AddIcon /></Button>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductItem;
