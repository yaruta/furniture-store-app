/**
 * Component for displaying a section of new products.
 * 
 * It fetches the latest products using a query, handles loading and error states,
 * and displays a list of new products based on the screen width.
 * 
 * @returns {JSX.Element} New products section with loading, error, or product list content.
 */
import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../../util/http";

import classes from "./NewProducts.module.css";
import LinkButton from "../../UI/LinkButton";
import NewProductItem from "./NewProductItem";
import PageContent from "../../UI/PageContent";
import ErrorBlock from "../../UI/ErrorBlock";
import PageTitle from "../../UI/PageTitle";
import useScreenWidth from "../../../hooks/screen-width";

function NewProductsSection() {
  // Using the react-query hook to fetch product data
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"], // Query key for the products
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
  });

  // Custom hook to get the screen width
  const screenWidth = useScreenWidth();

  let content;

  // Loading state when the products are still being fetched
  if (isPending) {
    content = (
      <PageContent title="Fetching...">
        <p>Fetching items...</p>
      </PageContent>
    );
  }

  // Error state when fetching products fails
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

  // If data is fetched successfully, display products
  if (data && !isError) {
    const products = Object.values(data); // Converting product data to an array
    let newItems;

     // Display different number of products based on screen width
    if (screenWidth > 1250 || screenWidth < 768) {
      newItems = products.slice(products.length - 4); // Show last 4 items on large or small screens
    } else {
      newItems = products.slice(products.length - 3); // Show last 3 items on medium screens
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
        <div className={classes.actions}>
          <LinkButton path="/shop" title="Zum Shop" />
        </div>
      </article>
    </section>
  );
}

export default NewProductsSection;
