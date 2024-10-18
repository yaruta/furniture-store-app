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
