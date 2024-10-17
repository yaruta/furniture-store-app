import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from './cart-slice';
import favoritesReducer from './favorites-slice';
import checkoutReducer from './checkout-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    checkout: checkoutReducer
  },
});

export default store;