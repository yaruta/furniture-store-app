import ProductTypeNavigation from "./ProductTypeNavigation";
import classes from "./SortingNavigation.module.css";

function SortingNavigation({onSort}) {

  function handleSortTypeChange(event) {
    const sortType = event.target.value;
    onSort(sortType);
  }

  return (
    <section className={classes["products-navigation"]}>
      <ProductTypeNavigation />
      <div className={classes["sort-products"]}>
        <select name="sort-type" onChange={handleSortTypeChange}>
          <option value="new" defaultChecked>Neu</option>
          <option value="increasing">Preis aufsteigend</option>
          <option value="decreasing">Preis ansteigend</option>
        </select>
      </div>
    </section>
  );
}

export default SortingNavigation;
