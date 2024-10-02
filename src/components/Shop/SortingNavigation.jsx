import classes from "./SortingNavigation.module.css";

function SortingNavigation() {
  return (
    <section className={classes["products-navigation"]}>
      <div className={classes["sort-products"]}>
        <div>
          <select>
            <option>Beliebheit</option>
            <option>Preis aufsteigend</option>
            <option>Preis ansteigend</option>
          </select>
        </div>
      </div>
      <div>
        <span>25 Artikeln</span>
        <span>Filter</span>
      </div>
    </section>
  );
}

export default SortingNavigation;
