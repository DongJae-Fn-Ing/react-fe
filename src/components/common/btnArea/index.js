import React from "react";
import Styled from "./styled";

function BtnArea({ children, className }) {
  return <Styled className={className}>{children}</Styled>;
}

export default BtnArea;
