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
import useScreenWidth from "../../hooks/screen-width";

const PRODUCTS_PAGE_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat, erat vitae condimentum euismod, nibh enim vehicula nisi, id malesuada augue nisi a turpis. Proin a orci justo. Donec nec commodo massa. Praesent ac turpis placerat, dictum lectus eget, consectetur metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tellus dui, volutpat ac ultrices ac,aliquam vel enim. Maecenas iaculis diam ligula, a viverra leo feugiat sed.";

function Products() {
  const screenWidth = useScreenWidth();
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type");
  const [sortType, setSortType] = useState("new");

  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfProductsPerPage, setNumberOfProductsPerPage] = useState(6);

  useEffect(() => {
    setPageNumber(1);
  }, [filterType, sortType, numberOfProductsPerPage]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchShopProducts({ signal }),
    staleTime: 5000,
  });

  function handleSort(type) {
    setSortType(type);
  }

  function handleGrid(amountPerPage) {
    setNumberOfProductsPerPage(amountPerPage);
  }

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
    <section>
      <PageTitle title="Produkte">{PRODUCTS_PAGE_DESCRIPTION}</PageTitle>
      <SortingNavigation onSort={handleSort} onGrid={handleGrid}/>
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
