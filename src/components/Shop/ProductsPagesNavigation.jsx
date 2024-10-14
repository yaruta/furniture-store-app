import classes from "./ProductsPagesNavigation.module.css";

function ProductsPagesNavigation({
  numberOfProductsPerPage = 6,
  onPage,
  quantity,
  activePage,
}) {
  const numberOfPages = Math.ceil(quantity / numberOfProductsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

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
