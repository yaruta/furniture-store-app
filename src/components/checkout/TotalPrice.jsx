import classes from "./TotalPrice.module.css";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../util/formatting";

function TotalPrice() {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className={classes.totalPrice}>
      <div className={classes.priceLine}>
        <span>Zwischensumme</span>
        <span>{currencyFormatter.format(totalPrice)}</span>
      </div>
      <div className={classes.priceLine}>
        <span>Lieferungpreis</span>
        <span>{currencyFormatter.format(3.95)}</span>
      </div>
      <div className={classes.priceLine}>
        <span>Totalpreis</span>
        <span>{currencyFormatter.format(totalPrice + 3.95)}</span>
      </div>
    </div>
  );
}

export default TotalPrice;
