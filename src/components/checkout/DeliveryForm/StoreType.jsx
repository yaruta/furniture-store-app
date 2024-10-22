import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "../../../util/http";
import Header from "../../UI/Header";
import StoreAddressItem from "./StoreAddressItem";
import ErrorBlock from "../../UI/ErrorBlock";

function StoreType({ onPickup }) {
  const { data, isError, error } = useQuery({
    queryKey: ["address"],
    queryFn: fetchAddress,
  });

  useEffect(() => {
    onPickup(0);
  }, []);

  return (
    <div>
      <Header styleType="type2">Standorte der Geschäfte</Header>
      <div>
        {data && (
          <StoreAddressItem
            id="shop1"
            name={data.name}
            price={0}
            address={`${data.street} ${data.houseNumber}, ${data.postcode}, ${data.city}`}
            defaultChecked
          />
        )}
        {isError && (
          <ErrorBlock
            title="Die Adresse konnte nicht geladen werden"
            message={
              error.info?.message ||
              "Die Adresse konnte nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
            }
          />
        )}
      </div>
    </div>
  );
}

export default StoreType;
