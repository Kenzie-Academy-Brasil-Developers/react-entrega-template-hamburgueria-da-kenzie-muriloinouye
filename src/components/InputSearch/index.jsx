import React from "react";
import styles from "./index.module.css";

export const InputSearch = ({ inputFilter, filter }) => {
  return (
    <input
      type="text"
      placeholder="Digitar Pesquisa"
      className={`${styles.searchInput} headline`}
      onChange={(e) => inputFilter(e.target.value)}
      value={filter}
    />
  );
};
