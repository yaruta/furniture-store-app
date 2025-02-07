/**
 * Component for sorting and grid selection in the product listing.
 *
 * @module SortingNavigation
 * @param {Object} props - The component props.
 * @param {Function} props.onSort - Function to handle sorting selection.
 * @param {Function} props.onGrid - Function to handle grid layout selection.
 * @returns {JSX.Element} The sorting and grid selection component.
 */
import GridIcon4 from "../Icons/GridIcon4";
import GridIcon9 from "../Icons/GridIcon9";
import ProductTypeNavigation from "./ProductTypeNavigation";
import classes from "./SortingNavigation.module.css";

function SortingNavigation({ onSort, onGrid }) {
  /**
   * Handles changes in the sorting selection.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The select change event.
   */
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
