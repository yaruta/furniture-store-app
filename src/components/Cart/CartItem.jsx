import classes from "./CartItem.module.css";
import cartImage from "../../assets/images/product-1.png";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

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

  function removeItemFromCart() {
    dispatch(cartActions.removeItem(id));
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
            <button onClick={removeItemFromCart}>X</button>
          </div>
          <p className={classes.collection}>{collection}</p>
          <p className={classes.color}>{`Color: ${color}`}</p>
          <p className={classes.quantity}>{`Qty: ${quantity}`}</p>
          <p className={classes.price}>{`${totalPrice}$`}</p>
        </div>
      </article>
    </li>
  );
}

export default CartItem;
