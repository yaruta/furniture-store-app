import { useEffect } from "react";
import Header from "../../UI/Header";
import StoreAddressItem from "./StoreAddressItem";

function StoreType({ onPickup }) {
  useEffect(() => {
    onPickup(0);
  }, []);
  
  return (
    <div>
      <Header styleType="type2">Standorte der Geschäfte</Header>
      <div>
        <StoreAddressItem
          id="shop1"
          name="möbel-deko"
          price={0}
          address="Mustermann Str.22, 10000, Berlin"
          defaultChecked
        />
      </div>
    </div>
  );
}

export default StoreType;
