import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    token: null,
    isLoggedIn: false,
    login: (data) => {},
    logout: () => {},
  },
  reducers: {
    loginUser(state, action) {
      const { userId, token } = action.payload;
      state.isLoggedIn = true;
      state.userId = userId;
      state.token = token;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
export const authReducer = authSlice.reducer;
