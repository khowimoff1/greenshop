import { createSlice } from "@reduxjs/toolkit";

const CartMenu = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = CartMenu.actions;

export default CartMenu.reducer;
