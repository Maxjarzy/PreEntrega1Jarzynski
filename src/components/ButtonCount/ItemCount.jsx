import React, { useState } from "react";
import "./buttonCount.css";

export const ItemCount = ({ initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const detract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button onClick={detract} className="itemCountBtn">-</button>
        <p
          className={`itemCountDisplay ${
            stock !== 0 ? "stockPositivo" : "sinStock"
          }`}
        >
          {count}
        </p>
        <button onClick={add} className="itemCountBtn">+</button>
      </div>
      <button onClick={() =>{ onAdd(count); setCount(initial)}} disabled={stock === 0} className="btn">
        Agregar al carrito
      </button>
    </div>
  );
};
