import React from "react";
import Button from "../../common/button/button";

import Styled from "./styled";

function BlogModal({
  modalState,
  modalClose,
  modalTitle,
  keyData,
  modalNameChange,
}) {
  const close = () => {
    modalClose(!modalState);
  };
  const change = () => {
    modalNameChange(keyData);
  };

  return (
    <Styled>
      <div className="modal-mask"></div>
      <div className="modal">
        <div className="modal-header">
          <h4>{modalTitle}</h4>
          <button type="button" className="modal-close" onClick={close}>
            닫기 버튼
          </button>
        </div>
        <div className="modal-con">
          <p>모달 텍스트</p>
          <p>상세내용</p>
          <Button className="gray" type="button" onClick={change}>
            모달에서 제목 바꾸기
          </Button>
        </div>
      </div>
    </Styled>
  );
}

export default BlogModal;
