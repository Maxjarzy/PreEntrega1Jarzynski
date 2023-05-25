import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "./CartContexProvider";
import "./CartItem.css";

export const CartItem = ({ precio, qty, foto, id, articulo }) => {
  const { deleteItem, totalImport } = useContext(CartContext);

  return (
    <div className="cartItem">
      <div>
        <img src={foto} className="cartItemImg" alt="Articulo" />
      </div>
      <p>${precio}</p>
      <p>{qty} u</p>
      <p>${totalImport(precio, qty)}</p>
      <button onClick={()=> deleteItem(id)} className="btn">
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
