import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    set: (state, action) => {
      state.alerts = action.payload;
    },
    get: (state) => {
      return state.alerts.sort((a, b) => a.id - b.id);;
    },
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { set, get, addAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;