import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Loader } from "../Loader/Loader";
import { ItemError } from "./ItemError";

export const ItemDetailContainer = () => {
  const [producto, setproducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "products", id);
    getDoc(itemRef)
      .then((item) => {
        if (item.exists()) {
          setproducto({ id: item.id, ...item.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return loading !== false ? (
    <Loader />
  ) : producto !== null ? (
    <ItemDetail productDetail={producto} />
  ) : (
    <ItemError />
  );
};
