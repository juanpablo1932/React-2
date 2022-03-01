import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, qty) => {
    let targetProduct = cartList.find((product) => product.idItem === item.id);
    if (targetProduct === undefined) {
      setCartList([
        ...cartList,
        {
          name: item.name,
          costo: item.costo,
          vista: item.vista,
          qtyItem: qty,
          idItem: item.id,
        },
      ]);
    } else {
      targetProduct.qtyItem += qty;
    }
  };

  const removeItem = (id) => {
    let deleted = cartList.filter((item) => item.idItem != id);
    setCartList(deleted);
  };
  const clear = () => {
    setCartList([]);
  };
  const cantidadTotal = () => {
    let totalProductos = cartList.map((total) => total.qtyItem);
    return totalProductos.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };
  const precioTotal = () => {
    let totalPrecio = cartList.map((total) => total.costo * total.qtyItem);
    return totalPrecio.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clear,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
