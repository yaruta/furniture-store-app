import { createSlice } from "@reduxjs/toolkit";

const defaultValue = JSON.parse(localStorage.getItem("favorites")) ?? {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: defaultValue,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload.id;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        state.items.push({ ...newItem });
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
