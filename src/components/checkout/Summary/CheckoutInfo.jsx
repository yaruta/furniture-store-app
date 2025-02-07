/**
 * The CheckoutInfo component displays the user's checkout information.
 * It includes contact details, invoice address, delivery method, and payment type.
 * 
 * The component conditionally renders based on the availability of userdata, delivery, and payment.
 *
 * @module CheckoutInfo
 * @returns {JSX.Element} The rendered checkout information component.
 */
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
            {/* Render contact information */}
            <CheckoutInfoItem
              title="Kontaktinformationen"
              info={userdata.email}
            />
            {/* Render invoice data */}
            <CheckoutInfoItem title="Rechnungdaten">
              <Address {...userdata} />
            </CheckoutInfoItem>
            {/* Render delivery method */}
            <CheckoutInfoItem
              title="Versandart"
              info={delivery.type === "pickup" ? "Abholung" : "Lieferung"}
            />
            {/* Conditionally render delivery address if the delivery type is "delivery" */}
            {delivery.type === "delivery" && (
              <CheckoutInfoItem title="Lieferdaten">
                <Address {...userdata} />
              </CheckoutInfoItem>
            )}
            {/* Conditionally render pickup address if the delivery type is "pickup" */}
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
            {/* Render payment type */}
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
