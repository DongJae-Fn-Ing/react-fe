import styled from "@emotion/styled";
import Bg from "../../image/bg.png";

const Styled = styled.div`
  .main-bg {
    height: 300px;
    background: url(${Bg}) no-repeat center;
    background-size: cover;
  }

  .state-wrap {
    position: relative;
    .product-list {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      padding: 20px;
    }

    .loading {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 40px;
      background-color: #fff;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      transition: all 1s;
    }
  }
`;

export default Styled;
