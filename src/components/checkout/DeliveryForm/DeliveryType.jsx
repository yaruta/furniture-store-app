/**
 * The DeliveryType component displays the available delivery methods 
 * (standard or fast) for the user to choose from during the checkout process.
 * It updates the delivery price based on the selected method and notifies the parent component.
 * 
 * @param {function} onDelivery - Callback function to update the delivery price.
 * @returns {JSX.Element} - A section for selecting the delivery method.
 */
import { useEffect, useState } from "react";
import Header from "../../UI/Header";
import DeliveryTypeItem from "./DeliveryTypeItem";
import { useSelector } from "react-redux";

function DeliveryType({ onDelivery }) {
  const { deliveryPrice } = useSelector((state) => state.checkout.delivery);
  const priceStandart = 3.95;
  const priceFast = 6.95;
  const [price, setPrice] = useState(
    deliveryPrice === priceStandart ? priceStandart : priceFast
  );

  useEffect(() => {
    onDelivery(price);
  }, [price]);

  /**
   * Handle the click event for selecting a delivery type and update the price.
   * @param {number} price - The price of the selected delivery option.
   */
  function handleClick(price) {
    setPrice(price);
  }

  return (
    <div>
      <Header styleType="type2">Versandsart</Header>
      <div>
        <DeliveryTypeItem
          id="standart"
          type="Standardlieferung"
          price={priceStandart}
          onClick={() => handleClick(priceStandart)}
          defaultChecked={
            (deliveryPrice && deliveryPrice === priceStandart) || !deliveryPrice
          }
        />
        <DeliveryTypeItem
          id="fast"
          type="Schnelle lieferung"
          price={priceFast}
          onClick={() => handleClick(priceFast)}
          defaultChecked={deliveryPrice && deliveryPrice === priceFast}
        />
      </div>
    </div>
  );
}

export default DeliveryType;
