import React from "react";

import CartIcon from "../Cart/CartIcon";

import './HeaderCartButton.css';
const HeaderCartButton = () => {
  return (
    <button className="cartButton">
        <CartIcon />
        <span>Your Card</span>
        <span className="badge">2</span>
    </button>
  );
};

export default HeaderCartButton;
