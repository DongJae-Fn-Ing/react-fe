import styled from "@emotion/styled";

const Styled = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 15px 0px;
  justify-content: flex-end;
  align-items: center;

  &.center {
    justify-content: center;
  }

  &.left {
    justify-content: flex-start;
  }

  .btn {
    & + & {
      margin-left: 10px;
    }
  }
`;

export default Styled;
