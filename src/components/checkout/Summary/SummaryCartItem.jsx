/**
 * The SummaryCartItem component displays detailed information about a single item in the cart.
 * This includes the product's name, collection, quantity, price, total price, color, and image.
 *
 * @module SummaryCartItem
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the item.
 * @param {string} props.collection - The collection the item belongs to.
 * @param {number} props.quantity - The quantity of the item in the cart.
 * @param {number} props.price - The price of a single unit of the item.
 * @param {string} props.image - The URL of the image representing the item.
 * @param {string} props.color - The color of the item.
 * @param {number} props.totalPrice - The total price for the quantity of the item in the cart.
 *
 * @returns {JSX.Element} The rendered SummaryCartItem component displaying the item's details.
 */
import classes from "./SummaryCartItem.module.css";
import { currencyFormatter } from "../../../util/formatting";

function SummaryCartItem({
  name,
  collection,
  quantity,
  price,
  image,
  color,
  totalPrice,
}) {
  
  return (
    <li className={classes.summaryItem}>
      <article>
        <div className={classes.itemImage}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.itemInfo}>
          <div className={classes.header}>
            <h3>{name}</h3>
            <p>
              {currencyFormatter.format(totalPrice)}
            </p>
          </div>
          <div className={classes.details}>
            <span>{`Kollektion: ${collection} /`}</span>
            <span>Farbe:</span>
            <div style={{ backgroundColor: `${color}` }} className={classes.color}/>
            <span>{`/ Anzahl: ${quantity}`}</span>
            <span>{`/ Preis pro Stück: ${currencyFormatter.format(price)}`}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default SummaryCartItem;
