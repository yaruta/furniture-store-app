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
