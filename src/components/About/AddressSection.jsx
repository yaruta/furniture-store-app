import classes from "./AddressSection.module.css";

function AddressSection() {
  return (
    <article>
      <div></div>
      <div>
        <div className={classes.address}>
          <h2>Möbel-demo</h2>
          <p>Mustermann Str. </p>
          <p>10000 Berlin</p>
        </div>
        <div className={classes["workinh-hours"]}>
            <h2>Öffnungszeiten</h2>
            <p>Mon-Sam 10:00-20:00Uhr</p>
        </div>
      </div>
    </article>
  );
}

export default AddressSection;
