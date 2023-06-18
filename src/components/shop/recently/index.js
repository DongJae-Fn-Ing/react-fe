import React from "react";
import { useSelector } from "react-redux";
import Styled from "./styled";

function Recently() {
  let productData = useSelector((state) => {
    return state.productData;
  });

  return (
    <Styled>
      <p className="recently-title">최근 본 상품</p>
      <ul className="list">
        {productData.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ul>
    </Styled>
  );
}

export default Recently;
