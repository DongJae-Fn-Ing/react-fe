import React from "react";
import Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { countUp } from "../../store/shopBasket/shopBasket";

function Cart() {
  let stateData = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

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
                      dispatch(countUp(i));
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
