import React, { useContext, useState } from "react";
import "./Checkout.css";
import { CartContext } from "../Cart/CartContexProvider";
import { Link } from "react-router-dom";

export const CheckoutForm = ({ isOk }) => {
  const { cartList } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerif, setEmailVerif] = useState("");

  const setData = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    isOk(userData);
  };

  if (cartList.length > 0) {
    return (
      <div className="formContainer">
        <form onSubmit={setData}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name=""
            id="nombre"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
            }}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            name=""
            id="telefono"
            value={phone}
            onChange={({ target }) => {
              setPhone(target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <label htmlFor="email">Repita su email</label>
          <input
            type="email"
            name=""
            id="email"
            value={emailVerif}
            onChange={({ target }) => {
              setEmailVerif(target.value);
            }}
          />
          { (email !== "" && emailVerif === email) 
          ?   <button type="submit" className="btn">  Realizar compra </button> : null}
        </form>
      </div>
    );
  }

  return (
    <div className="cartContainer cartContainerEmpty">
      <h1>El carrito está vacío</h1>
      <Link to="/" className="btn">
        Ir al inicio
      </Link>
    </div>
  );
};
