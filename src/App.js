import React from "react";
import Main from "./pages/main";
import BlogPage from "./pages/blogPage";
import ShopPage from "./pages/shopPage";
import { Routes, Route, Link } from "react-router-dom";
import Styled from "./styled";

function App() {
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
        </ul>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          {/* 이친구는 페이지 */}
        </Routes>
      </Styled>
    </div>
  );
}

export default App;
