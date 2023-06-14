import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import data from "./data";

let shopData = createSlice({
  name: "shopData",
  initialState: data,
  reducers: {
    sortItem(state) {
      state.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else return 0;
      });
    },
    dataAdd(state) {
      let ad = [];
      axios
        .get(`https://codingapple1.github.io/shop/data2.json`)
        .then((data2) => {
          ad.push(...data2.data);
        });
      /*         .catch(() => {
          alert("통신 실패");
        }); */
      console.log(state);
    },
  },
});

export let { sortItem, dataAdd } = shopData.actions;

export default shopData;
