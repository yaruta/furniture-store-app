/**
 * A component to display the detailed information of a product.
 * 
 * Fetches product data using React Query and allows users to select color, quantity,
 * and add the product to the cart or favorites.
 *
 * @module ProductDetails
 * @returns {JSX.Element} The product details page content.
 */
import classes from "./ProductDetails.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../../util/http";
import { Link, useParams } from "react-router-dom";
import { favoritesActions } from "../../../store/favorites-slice";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import FavItemButton from "../ProductItem/FavItemButton";
import AddButton from "./AddButton";
import PreviousIcon from "../../Icons/PreviousIcon";
import ProductColor from "./ProductColor";
import ProductQuantity from "./ProductQuantity";
import { currencyFormatter } from "../../../util/formatting";

function ProductDetails() {
  const dispatch = useDispatch();

  // Retrieve the product ID from URL params
  const params = useParams();

  // Access favorite items from the Redux store
  const favoriteItems = useSelector((state) => state.favorites.items);
  // Check if the current product is already in favorites
  const isFav =
    favoriteItems.find((item) => item.id === params.productId) !== undefined;

  // Fetch product data from API using React Query
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", { id: params.productId }],
    queryFn: ({ signal, queryKey }) => fetchProduct({ signal, ...queryKey[1] }),
  });

  // State for selected color and quantity
  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  /**
   * Handles the selection of a color.
   * @param {string} color - The selected color.
   */
  function handleSelectColor(color) {
    setSelectedColor(color);
  }

  /**
   * Handles the selection of a quantity.
   * @param {number} quantity - The selected quantity.
   */
  function handleSelectQuantity(quantity) {
    setSelectedQuantity(quantity);
  }

  /**
   * Adds the current product to the cart.
   */
  function handleAddItemToCart() {
    dispatch(
      cartActions.addItem({
        id: data.id,
        name: data.name,
        collection: data.collection,
        price: data.price,
        image: data.image,
        quantity: selectedQuantity,
        color: selectedColor,
      })
    );
  }

  /**
   * Toggles the product in the favorites list.
   */
  function handleAddToFavorite() {
    dispatch(
      favoritesActions.toggleFavorite({
        id: data.id,
        name: data.name,
        collection: data.collection,
        price: data.price,
        image: data.image,
        color: data.color,
      })
    );
  }

  let content;
  if (isPending) {
    content = (
      <PageContent title="Fetching...">
        <p>Fetching item...</p>
      </PageContent>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Produkt kann nicht geladen werden"
        message={
          error.info?.message ||
          "Produkt kann nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }
  if (data && !isError) {
    content = (
      <>
        <div className={classes["item-details-column"]}>
          <img src={data.image} alt="Image" />
        </div>
        <div className={classes["item-details-column"]}>
          <div className={classes["info-section"]}>
            <div className={classes.header}>
              <h2>{data.name}</h2>
              <FavItemButton onFavorite={handleAddToFavorite} isFav={isFav} />
            </div>
            <p className={classes.collection}>{data.collection}</p>
            <p className={classes.price}>
              <span>
                {currencyFormatter.format(data.price).replace(/\s+/, "")}
              </span>
              <span>{` inkl. MwSt`}</span>
            </p>
            <form action="">
              <ProductColor colors={data.color} onColor={handleSelectColor} />
              <ProductQuantity onQuantity={handleSelectQuantity} />
            </form>
          </div>
          <AddButton onClick={handleAddItemToCart}>Add to Cart</AddButton>
        </div>
      </>
    );
  }

  return (
    <>
      <section className={classes["item-details"]}>
        <Link to="../" className={classes.back}>
          <PreviousIcon />
        </Link>
        {content}
      </section>
      {data && <p className={classes.description}>{data.description}</p>}
    </>
  );
}

export default ProductDetails;
