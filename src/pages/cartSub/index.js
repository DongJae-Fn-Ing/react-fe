import React from "react";
import Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/store";

function Cart() {
  /* Redux store에 있던 state 남음 */
  let shopBasket = useSelector((state) => {
    return state.shopBasket;
  });
  /*   console.log("리덕스 store user:::", store.user);
  console.log("리덕스 store stock:::", store.stock); */

  /* 참고사항 useSelector를 편하게 쓰려면 */
  /*   let store = useSelector((state) => {
        return state.user;
      }); */
  //이런식이면 user만도 가능하다.
  //여기서 궁금증 그러면 redux쓰면 편하지만 props 왜씀?
  //셋팅법이랑 코드 정리하기 불편함
  //+ 스테이트 공유가 필요 없으면 리덕스에 저장 필요 없음

  console.log("리덕스 store shopBasket:::", shopBasket);

  let dispatch = useDispatch();
  //useDispatch는 store.js에 요청해주는 함수

  return (
    <Styled>
      <table className="common-table">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {shopBasket.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styled>
  );
}

export default Cart;
