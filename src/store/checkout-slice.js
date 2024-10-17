import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { userdata: null, delivery: null },
  reducers: {
    addUserData(state, action) {
      state.userdata = { ...action.payload.userdata };
      console.log(state.userdata);
    },
    addDelivery(state, action) {
      state.delivery = {...action.payload.delivery};
      console.log(state.delivery);
    },
    // removeUserData(state) {
    //   state.userdata = null;
    // },
  },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice.reducer;
