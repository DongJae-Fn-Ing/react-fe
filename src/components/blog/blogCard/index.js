import React from "react";
import Styled from "./styled";

function BlogCard({
  title,
  good,
  propGood,
  nameChange,
  modalState,
  modalOpen,
  subKey,
}) {
  const change = () => {
    nameChange(subKey);
  };

  const plus = () => {
    propGood((good += 1), subKey);
  };

  const open = () => {
    modalOpen(!modalState, subKey);
  };

  return (
    <Styled className="card">
      <h3 className="card-title">{title}</h3>
      <button type="button" onClick={change}>
        제목 바꾸기
      </button>
      <p className="card-con">글내용</p>
      <div className="card-good">
        <button className="btn" type="button" onClick={plus}>
          좋아요
        </button>
        <span className="count">{good}</span>
      </div>
      <button className="detail" type="button" onClick={open}>
        상세정보
      </button>
    </Styled>
  );
}

export default BlogCard;
