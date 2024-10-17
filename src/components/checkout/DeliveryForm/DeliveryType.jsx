import { useEffect, useState } from "react";
import Header from "../../UI/Header";
import DeliveryTypeItem from "./DeliveryTypeItem";

function DeliveryType({ onDelivery }) {
  const priceStandart = 3.95;
  const priceFast = 6.95;
  const [price, setPrice] = useState(priceStandart);

  useEffect(() => {
    onDelivery(price);
  }, [price]);

  function handleClick(price) {
    setPrice(price);
  }

  return (
    <div>
      <Header styleType="type2">Versandtart</Header>
      <div>
        <DeliveryTypeItem
          id="standart"
          type="Standardlieferung"
          price={priceStandart}
          onClick={() => handleClick(priceStandart)}
          defaultChecked
        />
        <DeliveryTypeItem
          id="fast"
          type="Schnelle lieferung"
          price={priceFast}
          onClick={() => handleClick(priceFast)}
        />
      </div>
    </div>
  );
}

export default DeliveryType;
