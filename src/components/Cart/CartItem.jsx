import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";

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

  function handleRemoveItemFromCart() {
    dispatch(cartActions.removeItem({id, color}));
  }

  function handleUpdateQuantity(event) {
    const updatedQuantity = event.target.value;
    dispatch(cartActions.updateQuantity({id, color, updatedQuantity}));
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
            <button onClick={handleRemoveItemFromCart}>X</button>
          </div>
          <p className={classes.collection}>{collection}</p>
          <div className={classes.details}>
            <div style={{ backgroundColor: `${color}` }} />
            <select name="quantity" onChange={handleUpdateQuantity} className={classes.quantity}>
              <option defaultChecked>{quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
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
