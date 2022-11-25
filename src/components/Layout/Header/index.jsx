import { Fragment } from "react";

import mealsImage from "../../../assets/delivery.jpg";
import HeaderCartButton from "../HeaderCartButton";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FoodApp</h1>
        <HeaderCartButton onClick={props.onClickCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
