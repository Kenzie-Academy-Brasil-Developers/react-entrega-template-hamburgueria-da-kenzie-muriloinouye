import React from "react";
import logo from "../../images/logo.svg";
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import styles from "./index.module.css";

export const Header = ({ inputFilter, filter }) => {
  return (
    <header className={styles.headerBackground}>
      <div className={`container ${styles.headerContainer}`}>
        <img src={logo} alt="" />
        <label className={styles.labelSearch}>
          <InputSearch inputFilter={inputFilter} filter={filter} />
          <Button />
        </label>
      </div>
    </header>
  );
};
