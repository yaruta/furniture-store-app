import { useSelector } from "react-redux";
import classes from "./FavoriteProducts.module.css";
import ProductItem from "../Shop/ProductItem/ProductItem";
import PageTitle from "../UI/PageTitle";

function FavoriteProducts() {
  const items = useSelector((state) => state.favorites.items);

  return (
    <section>
      <PageTitle>Lieblingsprodukte</PageTitle>
      {items.length > 0 ? (
        <ul className={classes.favorites}>
          {items.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>
          Es gibt keine hinzugefügten Elemente im Favoriten.
        </p>
      )}
    </section>
  );
}

export default FavoriteProducts;
