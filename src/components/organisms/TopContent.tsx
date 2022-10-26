import React from "react";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

function TopContent() {
  return (
    <main className="top">
      <div className="top__inner">
        <figure className="top__img-wrapper">
          <img className="top__img" src="./imgs/top_image.jpg" alt="" />
        </figure>
        <div className="top__menu-wrapper">
          <Menu addClass="top__menu"></Menu>
        </div>
      </div>
    </main>
  );
}

export default TopContent;
