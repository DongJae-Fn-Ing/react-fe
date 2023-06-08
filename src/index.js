import React from "react";
import ReactDOM from "react-dom/client";
import "./common/global.css";
import App from "./App";
/* 경로가 있는 건 내가 만든 자바스크립트 파일 */
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
/* 이런건 라이브러리 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
