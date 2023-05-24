import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const [producto, setproducto] = useState(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "products", id);
    getDoc(itemRef).then((item) => {
      if (item.exists()) {
        setproducto({ id: item.id, ...item.data() });
      }
    });
  }, [id]);

  return producto === null ? <Loader /> : <ItemDetail productDetail={producto} />;
};
