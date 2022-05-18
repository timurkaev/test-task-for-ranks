import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <ul className={styles.classlist}>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/valutes">
            <li>Курсы валют</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
