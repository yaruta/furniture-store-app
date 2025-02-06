/**
 * Redux slice for managing the favorites data.
 * Stores favorites data in localStorage to persist across sessions.
 */
import { createSlice } from "@reduxjs/toolkit";

/**
 * Retrieves the favorites data from local storage or initializes an empty array.
 * @type {{ items: Array }}
 */
const defaultValue = JSON.parse(localStorage.getItem("favorites")) ?? {
  items: [],
};

/**
 * Redux slice for managing favorite products.
 */
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: defaultValue,
  reducers: {
    /**
     * Toggles a product as a favorite.
     * If the product is already in favorites, it will be removed.
     * Otherwise, it will be added to the list.
     * 
     * @param {Object} state - Current state of the favorites.
     * @param {Object} action - Redux action containing the product details.
     * @param {string} action.payload.id - The unique ID of the product.
     */
    toggleFavorite(state, action) {
      const id = action.payload.id;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        // Remove the item from favorites
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // Add the item to favorites
        state.items.push({ ...newItem });
      }
      // Update local storage
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
