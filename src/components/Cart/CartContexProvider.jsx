import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, qty) => {
    if (cartList.some((item) => item.id === product.id)) {
      console.log("El producto ya está en el carrito");
    } else {
      setCartList((prevCart) => [...prevCart, { ...product, qty }]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    const cart = cartList.filter((product) => product.id !== id);
    setCartList(cart);
  };

  const totalImport = (precio, qty) => precio * qty;

  const compraTotal = () => {
    let total= 0;
    cartList.map((item) => total += item.precio*item.qty);
    return total;
  };

  const totalItems = () => {
    let total = 0;
    cartList.map(item => total +=item.qty)
    return total;
  }



  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        totalImport,
        compraTotal,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
