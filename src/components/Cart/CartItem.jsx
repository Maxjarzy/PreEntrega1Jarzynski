import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "./CartContexProvider";
import "./CartItem.css";

export const CartItem = ({ precio, qty, foto, id }) => {
  const { deleteItem, totalImport } = useContext(CartContext);

  return (
    <div className="CartItem--Container">
      <div>
        <img src={foto} className="img-fluid" alt="Articulo" />
      </div>
      <p>${precio}</p>
      <p>{qty} u</p>
      <p>${totalImport(precio, qty)}</p>
      <button onClick={()=> deleteItem(id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
