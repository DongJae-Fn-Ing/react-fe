import React, { useEffect, useState } from "react";
import Styled from "./styled";

import BlogHeader from "../../components/blog/blogHeader";
import BlogCard from "../../components/blog/blogCard";
import BtnArea from "../../components/common/btnArea";
import Modal from "../../components/blog/blogModal";

function BlogPage() {
  let post = "블로그";

  const [title, setTitle] = useState(["자바스크립트", "리액트", "뷰"]);

  const [good, setGood] = useState(
    title.map(() => {
      return 0;
    })
  );

  const [modalState, setModalState] = useState(false);
  const [keyData, setKeyData] = useState();

  const nameChange = (data) => {
    /*     console.log(data); */
    let nameCopy = [...title];
    nameCopy[data] = "이름 바꾸기!";
    setTitle(nameCopy);
  };

  const propGood = (data, i) => {
    /*     console.log(data, i); */
    let goodCopy = [...good];
    goodCopy[i] = data;
    setGood(goodCopy);
  };

  const titleSort = () => {
    let sortCopy = [...title];
    sortCopy.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    setTitle(sortCopy);
  };

  const modalOpen = (data, i) => {
    setModalState(data);
    setKeyData(i);
  };

  const modalClose = (data) => {
    setModalState(data);
  };

  useEffect(() => {
    const body = document.body;
    if (modalState === true) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "";
    }
  }, [modalState]);

  return (
    <Styled>
      <BlogHeader />
      <h2 className="blog-title">{post}</h2>
      <BtnArea>
        <button type="button" onClick={titleSort}>
          정렬하기
        </button>
      </BtnArea>
      <div className="content">
        <ul className="blog-list">
          {title.map((item, i) => {
            return (
              <BlogCard
                title={item}
                good={good[i]}
                propGood={propGood}
                nameChange={nameChange}
                modalState={modalState}
                modalOpen={modalOpen}
                key={i}
                subKey={i}
              />
            );
          })}
        </ul>
      </div>
      {modalState === true ? (
        <Modal
          modalTitle={title[keyData]}
          modalState={modalState}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </Styled>
  );
}

export default BlogPage;
