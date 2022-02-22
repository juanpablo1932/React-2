import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ name, costo, stock, vista, description }) {
  const [itemCount, setItemCount] = useState(0);
  const onAdd = (evt) => {
    setItemCount(evt);
  };
  return (
    <>
      <div className="card mb-3" style={{ width: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={vista} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Stock: {stock}</p>
              <p className="card-text">Precio: $ {costo} USD</p>
              <div className="item__count--position">
                {itemCount === 0 ? (
                  <ItemCount stock={stock} initial="1" onAdd={onAdd} />
                ) : (
                  <Link to="/cart">
                    <button>GO TO CART</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
