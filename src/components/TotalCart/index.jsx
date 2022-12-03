import React from "react";
import styles from "./index.module.css";

export const TotalCart = ({ currentSale, setCurrentSale }) => {
  const arrayPrices = [];

  currentSale.forEach((element) => {
    arrayPrices.push(element.price);
  });

  const reduced = arrayPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return (
    <div className={styles.totalDiv}>
      <div className={styles.reduceDiv}>
        <p className={`headline ${styles.total}`}>Total</p>
        <p className={`grey-50 ${styles.value}`}>{`R$ ${reduced.toFixed(
          2
        )}`}</p>
      </div>
      <button
        className={`headline grey-50 ${styles.removeButton}`}
        onClick={() => setCurrentSale([])}
      >
        Remover todos
      </button>
    </div>
  );
};
