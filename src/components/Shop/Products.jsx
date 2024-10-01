import classes from "./Products.module.css";

import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../util/http";

import ProductItem from "./ProductItem/ProductItem";
import SortingNavigation from "./SortingNavigation";
import ProductsPagesNavigation from "./ProductsPagesNavigation";
import PageContent from "../UI/PageContent";
import ErrorBlock from "../UI/ErrorBlock";

function Products() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
    staleTime: 5000,
  });

  let content;

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
          data.map((product) => <ProductItem key={product.id} {...product} />)}
      </ul>
    );
  }
  return (
    <section>
      <SortingNavigation />
      {content}
      <ProductsPagesNavigation />
    </section>
  );
}

export default Products;
