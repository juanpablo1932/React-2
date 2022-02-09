import ItemCount from "./ItemCount";

export default function Item({ name, costo, stock, vista }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={vista} className="card-img-top" alt="Fotografía aérea" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">stock: {stock}</p>
        <p className="card-text">precio: $ {costo} USD</p>
        <ItemCount stock={stock} initial="1" />
      </div>
    </div>
  );
}
