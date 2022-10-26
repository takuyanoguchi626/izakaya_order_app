import React from "react";

type props = {
  logo_img: string;
  addClass?: string;
};

function Logo(props: props) {
  return (
    <figure className={"logo " + props.addClass}>
      <img className="logo__img" src={"./imgs/" + props.logo_img} alt="" />
    </figure>
  );
}

export default Logo;
