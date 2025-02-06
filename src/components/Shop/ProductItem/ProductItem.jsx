/**
 * A component that displays individual product item, including its image, title, price, 
 * and options to add the product to the cart or favorites.
 * 
 * This component also handles adding the product to the cart and toggling the favorite status 
 * by dispatching actions to the Redux store.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique identifier of the product.
 * @param {string} props.name - The name of the product.
 * @param {string} props.collection - The collection to which the product belongs.
 * @param {number} props.price - The price of the product.
 * @param {string} props.image - The URL of the product image.
 * @param {Object} props.color - The available colors for the product.
 * @param {boolean} props.isFav - A flag indicating whether the product is in the user's favorites.
 * 
 * @returns {JSX.Element} The rendered product item with information and action buttons.
 */
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favoritesActions } from "../../../store/favorites-slice";
import { currencyFormatter } from "../../../util/formatting";
import { motion } from "framer-motion";
import AddIcon from "../../Icons/AddIcon";
import Button from "../../UI/Button";
import FavItemButton from "./FavItemButton";

function ProductItem({
  id,
  name,
  collection,
  price,
  image,
  color,
  isFav,
}) {
  const dispatch = useDispatch();

  /**
   * Handles adding the product to the shopping cart.
   */
  function handleAddItemToCart() {
    dispatch(
      cartActions.addItem({
        id,
        name,
        collection,
        price,
        image,
        quantity: 1,
        color: Object.values(color)[0], // Using the first available color as the selected color
      })
    );
  }

  /**
   * Handles toggling the product's favorite status.
   */
  function handleAddToFavorite() {
    dispatch(
      favoritesActions.toggleFavorite({
        id,
        name,
        collection,
        price,
        image,
        color,
      })
    );
  }

  return (
    <li className={classes.item}>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
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
            <FavItemButton onFavorite={handleAddToFavorite} isFav={isFav} />
            <Button
              className={classes["add-button"]}
              onClick={handleAddItemToCart}
            >
              <AddIcon />
            </Button>
          </div>
        </div>
      </motion.article>
    </li>
  );
}

export default ProductItem;
