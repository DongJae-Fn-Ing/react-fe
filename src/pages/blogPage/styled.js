import styled from "@emotion/styled";

const DivStyled = styled.div`
  .blog-title {
    margin: 30px 0;
    font-size: 30px;
    text-align: center;
  }

  .content {
    padding: 0 20px;

    .blog-list {
      overflow-y: auto;
      max-height: 642px;
    }

    .list-add {
      margin: 20px 0;

      label {
        font-weight: bold;
      }

      input {
        margin: 0 10px;
      }
    }
  }
`;

export default DivStyled;
