import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
} from "@firebase/firestore";

import db from "../utils/firebaseConfig";

const ItemListContainer = () => {
  const [fotos, setFotos] = useState([]);
  const { idClase } = useParams();

  useEffect(() => {
    const firestoreFetch = async (idClase) => {
      let q;
      if (idClase) {
        q = query(
          collection(db, "Basededatos"),
          where("idClase", "==", parseInt(idClase))
        );
      } else {
        q = query(collection(db, "Basededatos"), orderBy("name"));
      }
      const querySnapshot = await getDocs(q);
      const dataFromFirestore = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      return dataFromFirestore;
    };
    firestoreFetch(idClase)
      .then((result) => setFotos(result))
      .catch((err) => console.log(err));
  }, [idClase]);
  return (
    <>
      <ItemList items={fotos} />
    </>
  );
};

export default ItemListContainer;
