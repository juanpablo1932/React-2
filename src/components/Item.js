import { Link } from "react-router-dom";

export default function Item({ name, costo, stock, vista, id }) {
  return (
    <>
      <div
        className="card m-5"
        style={{ minWidth: "12rem", maxWidth: "20rem" }}
      >
        <img src={vista} className="card-img-top" alt="Fotografía aérea" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">stock: {stock}</p>
          <p className="card-text">precio: $ {costo} USD</p>
          <Link to={"/item/" + id}>
            <h2>Detalles...</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
