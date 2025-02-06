/**
 * Redux slice for managing the checkout state.
 * Stores checkout data in localStorage to persist across sessions.
 */
import { createSlice } from "@reduxjs/toolkit";

/**
 * Retrieves the checkout data from localStorage or initializes default values.
 * @constant {Object} defaultValue - Default checkout state.
 */
const defaultValue = JSON.parse(localStorage.getItem("checkout")) || { userdata: null, delivery: null, payment: null };

/**
 * Redux slice for managing checkout state.
 */
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: defaultValue,
  reducers: {
    /**
     * Stores user data in the state and localStorage.
     * @param {Object} state - The current state.
     * @param {Object} action - The dispatched action containing user data.
     */
    addUserData(state, action) {
      state.userdata = { ...action.payload.userdata };
      console.log(state.userdata);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    /**
     * Stores delivery information in the state and localStorage.
     * @param {Object} state - The current state.
     * @param {Object} action - The dispatched action containing delivery data.
     */
    addDelivery(state, action) {
      state.delivery = { ...action.payload.delivery };
      console.log(state.delivery);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    /**
     * Stores payment information(type of the payment) in the state and localStorage.
     * @param {Object} state - The current state.
     * @param {Object} action - The dispatched action containing payment data.
     */
    addPayment(state, action) {
      state.payment = { ...action.payload.payment };
      console.log(state.payment);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    /**
     * Clears checkout data from the state and removes it from localStorage.
     * @param {Object} state - The current state.
     */
    clearCheckoutData(state) {
      localStorage.removeItem("checkout");
      state.userdata = null;
      state.delivery = null;
      state.payment = null;
    }
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer;
