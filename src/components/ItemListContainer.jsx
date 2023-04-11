import React from 'react'

export const ItemListContainer = ({mensaje}) => {
  const titleStyles = {
    "fontWeight" : "lighter",
    "fontStyle" : "oblique",
    "margin" : "auto",
    "textAlign" : "center"
  }

  return (
    <div>
        <h1 style={titleStyles}>{mensaje}</h1>
    </div>
  );
}
