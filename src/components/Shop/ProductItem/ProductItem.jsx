import classes from "./ProductItem.module.css";

import AddIcon from "../../Icons/AddIcon";
import Button from "../../UI/Button";
import FavItemButton from "./FavItemButton";

function ProductItem({
  name,
  price,
  description,
  id,
  image,
  color,
  collection,
}) {
  return (
    <li className={classes.item}>
      <article>
        <div className={classes["image-section"]}>
          <img src={image} alt="product image" />
          <FavItemButton />
        </div>
        <div className={classes["info-block"]}>
          <div className={classes.info}>
            <h2 className={classes.title}>{name}</h2>
            <p className={classes.price}>{`${(price * 1)
              .toFixed(2)
              .replace(".", ",")}€`}</p>
          </div>
          <div className={classes.actions}>
            <Button className={classes["add-button"]}>
              <AddIcon />
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductItem;
