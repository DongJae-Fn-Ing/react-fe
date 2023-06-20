import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import BlogPage from "./pages/blogPage";
import ShopPage from "./pages/shopPage";
import ShopPageDetail from "./pages/shopPageDetail";
import InputPage from "./pages/inputPage";
import Cart from "./pages/cart";
import ErrorPage from "./pages/errorPage";
import EventOne from "./components/shop/event/eventOne";
import EventTwo from "./components/shop/event/eventTwo";
import Recently from "../src/components/shop/recently";
import Styled from "./styled";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  let navigate = useNavigate();
  /* 페이지 이동 */
  /* 보통 함수를 담아서 사용 */

  useEffect(() => {
    localStorage.setItem("new", JSON.stringify([]));
  }, []);

  let result = useQuery("aioxsData", () => {
    return (
      axios.get(`https://codingapple1.github.io/userdata.json`).then((data) => {
        return data.data;
      }),
      { staleTime: 2000 }  // 이런식으로 refetch 시간 조정가능 
    );
  });
  //데이터 result.data
  //로딩 성공, 실패 로딩중 파악가능 result.isLoading
  //에러 result.error

  //리액트 쿼리에 장점
  //1. ajax 요청 성공/ 실패/ 로딩중 상태를 쉽게 파악
  /*   ajax 로딩중일 땐 <A/> 보여주세요~
       ajax 성공시엔 <B/> 보여주세요~
       이런거 직접 개발하려면 state 부터 만들어야 했을텐데 얘는 그럴 필요가 없습니다.  */
  //2. 틈만나면 알아서 ajax 재요청을 해줌 >> 자동으로 refetch 해줌 실시간 데이터 받아온다.
  //3. 실패시 retry 알아서 해줌
  //4. state 공유 안해도 됩니다. >> 한번 요청하면 여러게 요청해도 하나로 통합해서 요청하기 때문에 
  //   여러번 요청을 해도 상관이 없다.
  //5. ajax 결과 캐싱기능  >> ajax 요청한 값을 5분동안 기억하는 기능 즉 5분 전에 성공한 ajax 결과를 한번 보여주고 다시 ajax 통신을 해서 그 값을 보여줌

  // 그냥 실시간으로 데이터 뿌려지는 곳에 사용하면 좋다
  // redux-toolkit 설치를 했으면 RTK Query도 자동설치됩니다. 이거 리액트 쿼리랑 비슷하지만 문법 더러움

  return (
    <div className="App">
      <Styled>
        <div className="top-area">
          <ul className="route-list">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/BlogPage">블로그</Link>
            </li>
            <li>
              <Link to="/ShopPage">쇼핑몰</Link>
            </li>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>
              <Link to="/input">인풋</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate("/ShopPage/shopPageDetail")}
              >
                쇼핑몰 상세
              </button>
            </li>
          </ul>
          <p>{result.isLoading ? "로딩중..." : result.data.name}</p>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route
            path="/ShopPage/shopPageDetail/:ids"
            element={<ShopPageDetail />}
          >
            <Route path="event_one" element={<EventOne />} />
            <Route path="event_two" element={<EventTwo />} />
            {/* 
            이런식으로 네스팅 라우팅을 하면 한 페이지에서 두개 페이지를 보여준다.
            <Outlet></Outlet> 보여줄 자리에 이거 임포트해서 해당 태그 추가 slot 이라 생각하면 편함*/}
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/input" element={<InputPage />} />
          {/* 이친구는 페이지 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Recently />
      </Styled>
    </div>
  );
}

export default App;
