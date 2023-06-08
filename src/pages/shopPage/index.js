import React, { useState } from "react";
import Styled from "./styled";

import ShopData from "./data";

import ShopHeader from "../../components/shop/shopHeader";
import Product from "../../components/shop/product";

function ShopPage() {
  const [shop] = useState(ShopData);

  return (
    <Styled>
      <ShopHeader />
      <div className="main-bg">
        {/*       <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div> */}
        {/* 인라인으로 넣을 때 */}
      </div>
      <ul className="product-list">
        {shop.map((data, i) => {
          return (
            <Product
              img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              key={i}
              title={data.title}
              content={data.content}
              price={data.price}
            />
          );
        })}
      </ul>
    </Styled>
  );
}

export default ShopPage;
