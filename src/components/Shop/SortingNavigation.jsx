import ProductTypeNavigation from "./ProductTypeNavigation";
import classes from "./SortingNavigation.module.css";

function SortingNavigation() {
  return (
    <section className={classes["products-navigation"]}>
      <ProductTypeNavigation />
      <div className={classes["sort-products"]}>
          <select>
            <option>Preis aufsteigend</option>
            <option>Preis ansteigend</option>
          </select>
      </div>
    </section>
  );
}

export default SortingNavigation;
