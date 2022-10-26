import React from "react";
import Logo from "../atoms/Logo";
import Nav from "../molecules/Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo addClass="header__logo" logo_img="logo.png"></Logo>
        <Nav></Nav>
      </div>
    </header>
  );
}

export default Header;
