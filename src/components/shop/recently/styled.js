import styled from "@emotion/styled";

const Styled = styled.div`
  position: fixed;
  width: 120px;
  min-height: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  right: 10px;
  bottom: 10px;
  z-index: 10;

  .recently-title {
    text-align: center;
  }

  .list {
    overflow-y: auto;
    height: 160px;
    max-height: 160px;
    .list-item {
      figure {
        width: 100%;
        .list-img {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }
        figcaption {
          p {
            font-size: 10px;
            text-align: center;
          }
        }
      }

      &:not(:last-child){
        margin-bottom: 5px;
      }
    }
  }
`;

export default Styled;
