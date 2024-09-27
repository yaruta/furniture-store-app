import classes from "./ProductsNavigation.module.css";

function ProductsNavigation() {
  return (
    <section className={classes["products-navigation"]}>
      <div className={classes["sort-products"]}>
        <div>
          <select>
            <option>6</option>
            <option>9</option>
            <option>12</option>
          </select>
        </div>
        <div>
          <select>
            <option>Beliebheit</option>
            <option>Preis aufsteigend</option>
            <option>Preis ansteigend</option>
          </select>
        </div>
      </div>
      <div>
        <span>25 Artikel</span>
        <span>Filter</span>
      </div>
    </section>
  );
}

export default ProductsNavigation;
