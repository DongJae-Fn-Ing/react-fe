import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

let shopBasket = createSlice({
  name: "shopBasket",
  initialState: data,
  reducers: {
    countUp(state, i) {
      state[i.payload].count += 1;
    },
  },
});

export let { countUp } = shopBasket.actions;

export default shopBasket;
