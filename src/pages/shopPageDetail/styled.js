import styled from "@emotion/styled";

const Styled = styled.div`
  padding: 40px;

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
`;

export default Styled;
