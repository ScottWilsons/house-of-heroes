import React from "react";
import Logo from "./logo";

//styling
import "./navstyle.sass";

function Title() {
  return (
    <>
      <Logo />
      <h1 className="title">House of Heroes</h1>
      <Logo />
    </>
  );
}

export default Title;
