import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BaseDeDatos, getBaseDeDatos } from "../Basededatos";

export default function ItemDetailContainer() {
  const [foto, setFoto] = useState([]);
  useEffect(async () => {
    try {
      const result = await getBaseDeDatos(BaseDeDatos[3]);
      console.log(result);
      setFoto(result);
    } catch (e) {}
  }, []);
  return (
    <>
      <div>
        <ItemDetail
          name={foto.name}
          costo={foto.costo}
          stock={foto.stock}
          vista={foto.vista}
          description={foto.description}
        />
      </div>
    </>
  );
}
