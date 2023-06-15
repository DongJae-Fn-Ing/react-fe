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
      state.push(obj);

      //장바구니 삭제기능 추가고민
      //장바구니 중복값 추가하면 수치 증가
    },
  },
});

export let { countUp, cartAdd } = shopBasket.actions;

export default shopBasket;
