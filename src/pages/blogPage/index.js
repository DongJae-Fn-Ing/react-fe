import React, { useState } from "react";
import Styled from "./styled";

import BlogHeader from "../../components/blog/blogHeader";
import BlogCard from "../../components/blog/blogCard";

function BlogPage() {
  const [title, setTitle] = useState([
    "자바스크립트",
    "리액트",
    "뷰",
    "앵귤러",
  ]);
  const [good, setGood] = useState(
    title.map(() => {
      return 0;
    })
  );
  let post = "강남우동맛집";

  const propGood = (data, i) => {
    console.log(data, i);
    let copy = [...good];
    copy[i] = data;
    setGood(copy);
  };

  return (
    <Styled>
      <BlogHeader />
      <h2 className="blog-title">{post}</h2>
      <div className="content">
        <ul className="blog-list">
          {title.map((item, i) => {
            return (
              <BlogCard
                propGood={propGood}
                good={good[i]}
                title={item}
                key={i}
                subKey={i}
              />
            );
          })}
        </ul>
      </div>
    </Styled>
  );
}

export default BlogPage;
