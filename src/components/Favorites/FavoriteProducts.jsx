import { useSelector } from "react-redux";
import classes from "./FavoriteProducts.module.css";
import ProductItem from "../Shop/ProductItem/ProductItem";
import PageTitle from "../UI/PageTitle";

function FavoriteProducts() {
  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <section style={{marginBottom: '5rem'}}>
      <PageTitle title="Lieblingsprodukte">
        Nulla blandit congue neque et cursus. Mauris vel sapien varius leo
        laoreet feugiat id quis enim. Ut quis leo facilisis, interdum odio a,
        laoreet augue. Sed convallis quis mi vitae interdum. Pellentesque at
        dapibus diam. Maecenas placerat ornare mauris a ultrices. Suspendisse ac
        risus et metus scelerisque bibendum vitae vel augue. Duis eget magna
        vitae elit dignissim efficitur. Proin ut lectus nec felis condimentum
        pharetra vel in felis.
      </PageTitle>
      {favoriteItems.length > 0 ? (
        <ul className={classes.favorites}>
          {favoriteItems.map((item) => {
            return <ProductItem key={item.id} isFav={true} {...item} />;
          })}
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
