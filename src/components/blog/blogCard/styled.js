import styled from "@emotion/styled";

const Styled = styled.li`
  border-bottom: 1px solid #000;

  .card-title {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
  }

  .card-con {
    margin: 10px 0;
  }

  .card-good {
    margin-bottom: 10px;
    .count {
      margin-left: 5px;
    }
  }

  .detail {
    margin-bottom: 20px;
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default Styled;
