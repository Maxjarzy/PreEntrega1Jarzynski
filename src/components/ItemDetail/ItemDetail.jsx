import React, { useContext, useState } from "react";
import { ItemCount } from "../ButtonCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContexProvider";

export const ItemDetail = ({ productDetail }) => {

  const {addToCart} = useContext(CartContext)

  const { articulo, precio, descripcion, foto, stock, id } = productDetail;

  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const item = {
      id, articulo, precio, foto
    }

    addToCart(item, quantity)
  };
  
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
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
            <p className="card-text">{descripcion}</p>
          </div>
          {quantity > 0 ? (
            <Link to="/cart">Terminar compra</Link>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          )}
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
