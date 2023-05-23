import React from "react";
import { Link } from "react-router-dom";
import './Item.css'


export const Item = ({ articulo, precio, foto, stock, id }) => {


  return (
    <div className="Card"  key={id}>
      <img src={foto} className="Card--Img" alt="item" />
      <div className="Card--Body">
        <h5 className="Card--Title">{articulo}</h5>
        <p className="Card--Text">
          <small className="Card--Text--Secondary">{`$${precio}`}</small>
        </p>
        <Link to={`/item/${id}`} className="Card--Body--Link">Ver detalle</Link>
        <p className="Card--Text">
          <small className="Card--Text--Secondary--Last">Cantidad disponible: {stock}</small>
        </p>
      </div>
    </div>
  );
};
