import classes from "./SortedProducts.module.css";

import { sortProducts } from "../../../util/sorting";
import ProductItem from "../ProductItem/ProductItem";

function SortedProducts({ products, sortType, startItem, numberOfProductsPerPage }) {
  const sortedProducts = sortProducts({ sortType, products });
  const shownProducts = sortedProducts.slice(startItem, startItem+numberOfProductsPerPage);

  return (
    <ul id={classes.products} className={numberOfProductsPerPage === 4 ? classes.prodX4 : classes.prodX6}>
      {shownProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default SortedProducts;
