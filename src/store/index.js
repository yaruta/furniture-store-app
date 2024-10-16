import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from './cart-slice';
import favoritesReducer from './favorites-slice';
import userdataReducer from './userdata-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    userdata: userdataReducer
  },
});

export default store;