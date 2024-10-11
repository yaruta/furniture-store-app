import classes from "./SortedProducts.module.css";

import { sortProducts } from "../../../util/sorting";
import ProductItem from "../ProductItem/ProductItem";

function SortedProducts({ products, sortType }) {
  const sortedProducts = sortProducts({ sortType, products });

  return (
    <ul id={classes.products}>
      {sortedProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default SortedProducts;
