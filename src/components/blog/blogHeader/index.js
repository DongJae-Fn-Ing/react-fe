import React from "react";
import Styled from "./styled";

function BlogHeader() {
  return (
    <Styled>
      <h1 className="logo">logo</h1>
      <nav className="nav">
        <ul className="menu">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </nav>
    </Styled>
  );
}

export default BlogHeader;
