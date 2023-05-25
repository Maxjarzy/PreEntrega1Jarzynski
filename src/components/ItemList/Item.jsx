import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ articulo, precio, foto, stock, id }) => {
  return (
    <div className="card">
      <img src={foto} alt="" />
      <div className="card-content">
        <h2>{articulo}</h2>
        <p>${precio}</p>
        <p>{stock} unidades disponibles</p>
        <Link to={`/item/${id}`}>
          Detalles
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </Link>
      </div>
    </div>
  );
};
