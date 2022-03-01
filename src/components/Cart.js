import { useContext } from "react";
import { CartContext } from "./CartContext";
const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <section>
        <h1>YOU CART</h1>

        {test.cartList.length > 0 ? (
          <>
            <button onClick={test.clear}>DELETE ALL PRODUCTS</button>
            <section className="productosDesglose">
              <h1>RESUMEN DE TU COMPRA</h1>
              <p>
                Cantidad total de articulos a comprar: {test.cantidadTotal()}
              </p>
              <p>Precio total de la compra: $ {test.precioTotal()} USD</p>
            </section>
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
        {test.cartList.map((item) => (
          <div key={item.idItem} style={{ width: "50%" }}>
            <img src={item.vista} style={{ maxWidth: "100%" }}></img>
            <h2>Nombre: {item.name} </h2>
            <h2>Cantidad: {item.qtyItem} foto(s)</h2>
            <h2>Costo: $ {item.costo} USD</h2>
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
