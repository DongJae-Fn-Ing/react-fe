import styled from "@emotion/styled";

const Styled = styled.div`
  padding: 40px;
  transition: all 1s ease-in;

  .alert-box {
    height: 30px;
    background-color: blueviolet;
  }

  .deatil-img {
    margin: 20px auto;
    max-width: 1000px;
    text-align: center;

    img {
      display: block;
      width: 100%;
    }
  }

  .detail-con {
    .detail-tit {
      margin-bottom: 10px;
      font-size: 40px;
      font-weight: bold;
    }

    p {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    button {
      & + button {
        margin-left: 10px;
      }
    }
  }

  .detail-tab {
    margin-top: 20px;

    .detail-tab-header {
      display: flex;
      margin-bottom: -1px;

      .tab-name {
        width: 100px;
        height: 50px;
        background-color: #fff;
        border: 1px solid #ddd;
        transition: all 0.3s ease-in;

        &:not(:last-child) {
          border-right: none;
        }
        button {
          width: 100%;
          height: 100%;
          text-align: center;
          transition: all 0.3s ease-in;
        }

        &.on,
        &:hover {
          border-bottom-color: #fff;
          button {
            color: #3f9aed;
            font-weight: bold;
          }
        }
      }
    }

    .tab-con-wrap {
      width: 100%;
      height: 500px;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      transition: all 0.3s ease-in;
      &.start {
        opacity: 0;
      }

      &.end {
        transition: all 0.3s ease-in;
        opacity: 1;
        background-color: #3f9aed;
      }
      .detail-tab-content {
        /* 전환 애니메이션 만들기 */
        /* 1.애니메이션 동작 전 className 만들기 */
        /* 2.애니메이션 동작 후 className 만들기 */
        /* 3. className에 transition 속성 추기 */
        /* 4. 원할 때 2번 className 추가 */
      }
    }
  }

  &.start {
    opacity: 0;
  }

  &.end {
    opacity: 1;
  }
`;

export default Styled;
