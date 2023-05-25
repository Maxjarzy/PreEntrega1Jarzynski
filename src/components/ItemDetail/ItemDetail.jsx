import React, { useContext, useState } from "react";
import { ItemCount } from "../ButtonCount/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContexProvider";
import "./ItemDetail.css";

export const ItemDetail = ({ productDetail }) => {
  const { addToCart } = useContext(CartContext);

  const { articulo, precio, descripcion, foto, stock, id } = productDetail;

  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const item = {
      id,
      articulo,
      precio,
      foto,
    };

    addToCart(item, quantity);
  };

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailCard">
        <div className="itemDetailCardPhoto">
          <img src={foto} className="itemDetailPhoto" alt="..." />
        </div>
        <div className="itemDetailCardInfo">
          <div className="">
            <h5 className="">{articulo}</h5>
            <h6 className="">{`$${precio}`}</h6>
            <p className="">{descripcion}</p>
          </div>
          {quantity > 0 ? (
            <Link to="/cart" className="btn">
              Terminar compra
            </Link>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          )}
          <p className="">
            <small className="">{stock} unidades disponibles</small>
          </p>
          <button onClick={onBack} className="btn">
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
