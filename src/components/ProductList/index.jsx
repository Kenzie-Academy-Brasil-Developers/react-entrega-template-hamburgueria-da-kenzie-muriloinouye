import React from "react";
import { Card } from "../Card";
import styles from "./index.module.css";

export const ListProducts = ({
  filteredProducts,
  filter,
  setFilter,
  addCart,
  currentSale,
}) => {
  return (
    <div className={`container ${styles.listProductsContainer}`}>
      {filter === "" ? (
        ""
      ) : (
        <div className={styles.filterDiv}>
          <h2 className="title1">
            Resultados para: <span className="title1 grey-50">{filter}</span>
          </h2>
          <button
            className={`body grey-0 ${styles.resetFilter}`}
            onClick={() => setFilter("")}
          >
            Limpar busca
          </button>
        </div>
      )}
      <ul>
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            product={product}
            addCart={addCart}
            currentSale={currentSale}
          />
        ))}
      </ul>
    </div>
  );
};
