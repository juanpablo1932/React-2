import ItemCount from "./ItemCount";

export default function ItemDetail({ name, costo, stock, vista, description }) {
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
                <ItemCount stock={stock} initial="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
