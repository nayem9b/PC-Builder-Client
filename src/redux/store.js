import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { apiSlice } from "./api/api";
import cartSlice from "./features/cart/cartSlice";

const isClient = typeof window !== "undefined";

if (isClient) {
}
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  builder: cartSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
