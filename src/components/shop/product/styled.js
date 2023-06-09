import styled from "@emotion/styled";

const Styled = styled.li`
  width: calc(33% - 10px);
  min-height: 200px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;

  figure {
    img {
      width: 100%;
    }

    figcaption {
      margin-top: 20px;
      .product-title {
        margin-bottom: 15px;
      }
      p {
        margin-bottom: 5px;
      }
    }
  }
`;

export default Styled;
