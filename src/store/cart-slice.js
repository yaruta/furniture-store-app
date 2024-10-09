import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id && item.color === newItem.color);
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
    },
    removeItem(state, action) {
      const newItemId = action.payload;
      const existingItem = state.items.find(item => item.id === newItemId);
      state.totalPrice -= existingItem.totalPrice;
      state.items = state.items.filter(item => item.id !== newItemId);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
