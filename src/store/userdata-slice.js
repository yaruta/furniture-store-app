import { createSlice } from "@reduxjs/toolkit";

const userdataSlice = createSlice({
  name: "userdata",
  initialState: { userdata: null },
  reducers: {
    addUserData(state, action) {
      state.userdata = {...action.payload};
      console.log(state.userdata);
    },
    removeUserData(state) {
      state.userdata = null;
    },
  },
});

export const userdataActions = userdataSlice.actions;
export default userdataSlice.reducer;
