import { configureStore, createSlice } from "@reduxjs/toolkit";
import shopData from "./shopData/shopData";
import shopBasket from "./shopBasket/shopBasket";

let count = createSlice({
  name: "count",
  initialState: 2,

  reducers: {
    countUp(state) {
      return (state += 1);
    },
  },
});

export let { countUp } = count.actions;

export default configureStore({
  reducer: {
    shopData: shopData.reducer,
    shopBasket: shopBasket.reducer,
    count: count.reducer,
  },
});
