import { configureStore } from "@reduxjs/toolkit";
import CartMenu from "./page/CartMenu";

export const store = configureStore({
  reducer: {
    flowers: CartMenu,
  },
});
