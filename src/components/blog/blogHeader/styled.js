import styled from "@emotion/styled";

const Styled = styled.header`
  display: flex;
  padding: 0 30px;
  height: 50px;
  background-color: #000;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 18px;
    color: #fff;
  }

  .nav {
    .menu {
      display: flex;
      align-items: center;

      li {
        color: #fff;

        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
`;

export default Styled;
