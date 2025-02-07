/**
 * CartItem component represents an individual item in the shopping cart.
 * It displays the item details, quantity, price, and allows the user to remove or update the quantity of the item.
 * 
 * @module CartItem
 * @param {Object} props - Component properties
 * @param {string} props.id - Unique identifier for the cart item
 * @param {string} props.name - Name of the product
 * @param {string} props.collection - Collection to which the product belongs
 * @param {number} props.quantity - Quantity of the product in the cart
 * @param {number} props.price - Price of the product per unit
 * @param {string} props.image - URL of the product image
 * @param {string} props.color - Color of the product
 * @param {number} props.totalPrice - Total price for the product (quantity * price)
 * @returns {JSX.Element} - The rendered cart item
 */
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";
import { motion } from "framer-motion";

function CartItem({
  id,
  name,
  collection,
  quantity,
  price,
  image,
  color,
  totalPrice,
}) {
  const dispatch = useDispatch();

  /**
   * Removes the item from the cart by dispatching the removeItem action with the item's id and color.
   */
  function handleRemoveItemFromCart() {
    dispatch(cartActions.removeItem({ id, color }));
  }

  /**
   * Updates the quantity of the item in the cart by dispatching the updateQuantity action with the updated value.
   * 
   * @param {Object} event - The change event triggered when the quantity is updated
   */
  function handleUpdateQuantity(event) {
    const updatedQuantity = event.target.value;
    dispatch(cartActions.updateQuantity({ id, color, updatedQuantity }));
  }

  return (
    <li className={classes.cartItem}>
      <article>
        <div className={classes.itemImage}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.itemInfo}>
          <div className={classes.header}>
            <h3>{name}</h3>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={handleRemoveItemFromCart}
            >
              X
            </motion.button>
          </div>
          <p className={classes.collection}>{collection}</p>
          <div className={classes.details}>
            <div style={{ backgroundColor: `${color}` }} />
            <motion.select
              name="quantity"
              whileHover={{ scale: 1.2 }}
              onChange={handleUpdateQuantity}
              className={classes.quantity}
            >
              <option defaultChecked>{quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </motion.select>
            <span>{` x ${currencyFormatter.format(price)}`}</span>
          </div>
          <p className={classes.price}>
            {currencyFormatter.format(totalPrice)}
          </p>
        </div>
      </article>
    </li>
  );
}

export default CartItem;
