import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "./styled";

function Product({ img, title, content, price, subKey }) {
  let detailPageGo = useNavigate();

  return (
    <Styled
      onClick={() => {
        detailPageGo("/ShopPage/shopPageDetail/" + [subKey]);
      }}
    >
      <figure>
        <img src={img} alt={title} className="product-img" />
        <figcaption>
          <h2 className="product-title ellipsis" title={title}>
            {title}
          </h2>
          <p className="product-con ellipsis" title={content}>
            {content}
          </p>
          <p className="product-price ellipsis" title={price}>
            {price + "원"}
          </p>
        </figcaption>
      </figure>
    </Styled>
  );
}

export default Product;
