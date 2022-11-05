import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { authReducer } from "./auth-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

const rootReducer = combineReducers({
  auth: authReducer,
});

export default store;
export const mainReducer = rootReducer;
