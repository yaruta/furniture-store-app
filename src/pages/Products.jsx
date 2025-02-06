/**
 * ProductsPage component displays a list of products.
 * 
 * This component imports and renders the `Products` component, which
 * displays all the available products in the shop.
 * 
 * @returns {JSX.Element} - The rendered products page.
 */
import Products from "../components/Shop/Products";

function ProductsPage() {
  return <Products />;
}

export default ProductsPage;
