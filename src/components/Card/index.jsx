import React from "react";
import styles from "./index.module.css";

export const Card = ({ product, addCart, currentSale }) => {
  function contains() {
    if (currentSale.some((obj) => obj.id === product.id)) {
      return true;
    }
  }

  return (
    <li>
      <div className={styles.divImg}>
        <img src={product.img} alt="" />
      </div>
      <div className={styles.divInfo}>
        <h2 className={`title2 ${styles.productTitle}`}>{product.name}</h2>
        <p className={`caption ${styles.productCategory}`}>
          {product.category}
        </p>
        <p className={`body ${styles.productPrice}`}>{`R$ ${product.price}`}</p>
        <button
          className={`body ${styles.addButton} ${
            contains() ? styles.addButtonContains : ""
          }`}
          disabled={contains() ? true : false}
          onClick={() => addCart(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
