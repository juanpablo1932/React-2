import { useEffect, useState } from "react";
import Item from "./Item";
import { BaseDeDatos, getBaseDeDatos } from "../Basededatos";
import { useParams } from "react-router-dom";

export default function ItemList() {
  const [fotos, setFotos] = useState([]);
  const { idClase } = useParams();

  useEffect(async () => {
    if (idClase === undefined) {
      try {
        const data = await getBaseDeDatos(BaseDeDatos, 2000);
        setFotos(data);
      } catch (e) {}
    } else {
      try {
        const data = await getBaseDeDatos(
          BaseDeDatos.filter((item) => item.idClase === parseInt(idClase)),
          2000
        );
        setFotos(data);
      } catch (e) {}
    }
  }, [idClase]);
  return (
    <>
      <div className="row">
        {fotos.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            costo={item.costo}
            stock={item.stock}
            vista={item.vista}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
