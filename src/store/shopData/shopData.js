import { createSlice } from "@reduxjs/toolkit";
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
    dataAdd(state, axiosData) {
      state.push(...axiosData.payload.data);
    },
  },
});

export let { sortItem, dataAdd } = shopData.actions;

export default shopData;
