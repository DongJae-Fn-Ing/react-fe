import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import BlogPage from "./pages/blogPage";
import ShopPage from "./pages/shopPage";
import ShopPageDetail from "./pages/shopPageDetail";
import Cart from "./pages/cart";
import ErrorPage from "./pages/errorPage";
import EventOne from "./components/shop/event/eventOne";
import EventTwo from "./components/shop/event/eventTwo";
import Styled from "./styled";

function App() {
  let navigate = useNavigate();
  /* 페이지 이동 */
  /* 보통 함수를 담아서 사용 */

  useEffect(() => {
    localStorage.setItem("new", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Styled>
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
            <button
              type="button"
              onClick={() => navigate("/ShopPage/shopPageDetail")}
            >
              쇼핑몰 상세
            </button>
          </li>
        </ul>

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
          {/* 이친구는 페이지 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Styled>
    </div>
  );
}

export default App;
