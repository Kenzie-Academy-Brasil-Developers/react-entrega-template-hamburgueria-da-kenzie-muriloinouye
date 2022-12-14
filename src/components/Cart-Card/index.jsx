import React from "react";
import styles from "./index.module.css";

export const CartCard = ({ product, currentSale, setCurrentSale }) => {
  console.log(currentSale);
  const index = currentSale.map((e) => e.id).indexOf(product.id);
  console.log(index);

  function removeItem(id) {
    const test = currentSale.filter((t) => t.id !== id);
    setCurrentSale(test);
  }

  return (
    <li className={styles.cartCard}>
      <div className={styles.productDiv}>
        <img src={product.img} alt="" />
        <div className={styles.divInfo}>
          <h3 className={`title2 ${styles.productName}`}>{product.name}</h3>
          <p className={`headline grey-50 ${styles.productCategory}`}>
            {product.category}
          </p>
        </div>
      </div>
      <button
        className={`caption grey-50 ${styles.removeButton}`}
        onClick={() => removeItem(product.id)}
      >
        Remover
      </button>
    </li>
  );
};
