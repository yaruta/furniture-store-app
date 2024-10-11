import classes from "./Products.module.css";

import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../util/http";

import ProductItem from "./ProductItem/ProductItem";
import SortingNavigation from "./SortingNavigation";
import ProductsPagesNavigation from "./ProductsPagesNavigation";
import PageContent from "../UI/PageContent";
import ErrorBlock from "../UI/ErrorBlock";
import PageTitle from "../UI/PageTitle";

function Products() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
    staleTime: 5000,
  });

  let content;
  let quantity = 0;

  if (isPending) {
    content = (
      <PageContent title="Fetching...">
        <p>Fetching items...</p>
      </PageContent>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Produkte konnten nicht geladen werden"
        message={
          error.info?.message ||
          "Produkte konnten nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }

  if (data && !isError) {
    content = (
      <ul id={classes.products}>
        {!isPending &&
          Object.values(data).map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
      </ul>
    );
    quantity = Object.values(data).length;
  }
  return (
    <section>
      <PageTitle title="Produkte">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        placerat, erat vitae condimentum euismod, nibh enim vehicula nisi, id
        malesuada augue nisi a turpis. Proin a orci justo. Donec nec commodo
        massa. Praesent ac turpis placerat, dictum lectus eget, consectetur
        metus. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Fusce tellus dui, volutpat ac ultrices ac,
        aliquam vel enim. Maecenas iaculis diam ligula, a viverra leo feugiat
        sed.
      </PageTitle>
      <SortingNavigation />
      {content}
      <ProductsPagesNavigation quantity={quantity} />
    </section>
  );
}

export default Products;
