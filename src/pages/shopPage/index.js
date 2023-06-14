import React, { useEffect /* , { useState }  */, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopHeader from "../../components/shop/shopHeader";
import Product from "../../components/shop/product";
import BtnArea from "../../components/common/btnArea";
import Button from "../../components/common/button/button";
import Styled from "./styled";
import axios from "axios";
import { sortItem, dataAdd } from "../../store/shopData/shopData";
import { countUp } from "../../store/store";

function ShopPage() {
  let shop = useSelector((state) => {
    return state.shopData;
  });

  let count = useSelector((state) => {
    return state.count;
  });

  let dispatch = useDispatch();

  const [axiosData, setAxiosData] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .then((data) => {
        setAxiosData(data);
        setLoad(false);
      })
      .catch(() => {
        console.log("통신 실패");
        setLoad(false);
      });
  }, [count]);

  return (
    <Styled>
      <ShopHeader />
      <div className="main-bg">
        {/*       <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div> */}
        {/* 인라인으로 넣을 때 */}
      </div>
      <BtnArea>
        <Button
          type="button"
          className="blue"
          onClick={() => dispatch(sortItem())}
        >
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
      {count === 4 ? (
        ""
      ) : (
        <BtnArea className="center">
          <Button
            type="button"
            className="green"
            onClick={() => {
              dispatch(dataAdd(axiosData));
              dispatch(countUp());
            }}
          >
            더보기
          </Button>
        </BtnArea>
      )}
    </Styled>
  );
}

export default ShopPage;
