/**
 * The StoreType component fetches and displays a store's pickup location
 * with its address, price, and availability. It uses the `useQuery` hook from
 * `@tanstack/react-query` to fetch the store's address data from an API.
 * 
 * It also handles any errors that occur while fetching the address and
 * displays an error message if necessary.
 * 
 * @param {function} onPickup - Callback function passed as a prop to notify the parent
 * that the price for the pickup option has been updated.
 * @returns {JSX.Element} - The rendered component with store address details or an error block.
 */
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
    // Default price of 0 for the store pickup
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
