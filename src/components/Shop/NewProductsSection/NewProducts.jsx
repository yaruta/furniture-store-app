import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../../util/http";

import classes from "./NewProducts.module.css";
import CtaButton from "../../UI/CTAButton";
import NewProductItem from "./NewProductItem";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import PageTitle from "../../UI/PageTitle";
import useScreenWidth from "../../../hooks/screen-width";

function NewProductsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
  });

  const screenWidth = useScreenWidth();

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
    let newItems;
    if (screenWidth > 1250 || screenWidth < 768) {
      newItems = products.slice(products.length - 4);
    } else {
      newItems = products.slice(products.length - 3);
    }
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
      <PageTitle title="Herbst/Winter 2024">
        Phasellus fermentum venenatis sapien, quis mattis urna maximus eu.
        Integer posuere urna ac arcu vestibulum, id ultricies quam suscipit.
        Proin eu convallis lectus, eu semper mauris. Aliquam bibendum dui nec
        condimentum tempor. In hac habitasse platea dictumst. Pellentesque ac
        ligula maximus, vestibulum elit nec, egestas urna. Maecenas nec lacus
        scelerisque, congue massa sit amet, ultricies ex. In hac habitasse
        platea dictumst.
      </PageTitle>
      <article>
        {content}
        <CtaButton path="/shop" title="Zum Shop" />
      </article>
    </section>
  );
}

export default NewProductsSection;
