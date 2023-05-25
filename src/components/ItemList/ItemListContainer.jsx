import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const db = getFirestore();
  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const itemsCollection = id
      ? query(collection(db, "products"), where("categoria", "==", `${id}`))
      : collection(db, "products");

    getDocs(itemsCollection).then((products) => {
      setProductos(products.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [id, db]);

  return (
    <div className="itemListContainer">
      {productos.length === 0 ? <Loader /> : <ItemList products={productos} />}
    </div>
  );
};
