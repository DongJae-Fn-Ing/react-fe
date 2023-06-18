import styled from "@emotion/styled";

const Styled = styled.div`
  padding: 20px;

  .cart-table {
    width: 80%;
    margin: 0 auto;

    thead,
    tbody {
      tr {
        th,
        td {
          padding: 15px;
        }

        th {
          background-color: #ddd;
          border: 1px solid #000;
          border-bottom: none;
        }

        td {
          background-color: #fff;
          border: 1px solid #000;
        }
      }
    }
  }
`;

export default Styled;
