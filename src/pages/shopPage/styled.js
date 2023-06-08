import styled from "@emotion/styled";
import Bg from "../../image/bg.png";

const Styled = styled.div`
  .main-bg {
    height: 300px;
    background: url(${Bg}) no-repeat center;
    background-size: cover;
  }

  .product-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
  }
`;

export default Styled;
