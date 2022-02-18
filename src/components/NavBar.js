import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid justify-content-between">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navbar-brand">AERIAL DRONE</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav sticky-top">
              <li className="nav-item ">
                <Link to="/category/1">
                  <h2 className="nav-link nav-category" href="#">
                    Frontal
                  </h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/2">
                  <h2 className="nav-link nav-category" href="#">
                    Cenital
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav sticky-top">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Galería
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comprar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
