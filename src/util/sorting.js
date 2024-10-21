export function sortProducts({ sortType, products }) {
  let sortedProducts;
  
  if (sortType === "new") {
    sortedProducts = products;
    // sortedProducts = products.reverse();
  } else if (sortType === "increasing") {
    sortedProducts = products.sort((a, b) => a.price - b.price);
  } else if (sortType === "decreasing") {
    sortedProducts = products.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}
