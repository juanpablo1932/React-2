import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <section>
        <h1>YOU CART</h1>
        <Link to="/">
          {" "}
          <button>Seguir comprando!</button>
        </Link>

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
        <div className="cart">
          {test.cartList.map((item) => (
            <div className="cart__cards" key={item.idItem}>
              <img className="cart__img" src={item.vista}></img>
              <h2>Nombre: {item.name} </h2>
              <h2>Cantidad: {item.qtyItem} foto(s)</h2>
              <h2>Costo: $ {item.costo} USD</h2>
              {/* <h2>Id: {item.idItem}</h2> */}
              <button onClick={() => test.removeItem(item.idItem)}>
                Remove Item
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cart;
