import classes from "./ProductDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../../util/http";
import { Link, useParams } from "react-router-dom";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import FavItemButton from "../ProductItem/FavItemButton";
import AddButton from "./AddButton";
import PreviousIcon from "../../Icons/PreviousIcon";
function ProductDetails() {
  const params = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", { id: params.productId }],
    queryFn: ({ signal, queryKey }) => fetchProduct({ signal, ...queryKey[1] }),
  });
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
            <fieldset className={classes.color}>
              <legend>Farbe</legend>
              {Object.values(data.color).map((colorItem, index) => {
                return (
                  <span key={colorItem}>
                    <input
                      type="radio"
                      id={colorItem}
                      name="color"
                      value={colorItem}
                      defaultChecked={index===0}
                    />
                    <label
                      htmlFor={colorItem}
                      style={{ backgroundColor: colorItem }}
                    ></label>
                  </span>
                );
              })}
            </fieldset>
            <input
              type="number"
              min={1}
              max={8}
              defaultValue={1}
              className={classes.amount}
            />
          </div>
          <AddButton>Add to Cart</AddButton>
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
