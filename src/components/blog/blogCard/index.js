import React from "react";
import Styled from "./styled";

function BlogCard({ title, good, propGood, subKey }) {
  const plus = () => {
    propGood((good += 1), subKey);
  };
  return (
    <Styled className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-con">글내용</p>
      <div className="card-good">
        <button className="btn" type="button" onClick={plus}>
          좋아요
        </button>
        <span className="count">{good}</span>
      </div>
    </Styled>
  );
}

export default BlogCard;
