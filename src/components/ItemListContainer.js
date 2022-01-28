const ItemListContainer = (props) => {
  return (
    <>
      <div className="listContainer">
        <p>
          Esta es la lilsta de items del e-commerce para el curso de{" "}
          {props.curso}.
        </p>
      </div>
    </>
  );
};

export default ItemListContainer;
