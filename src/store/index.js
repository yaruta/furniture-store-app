/**
 * Redux store configuration using Redux Toolkit.
 * 
 * This store manages the application's global state by combining multiple reducers.
 */

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from './cart-slice';
import favoritesReducer from './favorites-slice';
import checkoutReducer from './checkout-slice';

/**
 * Creates and configures the Redux store with multiple slices.
 *
 * - `ui`: Manages UI-related state.
 * - `cart`: Manages shopping cart state.
 * - `favorites`: Manages user favorite products.
 * - `checkout`: Manages the checkout process.
 */
const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    checkout: checkoutReducer,
  },
});

export default store;