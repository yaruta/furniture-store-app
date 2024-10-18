import { createSlice } from "@reduxjs/toolkit";

const defaultValue = JSON.parse(localStorage.getItem("checkout")) || { userdata: null, delivery: null, payment: null };

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: defaultValue,
  reducers: {
    addUserData(state, action) {
      state.userdata = { ...action.payload.userdata };
      console.log(state.userdata);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    addDelivery(state, action) {
      state.delivery = { ...action.payload.delivery };
      console.log(state.delivery);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    addPayment(state, action) {
      state.payment = { ...action.payload.payment };
      console.log(state.payment);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer;
