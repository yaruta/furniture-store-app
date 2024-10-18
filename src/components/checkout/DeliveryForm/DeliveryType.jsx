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
