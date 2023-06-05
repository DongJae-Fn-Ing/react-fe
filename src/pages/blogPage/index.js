import React, { useState } from "react";
import Styled from "./styled";

import BlogHeader from "../../components/blog/blogHeader";
import BlogCard from "../../components/blog/blogCard";

function BlogPage() {
  const [tite, setTitle] = useState(["자바스크립트", "리액트", "뷰"]);
  const [good, setGood] = useState([0, 0, 2]);
  let post = "강남우동맛집";

  const propGood = (data) => {
    console.log(data);
    let copy = [...good];
    copy[0] = data;
    setGood(copy);
  };

  return (
    <Styled>
      <BlogHeader />
      <h2 className="blog-title">{post}</h2>
      <div className="content">
        <ul className="blog-list">
          {tite.map((item, i) => {
            return (
              <BlogCard
                propGood={propGood}
                good={good[i]}
                title={item}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    </Styled>
  );
}

export default BlogPage;
