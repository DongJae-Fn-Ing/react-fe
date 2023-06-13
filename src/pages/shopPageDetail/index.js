import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Styled from "./styled";
import Data from "./data";

function ShopPageDetail({ shopData }) {
  const [alertState, SetAlertState] = useState(true);
  const [tabState, setTabState] = useState(0);

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

  /* 탭 */
  const tabChange = (data, key) => {
    setTabState(key);
  };

  function TabCon({ tabState }) {
    /* if문으로 탭짜기 */
    if (tabState === 0) {
      return <div>탭콘텐츠1</div>;
    } else if (tabState === 1) {
      return <div>탭콘텐츠2</div>;
    } else if (tabState === 2) {
      return <div>탭콘텐츠3</div>;
    } else if (tabState === 3) {
      return <div>탭콘텐츠4</div>;
    }
  }

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
      <div className="detail-tab">
        <ul className="detail-tab-header">
          {Data.map((data, key) => {
            return (
              <li className="tab-name" key={key}>
                <button
                  type="button"
                  onClick={(key) => tabChange(data, data.id)}
                >
                  {data.tabName}
                </button>
              </li>
            );
          })}
        </ul>
        <TabCon tabState={tabState} />
      </div>
    </Styled>
  );
}

export default ShopPageDetail;
