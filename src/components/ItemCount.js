import { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(1); //Hook

  const increment = () => {
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  };
  const decrement = () => {
    if (contador > props.initial) {
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
      </div>
    </>
  );
};

export default ItemCount;
