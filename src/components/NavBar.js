import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid justify-content-between">
          <a class="navbar-brand" href="#">
            AERIAL DRONE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav sticky-top">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Galería
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Comprar
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
