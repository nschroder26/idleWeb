import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
  },
  reducers: {
    loginUser(state, token) {
      state.isLoggedIn = true;
      state.token = token;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
export const authReducer = authSlice.reducer;
