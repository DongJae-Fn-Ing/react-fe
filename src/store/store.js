import { configureStore } from "@reduxjs/toolkit";
import shopData from "./shopData/shopData";
import shopBasket from "./shopBasket/shopBasket";

export default configureStore({
  reducer: {
    shopData: shopData.reducer,
    shopBasket: shopBasket.reducer,
  },
});
