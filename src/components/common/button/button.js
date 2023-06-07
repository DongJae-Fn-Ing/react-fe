import styled from "@emotion/styled";

const Styled = styled.button`
  height: 38px;
  padding: 0 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  letter-spacing: -1px;

  /* size */
  &.small {
    height: 30px;
    padding: 10px;
  }

  &.big {
    height: 50px;
  }

  /* color */
  &.black {
    border-color: #000;
    background-color: #000;
  }

  &.gray {
    border-color: #999;
    background-color: #999;
  }

  &.red {
    border-color: #d71826;
    background-color: #d71826;
  }

  &.blue {
    border-color: #3f9aed;
    background-color: #3f9aed;
  }

  &.green {
    border-color: #2cbbb6;
    background-color: #2cbbb6;
  }
`;

export default Styled;
