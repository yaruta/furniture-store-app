/**
 * Footer component displays the footer section of the page with address, social media navigation, and newsletter signup.
 * It fetches the address data using React Query and handles any errors during data retrieval.
 *
 * @module Footer
 * @returns {JSX.Element} - Rendered Footer component
 */
import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "../../../util/http";
import classes from './Footer.module.css';
import Address from "../../checkout/Summary/Address";
import ErrorBlock from "../../UI/ErrorBlock";
import SocialMediaNavigation from "./SocialMediaNavigation";
import NewsletterSignup from "../../Newletter/NewsletterSignup";

export default function Footer() {
  // Fetch the address data using React Query
  const { data, isError, error } = useQuery({
    queryKey: ["address"], // Unique query key for address data
    queryFn: fetchAddress, // Function to fetch the address data
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.address}>
        {/* If address data is available, render the Address component */}
        {data && (
          <Address
            name={data.name}
            street={data.street}
            houseNumber={data.houseNumber}
            postcode={data.postcode}
            city={data.city}
          />
        )}
        {/* If there is an error in fetching the address, show an error message */}
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
      <SocialMediaNavigation />
      <NewsletterSignup />
    </footer>
  );
}
