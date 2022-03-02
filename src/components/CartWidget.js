import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <button type="button" className="btn btn-primary position-relative">
          <i className="bi bi-cart"></i>
          {test.cartList.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              {test.cantidadTotal()}
            </span>
          )}
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
