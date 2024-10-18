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
      {name && <p>{name}</p>}
      {!name && <p>{`${firstName} ${lastName}`}</p>}
      <p>{`${street} ${houseNumber}`}</p>
      <p>{`${postcode} ${city}`}</p>
    </div>
  );
}

export default Address;
