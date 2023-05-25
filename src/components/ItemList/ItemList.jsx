import React from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

export const ItemList = ({ products }) => {
  const { id } = useParams();

  return (
    <>
      <h1 className="itemListTitle">{id ? `${id}` : "Home"}</h1>
      <div className="itemList">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
