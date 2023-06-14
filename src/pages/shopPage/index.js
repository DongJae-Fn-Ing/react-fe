import React /* , { useState }  */ from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopHeader from "../../components/shop/shopHeader";
import Product from "../../components/shop/product";
import BtnArea from "../../components/common/btnArea";
import Button from "../../components/common/button/button";
import Styled from "./styled";
/* import axios from "axios"; */
import { sortItem, dataAdd } from "../../store/shopData/shopData";

function ShopPage() {
  let shop = useSelector((state) => {
    return state.shopData;
  });
  let dispatch = useDispatch();


  /*   const [count, setCount] = useState(2);
  const [load, setLoad] = useState(false); */

  /*   const dataAdd = () => {
    setLoad(true);
    axios
      .get(`https://codingapple1.github.io/shop/data${count}.json`)
      .then((data) => {
        console.log(data.data);
        setLoad(false);
      })
      .catch(() => {
        alert("통신 실패");
        setLoad(false);
      });
    setCount(count + 1);
  }; */

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
        {/*         {load === true ? <div className="loading">로딩중...</div> : ""} */}
      </div>
      {/*       {count > 3 ? (
        ""
      ) : (
        <BtnArea className="center">
          <Button type="button" className="green" onClick={dataAdd}>
            더보기
          </Button>
        </BtnArea>
      )} */}
      <BtnArea className="center">
        <Button
          type="button"
          className="green"
          onClick={() => dispatch(dataAdd())}
        >
          더보기
        </Button>
      </BtnArea>
    </Styled>
  );
}

export default ShopPage;
