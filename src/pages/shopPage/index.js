import React, { useState } from "react";
import ShopHeader from "../../components/shop/shopHeader";
import Product from "../../components/shop/product";
import BtnArea from "../../components/common/btnArea";
import Button from "../../components/common/button/button";
import Styled from "./styled";
import axios from "axios";

function ShopPage({ shopData }) {
  const [shop, setShop] = useState(shopData);
  const [count, setCount] = useState(2);
  const [load, setLoad] = useState(false);
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

  const dataAdd = () => {
    setLoad(true);
    axios
      .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .then((data) => {
        let shopCopy = [...shop, ...data.data];
        /*         shopCopy.push(...data.data); */
        setShop(shopCopy);
        setLoad(false);
      })
      .catch(() => {
        alert("통신 실패");
        setLoad(false);
      });
    setCount(count + 1);
  };

  /* 불러오기는 성공 그러나 디테일 페이지 오류 아직 store.js 리덕스 셋팅을 안해서 */

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
      <div className="state-wrap">
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
        {load === true ? <div className="loading">로딩중...</div> : ""}
      </div>
      {count > 3 ? (
        ""
      ) : (
        <BtnArea className="center">
          <Button type="button" className="green" onClick={dataAdd}>
            더보기
          </Button>
        </BtnArea>
      )}
    </Styled>
  );
}

export default ShopPage;
