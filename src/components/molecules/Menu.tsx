import React from "react";
import Logo from "../atoms/Logo";

type props = {
  addClass: string;
};

function Menu(props: props) {
  const menuList = ["sake.jpg", "tsumami.webp", "ippin.webp", "shime.webp"];

  return (
    <div className={"menu " + props.addClass}>
      <ul className="menu__list">
        {menuList.map((menu) => {
          return (
            <li className="menu__item">
              <a href="">
                <Logo logo_img={menu} addClass={"menu__logo"}></Logo>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
