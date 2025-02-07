/**
 * Component represents the product listing page with sorting, filtering, and pagination.
 * It fetches product data and displays it with sorting and pagination options.
 * 
 * @returns {JSX.Element} The rendered product listing page with sorting and pagination controls.
 */
import { useQuery } from "@tanstack/react-query";
import { fetchShopProducts } from "../../util/http";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SortingNavigation from "./SortingNavigation";
import ProductsPagesNavigation from "./ProductsPagesNavigation";
import PageContent from "../UI/PageContent";
import ErrorBlock from "../UI/ErrorBlock";
import PageTitle from "../UI/PageTitle";
import SortedProducts from "./ProductTypes/SortedProducts";

const PRODUCTS_PAGE_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat, erat vitae condimentum euismod, nibh enim vehicula nisi, id malesuada augue nisi a turpis. Proin a orci justo. Donec nec commodo massa. Praesent ac turpis placerat, dictum lectus eget, consectetur metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus dui, volutpat ac ultrices ac,aliquam vel enim. Maecenas iaculis diam ligula, a viverra leo feugiat sed.";

function Products() {
  /**
   * Retrieves the search parameters from the URL (e.g., product type filter).
   */
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type");

   /**
   * State hook for managing the sorting type (e.g., 'new', 'popular').
   */
  const [sortType, setSortType] = useState("new");

  /**
   * State hooks for managing pagination.
   */
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfProductsPerPage, setNumberOfProductsPerPage] = useState(6);

  /**
   * Reset page number when filter or sort type changes.
   */
  useEffect(() => {
    setPageNumber(1);
  }, [filterType, sortType, numberOfProductsPerPage]);

  /**
   * Fetches products from the server using React Query.
   */
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
    staleTime: 5000,
  });

  /**
   * Handles sorting of the products based on selected type.
   * @param {string} type - The type to sort by (e.g., 'new', 'price').
   */
  function handleSort(type) {
    setSortType(type);
  }

  /**
   * Handles changing the number of products displayed per page.
   * @param {number} amountPerPage - The number of products to show per page.
   */
  function handleGrid(amountPerPage) {
    setNumberOfProductsPerPage(amountPerPage);
  }

  /**
   * Variable to hold the content to display, depending on the loading state or errors.
   */
  let content;
  let quantity = 0;

  // Loading state
  if (isPending) {
    content = (
      <PageContent title="Fetching...">
        <p>Fetching items...</p>
      </PageContent>
    );
  }

  // Error state
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

  // Data available and no errors
  if (data && !isError) {
    let products = Object.values(data);
    if (filterType) {
      products = products.filter((product) => product.type === filterType);
    }
    content = (
      <SortedProducts
        products={products}
        sortType={sortType}
        startItem={(pageNumber - 1) * numberOfProductsPerPage}
        numberOfProductsPerPage={numberOfProductsPerPage}
      />
    );
    quantity = products.length;
  }

  return (
    <section
    >
      <PageTitle title="Produkte">{PRODUCTS_PAGE_DESCRIPTION}</PageTitle>
      <SortingNavigation onSort={handleSort} onGrid={handleGrid} />
      {content}
      <ProductsPagesNavigation
        onPage={(page) => setPageNumber(page)}
        quantity={quantity}
        numberOfProductsPerPage={numberOfProductsPerPage}
        activePage={pageNumber}
      />
    </section>
  );
}

export default Products;
