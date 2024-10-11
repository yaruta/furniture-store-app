import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../../util/http";

import classes from "./NewProducts.module.css";
import CtaButton from "../../UI/CTAButton";
import NewProductItem from "./NewProductItem";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";

function NewProductsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
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
        title="Neue Produkts konnten nicht geladen werden"
        message={
          error.info?.message ||
          "Neue Produkts konnten nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }

  if (data && !isError) {
    const products = Object.values(data);
    const newItems = products.slice(products.length - 4);
    content = (
      <ul id={classes.products}>
        {newItems.map((item) => (
          <NewProductItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
  
  return (
    <section className={classes["new-products"]}>
      <h2>Herbst/Winter 2024</h2>
      {content}
      <CtaButton path="/shop" title="Zum Shop" />
    </section>
  );
}

export default NewProductsSection;
