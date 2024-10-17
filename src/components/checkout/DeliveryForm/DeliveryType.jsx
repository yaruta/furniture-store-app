import Header from "../../UI/Header";
import DeliveryTypeItem from "./DeliveryTypeItem";

function DeliveryType() {
  return (
    <div>
      <Header styleType="type2">Versandtart</Header>
      <div>
        <DeliveryTypeItem
          id="standart"
          type="Standardlieferung"
          price={3.95}
          defaultChecked
        />
        <DeliveryTypeItem id="fast" type="Schnelle lieferung" price={6.95} />
      </div>
    </div>
  );
}

export default DeliveryType;
