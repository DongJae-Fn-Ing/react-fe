import styled from "@emotion/styled";

const Styled = styled.div`
  .top-area {
    display: flex;
    height: 50px;
    padding: 0 20px;
    background-color: #d9d9d9;
    justify-content: space-between;
    align-items: center;
  }

  .route-list {
    display: flex;
    height: 100%;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 20px;
      }

      a {
        font-weight: bold;
      }
    }
  }
`;

export default Styled;
