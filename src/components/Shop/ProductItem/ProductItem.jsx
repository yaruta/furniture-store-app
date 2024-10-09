import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

import AddIcon from "../../Icons/AddIcon";
import Button from "../../UI/Button";
import FavItemButton from "./FavItemButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { currencyFormatter } from "../../../util/formatting";

function ProductItem({ id, name, collection, price, image, color }) {
  const dispatch = useDispatch();

  function addItemToCart() {
    dispatch(
      cartActions.addItem({
        id,
        name,
        collection,
        price,
        image,
        quantity: 1,
        color: Object.values(color)[0],
      })
    );
  }

  return (
    <li className={classes.item}>
      <article>
        <div className={classes["image-section"]}>
          <img src={image} alt="product image" />
          <FavItemButton />
        </div>
        <div className={classes["info-block"]}>
          <div className={classes.info}>
            <Link to={`/shop/${id}`}>
              <h2 className={classes.title}>{name}</h2>
            </Link>
            <p className={classes.price}>{currencyFormatter.format(price).replace(/\s+/, "") }</p>
          </div>
          <div className={classes.actions}>
            <Button className={classes["add-button"]} onClick={addItemToCart}>
              <AddIcon />
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductItem;
