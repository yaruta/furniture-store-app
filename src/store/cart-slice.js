import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
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
    },
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
    },
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
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
