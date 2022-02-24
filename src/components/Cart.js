import { useContext } from "react";
import { CartContext } from "./CartContext";
const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <section>
        <h1>YOU CART</h1>
        {test.cartList.length > 0 ? (
          <button onClick={test.clear}>DELETE ALL PRODUCTS</button>
        ) : (
          <h2>Your cart is empty</h2>
        )}
        {test.cartList.map((item) => (
          <div key={item.idItem}>
            <img src={item.vista}></img>
            <h2>Nombre: {item.name} </h2>
            <h2>Cantidad: {item.qtyItem}</h2>
            <h2>Costo: {item.costo}</h2>
            <h2>Id: {item.idItem}</h2>
            <button onClick={() => test.removeItem(item.idItem)}>
              Remove Item
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Cart;
