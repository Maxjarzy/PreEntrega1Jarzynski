import React from "react";
import { ItemCount } from "./ButtonCount/ItemCount";

export const ItemListContainer = ({ mensaje }) => {
  const titleStyles = {
    fontWeight: "lighter",
    fontStyle: "oblique",
    margin: "auto",
    textAlign: "center",
  };

  return (
    <div className="container-fluid">
      <h1 style={titleStyles}>{mensaje}</h1>
      <ItemCount
        initial={1}
        stock={40}
        onAdd={(quantity) => {
          console.log(`Se agregaron ${quantity} artículos al carrito`);
        }}
      />
    </div>
  );
};
