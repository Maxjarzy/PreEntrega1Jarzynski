import React from "react";
import { ItemCount } from "../ButtonCount/ItemCount";
import { useNavigate } from "react-router-dom";


export const ItemDetail = ({ productDetail }) => {
  const { articulo, precio, descripción, foto, stock } = productDetail;

  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }
  return (
    <div className="card mb-3 container-fluid" /* style="max-width: 540px;" */>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={foto} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{articulo}</h5>
            <h6 className="card-title">{`$${precio}`}</h6>
            <p className="card-text">{descripción}</p>
          </div>
          <ItemCount stock={stock} initial={1} />
          <p className="card-text">
            <small className="text-body-secondary">
              {stock} unidades disponibles
            </small>
          </p>
          <button onClick={onBack}>Volver</button>
        </div>
      </div>
    </div>
  );
};
