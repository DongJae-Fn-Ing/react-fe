import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Styled from "./styled";
import Data from "./data";
import { cartAdd } from "../../store/shopBasket/shopBasket";

function ShopPageDetail() {
  let shop = useSelector((state) => {
    return state.shopData;
  });

  let dispatch = useDispatch();

  const [mount, setMount] = useState("");
  const [alertState, SetAlertState] = useState(true);
  const [tabState, setTabState] = useState(0);
  const [fade, setFade] = useState("");

  let goPage = useNavigate();
  let { ids } = useParams();
  /* 라우터랑 작명 똑같이 해야함 */

  let index = shop.findIndex((obj) => obj.id === Number(ids));

  /*useEffect가 있는 함수는 그 컴포넌트가 장착(마운트)가 되거나
    업데이트가 될 때 useEffect 안에 있는 것들이 작동한다. */

  /* 탭 */
  const tabChange = (data, key) => {
    setTabState(key);
  };

  function TabCon({ tabState }) {
    /* if문으로 탭짜기 */
    /*     if (tabState === 0) {
      return <div className="detail-tab-content">탭콘텐츠1</div>;
    } else if (tabState === 1) {
      return <div className="detail-tab-content">탭콘텐츠2</div>;
    } else if (tabState === 2) {
      return <div className="detail-tab-content">탭콘텐츠3</div>;
    } else if (tabState === 3) {
      return <div className="detail-tab-content">탭콘텐츠4</div>;
    } */
    return (
      <div className={`tab-con-wrap start ${fade}`}>
        {
          [
            <div className="detail-tab-content">탭콘텐츠1</div>,
            <div className="detail-tab-content">탭콘텐츠2</div>,
            <div className="detail-tab-content">탭콘텐츠3</div>,
          ][tabState]
        }
      </div>
    );
  }

  useEffect(() => {
    setMount("end");
    return () => {
      setMount("");
    };
  }, []);

  useEffect(() => {
    let time = setTimeout(() => {
      SetAlertState(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, [alertState]);

  useEffect(() => {
    let time = setTimeout(() => {
      setFade("end"); /*  두번째로 실행 */
    }, 100);
    /* useEffect 애니메이션을 적용할 때 이런식으로 타이머를 줘야한다 */
    /* 리액트의 automatic batching 기능 */
    /* 스테이트 변경 함수를 쓸 때마다 재랜더링을 해주는 게 아니라 변경이 전부 되고 나서 마지막에 재랜더링을 해줘야 한다.
    즉 미세한 시간차를 주면 애니메이션이 가능 
    */
    return () => {
      clearTimeout(time);
      setFade(""); /* 첫번째로 1실행 */
    };
  }, [tabState]);

  return (
    <Styled className={`content start ${mount}`}>
      {alertState === true ? (
        <div className="alert-box">2초 이내 구입시 10% 할인</div>
      ) : (
        ""
      )}

      <div className="deatil-img">
        <img
          src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`}
          alt={shop[index].title}
        />
      </div>
      <div className="detail-con">
        <h2 className="detail-tit">{shop[index].title}</h2>
        <p className="detail-info">{shop[index].content}</p>
        <p className="detail-price">{shop[index].price}</p>
        <Button
          className="green"
          type="button"
          onClick={() => {
            dispatch(cartAdd(shop[index]));
          }}
        >
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
            goPage(`/ShopPage/shopPageDetail/${ids}/event_one`);
          }}
        >
          이벤트1
        </Button>
        <Button
          className="gray"
          type="button"
          onClick={() => {
            goPage(`/ShopPage/shopPageDetail/${ids}/event_two`);
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
              <li
                className={`tab-name${tabState === key ? " on" : ""}`}
                key={key}
              >
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
        <TabCon className="detail-tab-content" tabState={tabState} />
      </div>
    </Styled>
  );
}

export default ShopPageDetail;
