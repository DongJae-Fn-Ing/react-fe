import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

let shopBasket = createSlice({
  name: "shopBasket",
  initialState: data,
  reducers: {
    countUp(state, i) {
      let index = state.findIndex((obj) => obj.id === i.payload);
      state[index].count++;
    },
    cartAdd(state, add) {
      let obj = {
        id: add.payload.id,
        name: add.payload.title,
        count: 1,
      };
      let index = state.findIndex((test) => test.id === obj.id);
      if (index === obj.id) {
        alert("이미 있으므로 수량증가");
        state[obj.id].count++;
      } else {
        state.push(obj);
      }
    },
    cartDel(state, i) {
      let index = state.findIndex((obj) => obj.id === i.payload);
      state.splice(index, 1);
    },
  },
});

export let { countUp, cartAdd, cartDel } = shopBasket.actions;

export default shopBasket;
