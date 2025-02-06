/**
 * The StoreAddressItem component represents a single store pickup location option
 * with its name, price (or "free" if the price is 0), address, and additional information.
 * It displays the store's name, the delivery price (if any), the store's address,
 * and the typical pickup time.
 * 
 * @param {string} id - The unique identifier for the store location.
 * @param {string} name - The name of the store.
 * @param {number} price - The price associated with the store pickup option.
 * @param {string} address - The address of the store where the pickup is available.
 * @param {object} props - Additional props passed to the radio input element.
 * @returns {JSX.Element} - A radio button option for selecting a store pickup location.
 */
import classes from "./StoreAddressItem.module.css";

function StoreAddressItem({ id, name, price, address, ...props }) {
  const formatedPrice = price === 0 && "kostenlos";
  return (
    <div className={classes.pickupType}>
      <input type="radio" id={id} value={id} name="delivery-type" {...props} />
      <label htmlFor={id}>
        <span>{name}</span>
        <span>{formatedPrice}</span>
      </label>
      <p>{address}</p>
      <p>In der Regel innerhalb von 24 Stunden abholbereit.</p>
    </div>
  );
}

export default StoreAddressItem;
