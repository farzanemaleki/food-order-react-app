import React from "react";
import "./Header.css";

import logo from '../../images/logo.png';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
     <header>
        <div className="header-inner">
            <div className="container">
            {/*          <!--logo-->            */}
                <div className="logo-holder">
                    <a href="index.html">
                    <img src={logo} className="respimg logo-vis" alt="" />
                    </a>
                </div>
                <HeaderCartButton />
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
