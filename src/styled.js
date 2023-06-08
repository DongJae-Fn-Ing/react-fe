import styled from "@emotion/styled";

const Styled = styled.div`
  .route-list {
    display: flex;
    height: 50px;
    padding: 0 20px;
    background-color: #d9d9d9;
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
