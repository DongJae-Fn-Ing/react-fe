import React from "react";
import Button from "../../components/common/button/button";
import Styled from "./styled";

function shopPageDetail() {
  return (
    <Styled className="content">
      <div className="deatil-img">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
      </div>
      <div className="detail-con">
        <h2 className="detail-tit">상품명</h2>
        <p className="detail-info">상품설명</p>
        <p className="detail-price">상품가격</p>
        <Button className="green" type="button">
          주문하기
        </Button>
      </div>
    </Styled>
  );
}

export default shopPageDetail;
