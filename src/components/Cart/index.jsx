import React from "react";
import { CartCard } from "../Cart-Card";
import { TotalCart } from "../TotalCart";
import styles from "./index.module.css";

export const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <div className={styles.containerCart}>
      <header className={styles.cartHeader}>
        <h2 className={`title2 grey-0`}>Carrinho de compras</h2>
      </header>
      <ul className={styles.cartUl}>
        {currentSale.length === 0 ? (
          <div className={styles.emptyCart}>
            <h2 className={`title3 grey-100`}>Sua sacola está vazia</h2>
            <p className={`title4 grey-50`}>adicione itens</p>
          </div>
        ) : (
          <div>
            {currentSale.map((product, index) => (
              <CartCard
                key={index}
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
            <TotalCart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </div>
        )}
      </ul>
    </div>
  );
};
