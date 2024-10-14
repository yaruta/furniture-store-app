import GridIcon4 from "../Icons/GridIcon4";
import GridIcon9 from "../Icons/GridIcon9";
import ProductTypeNavigation from "./ProductTypeNavigation";
import classes from "./SortingNavigation.module.css";

function SortingNavigation({ onSort, onGrid }) {
  function handleSortTypeChange(event) {
    const sortType = event.target.value;
    onSort(sortType);
  }

  return (
    <section className={classes["products-navigation"]}>
      <ProductTypeNavigation />

      <div className={classes["sort-products"]}>
        <select name="sort-type" onChange={handleSortTypeChange}>
          <option value="new" defaultChecked>
            Neu
          </option>
          <option value="increasing">Preis aufsteigend</option>
          <option value="decreasing">Preis ansteigend</option>
        </select>
        <div className={classes.grid}>
          <button onClick={() => onGrid(4)}>
            <GridIcon4 />
          </button>
          <button onClick={() => onGrid(6)}>
            <GridIcon9 />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SortingNavigation;
