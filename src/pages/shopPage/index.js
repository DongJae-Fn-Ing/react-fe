import React, { useState } from "react";
import ShopHeader from "../../components/shop/shopHeader";
import Product from "../../components/shop/product";
import BtnArea from "../../components/common/btnArea";
import Button from "../../components/common/button/button";
import Styled from "./styled";

function ShopPage({ shopData }) {
  const [shop, setShop] = useState(shopData);
  const sortItem = () => {
    let shopCopy = [...shop];
    shopCopy.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      else return 0;
    });
    setShop(shopCopy);
  };

  /* 정렬 디테일 문제 다시 풀이 */

  return (
    <Styled>
      <ShopHeader />
      <div className="main-bg">
        {/*       <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div> */}
        {/* 인라인으로 넣을 때 */}
      </div>
      <BtnArea>
        <Button type="button" className="blue" onClick={sortItem}>
          정렬하기
        </Button>
      </BtnArea>
      <ul className="product-list">
        {shop.map((data, i) => {
          return (
            <Product
              img={`https://codingapple1.github.io/shop/shoes${
                data.id + 1
              }.jpg`}
              key={i}
              subKey={i}
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
