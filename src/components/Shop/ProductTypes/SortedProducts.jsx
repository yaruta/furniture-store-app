import classes from "./SortedProducts.module.css";
import { useSelector } from "react-redux";
import { sortProducts } from "../../../util/sorting";
import { motion } from "framer-motion";
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
    <motion.ul
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      animate="visible"
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
    </motion.ul>
  );
}

export default SortedProducts;
