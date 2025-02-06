/**
 * A component for displaying a list of products, sorted according to a given sorting type.
 * 
 * This component takes in a list of products, sorts them based on the specified sorting type, 
 * and displays a paginated list of products with animation. It uses Redux to get the favorite items 
 * and marks products as favorites if they are in the user's favorite list.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.products - The list of products to be sorted and displayed.
 * @param {string} props.sortType - The type of sorting to be applied (e.g., "price", "popularity").
 * @param {number} props.startItem - The index of the first item to display on the current page.
 * @param {number} props.numberOfProductsPerPage - The number of products to display per page.
 * 
 * @returns {JSX.Element} The sorted and paginated list of products with animation.
 */
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
   // Sort the products based on the provided sortType
  const sortedProducts = sortProducts({ sortType, products });

  // Slice the products for pagination
  const shownProducts = sortedProducts.slice(
    startItem,
    startItem + numberOfProductsPerPage
  );

  // Retrieve the favorite items from the Redux store
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
        // Check if the product is a favorite
        const isFav =
          favoriteItems.find((favItem) => favItem.id === product.id) !==
          undefined;

        return <ProductItem key={product.id} isFav={isFav} {...product} />;
      })}
    </motion.ul>
  );
}

export default SortedProducts;
