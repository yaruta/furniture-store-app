/**
 * Redux slice for managing the shopping cart state.
 * Stores cart data in localStorage to persist across sessions.
 */
import { createSlice } from "@reduxjs/toolkit";

/**
 * Retrieves the cart data from localStorage or initializes with default values.
 */
const defaultValue = JSON.parse(localStorage.getItem("cart")) ?? {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultValue,
  reducers: {
    /**
     * Adds an item to the cart. If the item already exists with the same color, it updates the quantity and total price.
     * Updates localStorage with the new cart state.
     * 
     * @param {Object} state - Current cart state.
     * @param {Object} action - Redux action containing item details.
     * @param {Object} action.payload - The item to add.
     * @param {string} action.payload.id - Unique product ID.
     * @param {string} action.payload.color - Selected color variant.
     * @param {number} action.payload.price - Price per unit.
     * @param {number} action.payload.quantity - Quantity to add.
     */
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.color === newItem.color
      );
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + existingItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    /**
     * Removes an item from the cart and updates the total price.
     * Updates localStorage with the new cart state.
     * 
     * @param {Object} state - Current cart state.
     * @param {Object} action - Redux action containing item details.
     * @param {Object} action.payload - The item to remove.
     * @param {string} action.payload.id - Unique product ID.
     * @param {string} action.payload.color - Selected color variant.
     */
    removeItem(state, action) {
      const removedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removedItem.id && item.color === removedItem.color
      );
      state.totalPrice -= existingItem.totalPrice;
      state.items = state.items.filter(
        (item) =>
          item.id !== removedItem.id ||
          (item.id === removedItem.id && item.color !== removedItem.color)
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
    /**
     * Updates the quantity of an item in the cart and adjusts the total price accordingly.
     * Updates localStorage with the new cart state.
     * 
     * @param {Object} state - Current cart state.
     * @param {Object} action - Redux action containing item details.
     * @param {Object} action.payload - The item with updated quantity.
     * @param {string} action.payload.id - Unique product ID.
     * @param {string} action.payload.color - Selected color variant.
     * @param {number} action.payload.updatedQuantity - New quantity value.
     */
    updateQuantity(state, action) {
      const updatedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === updatedItem.id && item.color === updatedItem.color
      );
      const updatedItemTotalPrice =
        existingItem.price * updatedItem.updatedQuantity;
      state.totalPrice =
        state.totalPrice - existingItem.totalPrice + updatedItemTotalPrice;
      existingItem.quantity = updatedItem.updatedQuantity;
      existingItem.totalPrice = updatedItemTotalPrice;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    /**
     * Clears the entire cart, removing all items and resetting the total price to 0.
     * Removes the cart data from localStorage.
     * 
     * @param {Object} state - Current cart state.
     */
    clearCart(state) {
      localStorage.removeItem("cart");
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
