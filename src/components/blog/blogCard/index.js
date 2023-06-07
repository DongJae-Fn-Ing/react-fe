import React from "react";
import Button from "../../common/button/button";
import Styled from "./styled";

function BlogCard({
  title,
  good,
  propGood,
  nameChange,
  modalState,
  modalOpen,
  subKey,
  titleDelete,
  date,
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

  const deletes = () => {
    titleDelete(subKey);
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
          좋아요 눌러
        </button>
        <span className="count">{good}</span>
      </div>
      <div className="date-area">
        <p className="date-title">게시 날짜:</p>
        <span className="date-data">{date}</span>
      </div>
      <Button className="gray detail" type="button" onClick={open}>
        상세정보
      </Button>
      <Button className="red" type="button" onClick={deletes}>
        삭제
      </Button>
    </Styled>
  );
}

export default BlogCard;
