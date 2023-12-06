import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      name: "",
      user: "",
    },
    realTime: false,
  },
  reducers: {
    set: (state, action) => {
      state.user = action.payload;
    },
    get: (state) => {
      return state.user;
    },
    updateRealTime: (state, action) => {
      state.realTime = action.payload;
    },
  },
});

export const { set, get, updateRealTime } = userSlice.actions;

export default userSlice.reducer;
