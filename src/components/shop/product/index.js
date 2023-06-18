import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDataPush } from "../../../store/store";
import Styled from "./styled";

function Product({ img, title, content, price, subKey, localData }) {
  let detailPageGo = useNavigate();
  const localPush = (i) => localData(i);
  let dispatch = useDispatch();

  return (
    <Styled
      onClick={() => {
        detailPageGo("/ShopPage/shopPageDetail/" + [subKey]);
        localPush(subKey);
        dispatch(productDataPush(subKey));
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
