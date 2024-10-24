import { useQuery } from "@tanstack/react-query";
import { fetchAddress } from "../../../util/http";
import classes from './Footer.module.css';
import Address from "../../checkout/Summary/Address";
import ErrorBlock from "../../UI/ErrorBlock";
import SocialMediaNavigation from "./SocialMediaNavigation";
import NewsletterSignup from "../../Newletter/NewsletterSignup";

export default function Footer() {
  const { data, isError, error } = useQuery({
    queryKey: ["address"],
    queryFn: fetchAddress,
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.address}>
        {data && (
          <Address
            name={data.name}
            street={data.street}
            houseNumber={data.houseNumber}
            postcode={data.postcode}
            city={data.city}
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
      <SocialMediaNavigation />
      <NewsletterSignup />
    </footer>
  );
}
