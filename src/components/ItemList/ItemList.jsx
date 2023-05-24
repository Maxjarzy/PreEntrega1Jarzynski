import React from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

export const ItemList = ({ products }) => {

  const { id } = useParams()

  return (
    <div>
      <h1>{id ? `${id}` : "Home"}</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
