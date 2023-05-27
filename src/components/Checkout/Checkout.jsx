import React, { useContext, useState } from "react";
import { CheckoutForm } from "./CheckoutForm";
import { CartContext } from "../Cart/CartContexProvider";
import { Loader } from "../Loader/Loader";
import {
  collection,
  getFirestore,
  addDoc,
  writeBatch,
  serverTimestamp,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";

export const Checkout = () => {
  const { cartList, compraTotal, removeList } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const newOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cartList,
        total: compraTotal(),
        fecha: serverTimestamp(),
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      const batch = writeBatch(db);
      const idsToUpdate = cartList.map((item) => item.id);
      const productsRef = collection(db, "products");

      const productsToUpdate = await getDocs(
        query(productsRef, where(documentId(), "in", idsToUpdate))
      );
      const { docs } = productsToUpdate;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productInCart = cartList.find((prod) => prod.id === doc.id);

        if (productInCart) {
          const prodQuantity = productInCart.qty;

          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        }
      });

      await batch.commit();
      removeList();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (orderId) {
    return (
      <div className="orderContainer">
        <h1>El id de su compra es: {orderId}</h1>;
      </div>
    );
  }

  return (
    <div>
      <CheckoutForm isOk={newOrder} />
    </div>
  );
};
