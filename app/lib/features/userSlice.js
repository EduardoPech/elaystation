import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      name: "",
      user: "",
    },
  },
  reducers: {
    set: (state, action) => {
      state.user = action.payload;
    },
    get: (state) => {
      return state.user;
    },
  },
});

export const { set, get } = userSlice.actions;

export default userSlice.reducer;
