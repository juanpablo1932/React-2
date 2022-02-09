import { useEffect, useState } from "react";
import Item from "./Item";
import { BaseDeDatos, getBaseDeDatos } from "../Basededatos";

export default function ItemList() {
  const [fotos, setFotos] = useState([]);
  useEffect(async () => {
    try {
      const data = await getBaseDeDatos(BaseDeDatos, 2000);
      setFotos(data);
    } catch (e) {}
  }, []);
  return (
    <>
      <div>
        {fotos.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            costo={item.costo}
            stock={item.stock}
            vista={item.vista}
          />
        ))}
      </div>
    </>
  );
}
