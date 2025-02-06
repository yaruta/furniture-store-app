/**
 * Sorts an array of products based on the given sorting type.
 *
 * @param {Object} options - Sorting options.
 * @param {string} options.sortType - The type of sorting to apply ('new', 'increasing', or 'decreasing').
 * @param {Array} options.products - The array of products to sort.
 * @returns {Array} The sorted array of products.
 */
export function sortProducts({ sortType, products }) {
  let sortedProducts;
  
  if (sortType === "new") {
    sortedProducts = products;
    // sortedProducts = products.reverse();  // Uncomment to sort by newest first
  } else if (sortType === "increasing") {
    sortedProducts = products.sort((a, b) => a.price - b.price);
  } else if (sortType === "decreasing") {
    sortedProducts = products.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}
