import { configureStore, createSlice } from "@reduxjs/toolkit";
import ShopBasket from "./storeDate/shopBasket";

let user = createSlice({
  name: "user", // 스테이트 이름
  initialState: "kim", // 스테이트 값

  /* 리덕스 스테이트 변경법 */
  /* -state 수정해주는 함수를 만들고 */
  /* -원할 때 그 함수를 실행해 달라고 store.js에 요청 */

  reducers: {
    changeName(state /* 위에 기존 state */) {
      return "john" + state;
    },
  },
  //1.state 수정 함수 만들고
  //2.만든 함수를 export 해야함 밖으로 빼서
  //3.만든 함수를 import해서 사용함
});
/* 리덕스에서 스테이트 불러오기 */

export let { changeName } = user.actions;
  //2.만든 함수를 export 해야함 밖으로 빼서

let stock = createSlice({
  name: "stock", // 스테이트 이름
  initialState: [10, 11, 12], // 스테이트 값
});

let shopBasket = createSlice({
  name: "shopBasket",
  initialState: ShopBasket,
});

let age = createSlice({
  name: "age",
  initialState: 0,

  reducers: {
    ageUp(state, action /* < 두번째 파라미터는 이 함수의 매개변수로 사용가능 */) {
      return (state += action.payload);
      //꼭 payload를 사용해야한다.
    },
  },
});
export let { ageUp } = age.actions;

export default configureStore({
  reducer: {
    //위에 작성한 거 여기에 등록
    user: user.reducer,
    //작명하고 이렇게 하고
    // 원하는 컴포넌트 가서 useSelector 사용
    stock: stock.reducer,
    shopBasket: shopBasket.reducer,
  },
});
