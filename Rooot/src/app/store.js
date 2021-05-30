import { configureStore } from '@reduxjs/toolkit';
import userReducer, { userSlice } from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
