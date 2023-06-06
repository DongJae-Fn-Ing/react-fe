import React from "react";
import Styled from "./styled";

function BlogModal({ modalState, modalClose, modalTitle }) {
  const close = () => {
    modalClose(!modalState);
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
        </div>
      </div>
    </Styled>
  );
}

export default BlogModal;
