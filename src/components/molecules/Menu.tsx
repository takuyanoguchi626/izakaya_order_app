import React from "react";
import Logo from "../atoms/Logo";

type props = {
  addClass: string;
};

function Menu(props: props) {
  const menuList = [
    {
      img: "drink.jpg",
      name: "おさけ",
    },
    {
      img: "drink.jpg",
      name: "おさけ",
    },
    {
      img: "drink.jpg",
      name: "おさけ",
    },
    {
      img: "drink.jpg",
      name: "おさけ",
    },
  ];

  return (
    <>
      {menuList.map((menu) => {
        return (
          <div className={"menu " + props.addClass}>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="">
                  <Logo logo_img={menu.img}></Logo>
                  <h2>{menu.name}</h2>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Menu;
