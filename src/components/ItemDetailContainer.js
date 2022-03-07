import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

export default function ItemDetailContainer() {
  const [foto, setFoto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const firestoreFetchOne = async (idItem) => {
      const docRef = doc(db, "Basededatos", idItem);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: idItem,
          ...docSnap.data(),
        };
      } else {
        console.log("No such document!");
      }
    };
    firestoreFetchOne(id)
      .then((result) => setFoto(result))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="m-5">
        <ItemDetail item={foto} />
      </div>
    </>
  );
}
