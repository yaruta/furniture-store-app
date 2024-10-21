import classes from "./CheckoutInfo.module.css";

import { useSelector } from "react-redux";
import Address from "./Address";
import CheckoutInfoItem from "./CheckoutInfoItem";

function CheckoutInfo() {
  const { userdata, delivery, payment } = useSelector(
    (state) => state.checkout
  );
  return (
    <article className={classes.checkoutInfo}>
      {userdata && delivery && payment && (
        <>
          <CheckoutInfoItem
            title="Kontaktinformationen"
            info={userdata.email}
          />
          <CheckoutInfoItem title="Rechnungdaten">
            <Address {...userdata} />
          </CheckoutInfoItem>
          <CheckoutInfoItem
            title="Versandart"
            info={delivery.type === "pickup" ? "Abholung" : "Lieferung"}
          />
          {delivery.type === "delivery" && (
            <CheckoutInfoItem title="Lieferdaten">
              <Address {...userdata} />
            </CheckoutInfoItem>
          )}
          {delivery.type === "pickup" && (
            <CheckoutInfoItem title="Abholadresse">
              <Address
                name="Möbel-Deko"
                street="Mustermann Str."
                houseNumber={22}
                postcode="10000"
                city="Berlin"
              />
            </CheckoutInfoItem>
          )}
          <CheckoutInfoItem
            title="Zahlung"
            info={payment.type === "card" ? "Karte" : "Paypal"}
          />
        </>
      )}
    </article>
  );
}

export default CheckoutInfo;
