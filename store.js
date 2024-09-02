import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./src/features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
