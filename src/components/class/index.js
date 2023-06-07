import React from "react";
import Styled from "./styled";

class Test extends React.Component {
  /* 프롭스는 아래 두개가 들어가야함*/
  constructor(props) {
    super(props);
    /* 스테이트는 여기에 저장 */
    this.state = {
      name: "kim",
      age: 20,
    };
  }

  render() {
    return (
      <Styled>
        <div>안녕{this.state.name}</div>
        {/*         스테이트는 이렇게 사용 */}
        <div>{this.props}</div>
        {/* 프롭스 사용 */}
        <button
          type="button"
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          스테이트 변경
        </button>
      </Styled>
    );
  }
}

/* 클래스형 함수 */
/* class는 변수, 함수 보관하는 통 */
/* extends는 기존 class안에 있던 변수, 함수 복사해주는 문법 */
/* React.Component라는 class안에 있던 변수와 함수들을 복사해야 컴포넌트라고 인정해주기 때문에 

class 작명이름 extends React.Component라고 쓰는 것입니다.  */

/* 1. class 어쩌구 작성하고 컴포넌트 이름 작명합니다.

2. constructor, super, render 함수 3개 채워넣습니다. 기본 템플릿같은 것임 

3. 컴포넌트는 길고 복잡한 html 축약할 때 쓴다고 했습니다. return 안에 축약할 html 적으면 됩니다. */
