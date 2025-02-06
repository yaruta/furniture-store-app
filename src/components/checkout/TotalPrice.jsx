/**
 * The TotalPrice component calculates and displays the total price 
 * for the items in the cart, including the delivery price if applicable.
 * 
 * It pulls the `totalPrice` and `delivery` information from the Redux state,
 * and formats them using a utility function (`currencyFormatter`) for display.
 * 
 * @returns {JSX.Element} - The rendered total price section, showing the item 
 *                         subtotal, delivery price (if available), and the total price.
 */
import classes from "./TotalPrice.module.css";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../util/formatting";

function TotalPrice() {
  const { totalPrice } = useSelector((state) => state.cart);
  const { delivery } = useSelector((state) => state.checkout);

  return (
    <div className={classes.totalPrice}>
      <div className={classes.priceLine}>
        <span>Zwischensumme</span>
        <span>{currencyFormatter.format(totalPrice)}</span>
      </div>
      {delivery && (
        <div className={classes.priceLine}>
          <span>Lieferungpreis</span>
          <span>{currencyFormatter.format(delivery.deliveryPrice)}</span>
        </div>
      )}
      {!delivery && (
        <p className={classes.additionalInfo}>
          Versand wird an der Kasse berechnet*
        </p>
      )}
      <div className={classes.priceLine}>
        <span>Totalpreis</span>
        {delivery && (
          <span>
            {currencyFormatter.format(totalPrice + delivery.deliveryPrice)}
          </span>
        )}
        {!delivery && <span>{currencyFormatter.format(totalPrice)}</span>}
      </div>
    </div>
  );
}

export default TotalPrice;
