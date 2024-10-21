import classes from "./SortedProducts.module.css";
import { useSelector } from "react-redux";
import { sortProducts } from "../../../util/sorting";
import ProductItem from "../ProductItem/ProductItem";

function SortedProducts({
  products,
  sortType,
  startItem,
  numberOfProductsPerPage,
}) {
  const sortedProducts = sortProducts({ sortType, products });
  const shownProducts = sortedProducts.slice(
    startItem,
    startItem + numberOfProductsPerPage
  );

  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <ul
      id={classes.products}
      className={
        numberOfProductsPerPage === 4 ? classes.prodX4 : classes.prodX6
      }
    >
      {shownProducts.map((product) => {
        const isFav =
          favoriteItems.find((favItem) => favItem.id === product.id) !==
          undefined;

        return <ProductItem key={product.id} isFav={isFav} {...product} />;
      })}
    </ul>
  );
}

export default SortedProducts;
