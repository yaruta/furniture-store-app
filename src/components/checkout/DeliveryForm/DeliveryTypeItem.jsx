/**
 * The DeliveryTypeItem component represents a single delivery option 
 * (such as standard or fast delivery) for the user to select during checkout.
 * It displays the type of delivery and its associated price.
 * 
 * @param {string} id - The unique identifier for the delivery option.
 * @param {string} type - The name/description of the delivery type (e.g., "Standardlieferung").
 * @param {number} price - The price associated with the delivery option.
 * @param {object} props - Additional props passed to the radio input element.
 * @returns {JSX.Element} - A radio button option for selecting the delivery type.
 */
import { currencyFormatter } from "../../../util/formatting";
import classes from "./DeliveryTypeItem.module.css";

function DeliveryTypeItem({ id, type, price, ...props}) {
  return (
    <div className={classes.deliveryType}>
      <input type="radio" id={id} value={id} name="delivery-type" {...props}/>
      <label htmlFor={id}>
        <span>{type}</span>
        <span>{currencyFormatter.format(price)}</span>
      </label>
    </div>
  );
}

export default DeliveryTypeItem;
