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

  .date-area {
    display: flex;
    margin-bottom: 10px;

    .date-title {
      margin-right: 5px;
      color: #000;
      font-weight: bold;
    }
  }

  .detail {
    margin-bottom: 10px;
    font-weight: bold;

    & + button {
      margin-left: 5px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default Styled;
