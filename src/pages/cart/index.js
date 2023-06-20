import React, { useState, memo, useMemo } from "react";
import Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { countUp, cartDel } from "../../store/shopBasket/shopBasket";

let Child = memo(function () {
  return <div>자식 컴포넌트</div>;
});

/* function 함수(){
  return 반복문 10억 번 돌린 결과
} */

function Cart() {
  /* let result = 함수(); */
  // 이러면 문제 cart가 재랜더링 될 때마다 반복문 돌음 이거를 개선하고 싶으면
  /*   useMemo(() => {
    return 함수();
  },[]); */
  //이러면 cart 랜더링될 때 한번만 결과를 리턴함
  // useEffetc랑 똑같이 디펜더시 넣을 수 있음 []안에 스테이트 넣으면 스테이트 바뀔 때만 작동

  let stateData = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  const [sount, setSount] = useState(0);
  const CountUp = () => {
    setSount(sount + 1);
  };

  return (
    <Styled>
      <Child count={sount} />
      {sount}
      <button type="button" onClick={CountUp}>
        memo
      </button>
      <table className="common-table">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {stateData.shopBasket.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(countUp(data.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(cartDel(data.id));
                    }}
                  >
                    delete
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
