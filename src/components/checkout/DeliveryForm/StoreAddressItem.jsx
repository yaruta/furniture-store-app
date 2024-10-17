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
