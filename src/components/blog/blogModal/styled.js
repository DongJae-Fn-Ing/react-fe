import styled from "@emotion/styled";

const Styled = styled.div`
  .modal-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.45);
  }

  .modal {
    position: fixed;
    width: 500px;
    border-radius: 5px;
    background-color: #fff;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .modal-header {
      display: flex;
      padding: 0 20px;
      height: 50px;
      border-bottom: 1.1px solid #000;
      justify-content: space-between;
      align-items: center;
    }

    .modal-con {
      padding: 20px;
      min-height: 300px;
    }
  }
`;

export default Styled;
