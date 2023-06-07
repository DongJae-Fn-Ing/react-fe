import styled from "@emotion/styled";

const Styled = styled.header`
  display: flex;
  padding: 0 30px;
  height: 50px;
  background-color: #000;
  align-items: center;

  .logo {
    font-size: 18px;
    color: #fff;
  }

  .nav {
    margin-left: 20px;
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
