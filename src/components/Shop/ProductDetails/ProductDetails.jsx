import classes from "./ProductDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../../util/http";
import { Link, useParams } from "react-router-dom";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import FavItemButton from "../ProductItem/FavItemButton";
import AddButton from "./AddButton";
import PreviousIcon from "../../Icons/PreviousIcon";
import ProductColor from "./ProductColor";
import ProductQuantity from "./ProductQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

function ProductDetails() {
  const dispatch = useDispatch();

  const params = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", { id: params.productId }],
    queryFn: ({ signal, queryKey }) => fetchProduct({ signal, ...queryKey[1] }),
  });

  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function handleSelectColor(color) {
    setSelectedColor(color);
  }

  function handleSelectQuantity(quantity) {
    setSelectedQuantity(quantity);
  }

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
              <FavItemButton isDetails />
            </div>
            <p className={classes.collection}>{data.collection}</p>
            <p className={classes.price}>
              <span>{`${(data.price * 1)
                .toFixed(2)
                .replace(".", ",")}€ `}</span>
              <span>inkl. MwSt</span>
            </p>
            <form action="">
              <ProductColor colors={data.color} onColor={handleSelectColor} />
              <ProductQuantity onQuantity={handleSelectQuantity} />
            </form>
          </div>
          <AddButton onClick={handleAddItemToCart}>Add to Cart</AddButton>
          <p className={classes.description}>{data.description}</p>
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
    </>
  );
}

export default ProductDetails;
