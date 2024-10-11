import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { currencyFormatter } from "../../../util/formatting";
import AddIcon from "../../Icons/AddIcon";
import Button from "../../UI/Button";

function ProductItem({ id, name, collection, price, image, color }) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
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
        <Link to={`/shop/${id}`}>
          <div className={classes["image-section"]}>
            <img src={image} alt="product image" />
          </div>
        </Link>
        <div className={classes["info-block"]}>
          <div className={classes.info}>
            <Link to={`/shop/${id}`}>
              <h2 className={classes.title}>{name}</h2>
            </Link>
            <p className={classes.price}>
              {currencyFormatter.format(price).replace(/\s+/, "")}
            </p>
          </div>
          <div className={classes.actions}>
            <Button
              className={classes["add-button"]}
              onClick={handleAddItemToCart}
            >
              <AddIcon/>
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductItem;
