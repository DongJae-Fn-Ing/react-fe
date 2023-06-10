import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Styled from "./styled";

function ShopPageDetail({ shopData }) {
  const [alertState, SetAlertState] = useState(true);

  let goPage = useNavigate();
  let { id } = useParams();
  /* 라우터랑 작명 똑같이 해야함 */

  let index = shopData.findIndex((obj) => obj.id === Number(id));
  /* store로 변환 */

  /*useEffect가 있는 함수는 그 컴포넌트가 장착(마운트)가 되거나
    업데이트가 될 때 useEffect 안에 있는 것들이 작동한다. */

  useEffect(() => {
    let time = setTimeout(() => {
      SetAlertState(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, [alertState]);

  /* 숙제   <input> 하나 만들고 거기에 유저가 숫자 말고 다른걸 입력하면
"그러지마세요"라는 안내메세지를 출력해봅시다.
굳이 그럴 필요는 없겠지만 오늘 배운 useEffect 써보는게 어떨까요.
(팁) 모르는건 검색해봐야합니다. */

  return (
    <Styled className="content">
      {alertState === true ? (
        <div className="alert-box">2초 이내 구입시 10% 할인</div>
      ) : (
        ""
      )}

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
