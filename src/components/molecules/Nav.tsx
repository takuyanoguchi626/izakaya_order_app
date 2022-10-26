import React from "react";
import Logo from "../atoms/Logo";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="orderhistory">
            <Logo logo_img="orderHistory.png"></Logo>
          </a>
        </li>
        <li className="nav__item">
          <a href="/shoppingCart">
            <Logo logo_img="cart.png"></Logo>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
