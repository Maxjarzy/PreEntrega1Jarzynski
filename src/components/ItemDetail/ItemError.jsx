import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemError = () => {
 
  return (
    <div className="itemDetailContainer itemDetailError">
      <h1 className="itemError">¡Lo sentimos!</h1>
      <h5 className="itemError">Este producto no está disponible, en este momento.</h5>
      <Link to='/'className="btn itemError">Ir al menú principal</Link>
    </div>
  );
};
