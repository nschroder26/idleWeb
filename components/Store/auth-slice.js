import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isRegistering: false,
  },
  reducers: {
    loginUser(state) {
      state.isLoggedIn = true;
      state.isRegistering = false;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
    },
    registeringUser(state) {
      state.isRegistering = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
export const authReducer = authSlice.reducer;
