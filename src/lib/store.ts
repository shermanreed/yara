import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./slices/authSlice";
import wsReduce from "./slices/wsSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      authState: authReduce,
      wsState: wsReduce,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
