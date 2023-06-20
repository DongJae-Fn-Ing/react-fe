import React, { useState, useTransition, useDeferredValue } from "react";
import Input from "../../components/common/input/input";
import Styled from "./styled";

let a = new Array(10000).fill(0);

function InputPage() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  // 선언후 변수에 담음 > 보통 이렇게 작명

  /* let 변수명 = useDeferredValue(여기에 스테이트) */
  // useDeferredValue 안에 들어간 state는 늦게 처리하고 그값을 변수명에 넣어줌
  //useTransition이랑 같음
  return (
    <Styled>
      <Input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
          // 문제의 state를 startTransition으로 감싸기
          // 이러면 보통 빨라짐
          // 원리는
          // 브라우저는 동시 작업이 불가능 해서 버벅임
          // 1. input에 텍스트 보여주고, div 10000개 만들기를 동시 처리 그래서 버벅임
          // 그래서 위처럼 감싸주면 어떤식으로 동작?
          // startTransition안에 있는 코드를 늦게 처리
          // 1.input에 텍스트 보여주고, 여유 있을 때 div 10000개 만들음
          // 그러면 isPending은 뭐임?
          // startTransition 처리중일 때 isPending은 true
        }}
      />
      {/* 만약에 아래처럼 성능 저하가 일어나면? useTransition를 써라 */}
      {isPending
        ? "로딩중..."
        : a.map((x, y) => {
            return <div key={y}>{name}</div>;
          })}
    </Styled>
  );
}

export default InputPage;
