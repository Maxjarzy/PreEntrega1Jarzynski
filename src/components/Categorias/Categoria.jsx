import React from "react";
import { Item } from "../ItemList/Item";

export const Categoria = ({ categoria }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {categoria.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
