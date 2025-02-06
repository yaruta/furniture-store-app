/**
 * HTTP utility functions for fetching data from the backend.
 * 
 * This module provides functions for retrieving shop products, product details,
 * frequently asked questions (FAQ), hero section data, and address information.
 * It also includes a function to send orders to the backend.
 */
import { QueryClient } from "@tanstack/react-query";

/**
 * Query client instance for caching and managing server state.
 */
export const queryClient = new QueryClient();

/**
 * Fetches all shop products.
 * 
 * @param {Object} options - Fetch options.
 * @param {AbortSignal} options.signal - Signal to abort the fetch request.
 * @returns {Promise<Object>} The fetched product data.
 * @throws {Error} If the request fails.
 */
export async function fetchShopProducts({ signal }) {
  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/products.json",
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occured while fetching the products.");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

/**
 * Fetches details of a specific product.
 * 
 * @param {Object} options - Fetch options.
 * @param {string} options.id - The ID of the product to fetch.
 * @param {AbortSignal} options.signal - Signal to abort the fetch request.
 * @returns {Promise<Object>} The fetched product data.
 * @throws {Error} If the request fails.
 */
export async function fetchProduct({ id, signal }) {
  const response = await fetch(
    `https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occured while fetching the item.");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
}

/**
 * Fetches frequently asked questions (FAQ).
 * 
 * @param {Object} options - Fetch options.
 * @param {AbortSignal} options.signal - Signal to abort the fetch request.
 * @returns {Promise<Object>} The fetched FAQ data.
 * @throws {Error} If the request fails.
 */
export async function fetchFAQ({ signal }) {
  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/faq.json",
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occured while fetching the faq");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
}

/**
 * Fetches hero section data.
 * 
 * @param {Object} options - Fetch options.
 * @param {AbortSignal} options.signal - Signal to abort the fetch request.
 * @returns {Promise<Object>} The fetched hero data.
 * @throws {Error} If the request fails.
 */
export async function fetchHero({ signal }) {
  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/hero.json",
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occured while fetching the hero");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
}

/**
 * Sends an order to the backend.
 * 
 * @param {Object} orderData - The order data to send.
 * @returns {Promise<Object>} The server response.
 * @throws {Error} If the request fails.
 */
export async function sendOrder(orderData) {
  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const error = new Error("An error occured while sending the order");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

/**
 * Fetches address information.
 * 
 * @param {Object} options - Fetch options.
 * @param {AbortSignal} options.signal - Signal to abort the fetch request.
 * @returns {Promise<string>} The fetched address.
 * @throws {Error} If the request fails.
 */
export async function fetchAddress({ signal }) {
  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/info.json",
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occured while fetching the address");
    error.code = error.status;
    error.info = await response.json();
    throw error;
  }

  const { address } = await response.json();
  return address;
}

