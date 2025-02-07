/**
 * Component for navigating through product pages.
 *
 * @module ProductsPagesNavigation
 * @param {Object} props - Component props.
 * @param {number} [props.numberOfProductsPerPage] - Number of products displayed per page.
 * @param {Function} props.onPage - Function to handle page changes.
 * @param {number} props.quantity - Total number of products available.
 * @param {number} props.activePage - Currently active page number.
 * @returns {JSX.Element} The rendered pagination component.
 */
import classes from "./ProductsPagesNavigation.module.css";

function ProductsPagesNavigation({
  numberOfProductsPerPage = 6,
  onPage,
  quantity,
  activePage,
}) {
  /**
   * Calculates the total number of pages based on the product quantity.
   */
  const numberOfPages = Math.ceil(quantity / numberOfProductsPerPage);
  /**
   * Creates an array of page numbers for rendering.
   */
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  /**
   * Renders the pagination buttons, including previous and next page buttons.
   */
  let content = (
    <>
      {activePage !== 1 && (
        <li>
          <button onClick={() => onPage(activePage - 1)}>{"<"}</button>
        </li>
      )}
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPage(page)}
            className={activePage === page ? classes.active : undefined}
          >
            {page}
          </button>
        </li>
      ))}
      {activePage !== pages.length && (
        <li>
          <button onClick={() => onPage(activePage + 1)}>{">"}</button>
        </li>
      )}
    </>
  );

  return (
    <div className={classes.navigation}>
      <ul className={classes["page-list"]}>{content}</ul>
      <p>{quantity} Artikeln</p>
    </div>
  );
}

export default ProductsPagesNavigation;
