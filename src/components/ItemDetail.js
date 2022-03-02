import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function ItemDetail(item) {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
  const onAdd = (qty) => {
    setItemCount(qty);
    test.addToCart(item, qty);
  };
  return (
    <>
      <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.vista}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Stock: {item.stock}</p>
              <p className="card-text">Precio: $ {item.costo} USD</p>
              <div className="item__count--position">
                {itemCount === 0 ? (
                  <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                ) : (
                  <>
                    <Link to="/cart">
                      <button>Terminar mi compra</button>
                    </Link>
                    <Link to="/">
                      {" "}
                      <button>Seguir comprando!</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
