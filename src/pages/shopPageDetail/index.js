import React from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Styled from "./styled";

function ShopPageDetail({ shopData }) {
  let goPage = useNavigate();
  let { id } = useParams();
  /* 라우터랑 작명 똑같이 해야함 */

  let index = shopData.findIndex((obj) => obj.id === Number(id));
  /* store로 변환 */

  return (
    <Styled className="content">
      <div className="deatil-img">
        <img
          src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
          alt={shopData[index].title}
        />
      </div>
      <div className="detail-con">
        <h2 className="detail-tit">{shopData[index].title}</h2>
        <p className="detail-info">{shopData[index].content}</p>
        <p className="detail-price">{shopData[index].price}</p>
        <Button className="green" type="button">
          주문하기
        </Button>
        <Button
          className="red"
          type="button"
          onClick={() => {
            goPage(-1);
          }}
        >
          뒤로가기
        </Button>
        <Button
          className="blue"
          type="button"
          onClick={() => {
            goPage(`/ShopPage/shopPageDetail/${id}/event_one`);
          }}
        >
          이벤트1
        </Button>
        <Button
          className="gray"
          type="button"
          onClick={() => {
            goPage(`/ShopPage/shopPageDetail/${id}/event_two`);
          }}
        >
          이벤트2
        </Button>
      </div>

      <Outlet></Outlet>
    </Styled>
  );
}

export default ShopPageDetail;
