import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BaseDeDatos, getBaseDeDatos } from "../Basededatos";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [foto, setFoto] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    try {
      const result = await getBaseDeDatos(
        BaseDeDatos.filter((item) => item.id === id)
      );
      // console.log(result);
      setFoto(result);
    } catch (e) {}
  }, [id]);
  return (
    <>
      <div className="m-5">
        {foto.map((item) => (
          <ItemDetail
            key={item.id}
            name={item.name}
            costo={item.costo}
            stock={item.stock}
            vista={item.vista}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
