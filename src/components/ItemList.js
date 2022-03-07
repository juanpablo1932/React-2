import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <>
      <div className="row">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            costo={item.costo}
            stock={item.stock}
            vista={item.vista}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
