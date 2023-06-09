import React, { useEffect, useState } from "react";

import BlogHeader from "../../components/blog/blogHeader";
import BlogCard from "../../components/blog/blogCard";
import BtnArea from "../../components/common/btnArea";
import Button from "../../components/common/button/button";
import Input from "../../components/common/input/input";
import Modal from "../../components/blog/blogModal";
import Styled from "./styled";

function BlogPage() {
  let post = "블로그";

  const [title, setTitle] = useState(["자바스크립트", "리액트", "뷰"]);
  const [date, setDate] = useState(["2023-06-05 14:08:15", "2023-06-05 15:04:15", "2023-06-05 18:08:15"]);

  const [good, setGood] = useState(
    title.map(() => {
      return 0;
    })
  );

  const [modalState, setModalState] = useState(false);
  const [keyData, setKeyData] = useState();
  const [text, setText] = useState("");

  const nameChange = (data) => {
    let nameCopy = [...title];
    nameCopy[data] = "마스터!";
    setTitle(nameCopy);
  };

  const propGood = (data, i) => {
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

  const modalNameChange = (data) => {
    let modalNameCopy = [...title];
    modalNameCopy[data] = "마스터!";
    setTitle(modalNameCopy);
  };

  const inputText = (e) => {
    setText(e.target.value);
  };

  const textAdd = () => {
    let textAddCopy = [...title];
    let textGoodCopy = [...good];
    let textDateCopy = [...date];
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let hours = ("0" + today.getHours()).slice(-2);
    let minutes = ("0" + today.getMinutes()).slice(-2);
    let seconds = ("0" + today.getSeconds()).slice(-2);
    let time =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    if (text === "") {
      alert("아무것도 입력 안했습니다!");
    } else {
      textAddCopy.push(text);
      textGoodCopy.push(0);
      textDateCopy.push(time);
      console.log("테스트:::", time);
      setTitle(textAddCopy);
      setGood(textGoodCopy);
      setDate(textDateCopy);
    }
  };

  const titleDelete = (data) => {
    let titleDeleteCopy = [...title];
    titleDeleteCopy.splice(data, 1);
    setTitle(titleDeleteCopy);
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
        <Button className="black" type="button" onClick={titleSort}>
          정렬하기
        </Button>
      </BtnArea>
      <div className="content">
        <ul className="blog-list scroll-active">
          {title.map((item, i) => {
            return (
              <BlogCard
                key={i}
                title={item}
                good={good[i]}
                date={date[i]}
                propGood={propGood}
                nameChange={nameChange}
                modalState={modalState}
                modalOpen={modalOpen}
                subKey={i}
                titleDelete={titleDelete}
              />
            );
          })}
        </ul>
        <div className="list-add">
          <label for="add">list 추가</label>
          <Input
            type="text"
            placeholder="입력하세요."
            id="add"
            style={{ width: 200 }}
            onChange={inputText}
          />
          <Button onClick={textAdd} className="blue" type="button">
            추가
          </Button>
        </div>
      </div>
      {modalState === true ? (
        <Modal
          modalTitle={title[keyData]}
          modalState={modalState}
          modalClose={modalClose}
          keyData={keyData}
          modalNameChange={modalNameChange}
        />
      ) : (
        ""
      )}
    </Styled>
  );
}

export default BlogPage;
