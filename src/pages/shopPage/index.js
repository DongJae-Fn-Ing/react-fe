import React, { useEffect, useState } from "react";
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

  /* 로컬스토리지 */
  /* let obj = { name: "kim" }; */
  /*   JSON.stringify(obj); */
  /* 자바스크립트 제이슨 변환 함수 */
  //localStorage.setItem("data", JSON.stringify(obj));
  //let open = localStorage.getItem("data");
  /* JSON.parse(open); */
  /* 꺼낸 json 파일 다시 obj변환 */
  /*   console.log("json:::", JSON.parse(open)); */

  const localData = (data) => {
    let localOpen = localStorage.getItem("new");
    let openData = JSON.parse(localOpen);
    openData.push(data);
    let result = openData.filter((v, i) => openData.indexOf(v) === i);
    localStorage.setItem("new", JSON.stringify(result));
  };

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
                localData={localData}
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
