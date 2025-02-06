/**
 * ProductDetailsPage component displays the product details.
 * 
 * This component imports and renders the `ProductDetails` component,
 * which contains the detailed information about a specific product.
 * 
 * @returns {JSX.Element} - The rendered product details page.
 */
import ProductDetails from "../components/Shop/ProductDetails/ProductDetails";

function ProductDetailsPage() {
  return (
    <>
      <ProductDetails />
    </>
  );
}

export default ProductDetailsPage;
