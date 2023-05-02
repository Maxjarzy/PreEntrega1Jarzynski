import React, { useState, useEffect } from "react";
import { getProductos, getCategoria } from "../../Assets/data/asyncMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();
  

  useEffect(() => {
    const asyncFunc = id ? getCategoria : getProductos;

    asyncFunc(id)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="Item--Container">
      <h1>{id ? `${id}` : "Home"}</h1>
      <ItemList products={productos} />
    </div>
  );
};
