import cartSlice from "./cart";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
