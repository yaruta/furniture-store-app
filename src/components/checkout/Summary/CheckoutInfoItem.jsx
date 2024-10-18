import classes from "./CheckoutInfoItem.module.css";

function CheckoutInfoItem({ title, info, children }) {
  return (
    <div>
      <h4 className={classes.infoHeader}>{title}</h4>
      {info && <p className={classes.info}>{info}</p>}
      {children}
    </div>
  );
}

export default CheckoutInfoItem;
