import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";
const Cart = () => {
  const test = useContext(CartContext);
  const createOrder = () => {
    let order = {
      buyer: {
        email: "juandiaz@coder.com",
        name: "Juan Diaz",
        phone: "987123",
      },
      date: serverTimestamp(),
      items: test.cartList.map((items) => {
        return {
          id: items.idItem,
          price: items.costo,
          title: items.name,
          qty: items.qtyItem,
        };
      }),
      total: test.precioTotal(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) => {
        alert("Your order has been created: " + result.id);
        test.cartList.map(async (item) => {
          const itemRef = doc(db, "Basededatos", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem),
          });
        });
        test.clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section>
        <h1>TU CARRITO</h1>
        <Link to="/">
          {" "}
          <button>Seguir comprando!</button>
        </Link>

        {test.cartList.length > 0 ? (
          <>
            <button onClick={test.clear}>Elimina Todos Los Productos</button>
            <section className="productosDesglose">
              <h1>RESUMEN DE TU COMPRA</h1>
              <p>
                Cantidad total de articulos a comprar: {test.cantidadTotal()}
              </p>
              <p>Precio total de la compra: $ {test.precioTotal()} USD</p>
            </section>
            <button onClick={createOrder}>¡ COMPRAR AHORA !</button>
          </>
        ) : (
          <h2>Tu carrito esta vacío</h2>
        )}
        <div className="cart">
          {test.cartList.map((item) => (
            <div className="cart__cards" key={item.idItem}>
              <img className="cart__img" src={item.vista}></img>
              <h2>Nombre: {item.name} </h2>
              <h2>Cantidad: {item.qtyItem} foto(s)</h2>
              <h2>Costo: $ {item.costo} USD</h2>
              <button onClick={() => test.removeItem(item.idItem)}>
                Eliminar producto
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cart;
