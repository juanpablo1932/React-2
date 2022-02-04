import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <div className="listContainer">
        <p>
          Esta es la lilsta de items del e-commerce para el curso de{" "}
          {props.curso}.
        </p>
        <ItemCount stock="5" initial="1" />
      </div>
    </>
  );
};

export default ItemListContainer;
