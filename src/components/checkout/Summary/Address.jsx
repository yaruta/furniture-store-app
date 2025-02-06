/**
 * The Address component renders a user's address details.
 * It displays the full name, street address, and city information.
 *
 * @param {Object} props - The props passed to the component.
 * @param {string} props.firstName - The first name of the user.
 * @param {string} props.lastName - The last name of the user.
 * @param {string} props.name - The full name or company name to display (optional).
 * @param {string} props.street - The street name of the user's address.
 * @param {string} props.houseNumber - The house number of the user's address.
 * @param {string} props.postcode - The postcode of the user's address.
 * @param {string} props.city - The city of the user's address.
 * @returns {JSX.Element} The rendered address component.
 */
import classes from "./Address.module.css";

function Address({
  firstName,
  lastName,
  name,
  street,
  houseNumber,
  postcode,
  city,
}) {
  return (
    <div className={classes.address}>
      {/* Conditionally render name or full name based on the presence of 'name' */}
      {name && <p>{name}</p>}
      {!name && <p>{`${firstName} ${lastName}`}</p>}
      <p>{`${street} ${houseNumber}`}</p>
      <p>{`${postcode} ${city}`}</p>
    </div>
  );
}

export default Address;
