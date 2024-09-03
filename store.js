import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "./src/features/users/usersSlice";
import usersApi from "./src/features/users/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
