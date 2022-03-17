import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(1); //Hook

  const increment = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrement = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="itemCount">
        <div className="cardCount">
          <h1>Fotografías a comprar</h1>
          <div className="btnCount">
            <button onClick={decrement}>-</button>
            <p>{contador}</p>
            <button onClick={increment}>+</button>
          </div>
        </div>
        {stock > 0 ? (
          <button
            onClick={() => onAdd(contador)}
            type="button"
            className="btn btn-primary card__buttonCompra"
          >
            AÑADIR AL CARRITO
          </button>
        ) : (
          <p>Fotografía agotada</p>
        )}
      </div>
    </>
  );
};

export default ItemCount;
