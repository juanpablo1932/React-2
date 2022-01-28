const CartWidget = () => {
  return (
    <>
      <button type="button" class="btn btn-primary position-relative">
        <i class="bi bi-cart"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          5
        </span>
      </button>
    </>
  );
};

export default CartWidget;
