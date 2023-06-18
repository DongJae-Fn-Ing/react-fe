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

let productData = createSlice({
  name: "productData",
  initialState: [],

  reducers: {
    productDataPush(state, i) {
      if (state.includes(i.payload)) {
        console.log("중복값");
      } else {
        state.push(i.payload);
      }
    },
  },
});

export let { countUp } = count.actions;
export let { productDataPush } = productData.actions;

export default configureStore({
  reducer: {
    shopData: shopData.reducer,
    shopBasket: shopBasket.reducer,
    count: count.reducer,
    productData: productData.reducer,
  },
});
