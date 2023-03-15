import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo.png"
import landingImage from "../../assets/img/homePage.jpg";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
      <img src={logo} alt="Royal Plate Restaurant & Catering HTML Template" />
        <HeaderButton>Cart</HeaderButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={landingImage}  alt="Royal Plate - Restaurant & Catering React App" />
      </div>
    </>
  );
};

export default Header;
