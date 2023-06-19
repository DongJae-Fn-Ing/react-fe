import React from "react";
import Styled from "./styled";

function Recently() {
  let localOpen = localStorage.getItem("new");
  let openData = JSON.parse(localOpen);

  return (
    <Styled>
      <p className="recently-title">최근 본 상품</p>
      <ul className="list scroll-active">
        {openData.map((data, i) => {
          return (
            <li className="list-item" key={i}>
              <figure>
                <img
                  className="list-img"
                  src={`https://codingapple1.github.io/shop/shoes${
                    data.id + 1
                  }.jpg`}
                  alt={data.title}
                />
                <figcaption>
                  <p className="list-title ellipsis" title={data.title}>
                    {data.title}
                  </p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Styled>
  );
}

export default Recently;
