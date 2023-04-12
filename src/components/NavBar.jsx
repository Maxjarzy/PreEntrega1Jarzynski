import React from 'react'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.google.com.ar/" target="_blank"  rel="noreferrer">Tienda cosas</a>
        <div className="navbar-buttonCart-container">
          <CartWidget/>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Categorías</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.google.com.ar/search?q=articulos+del+hogar&sxsrf=APwXEdfzsVL7UamiIGQGIqxMYAm_tGv4hQ:1681246250329&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjoip-s2qL-AhXApZUCHSqwCSEQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1" target='_blank' rel="noreferrer">Artículos del hogar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.google.com.ar/search?q=articulos+de+oficina&sxsrf=APwXEddB82C_WskON5nbts2A1l-zs6A-9Q:1681246377991&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjF8o7p2qL-AhWmqJUCHeaYB0wQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1" target='_blank' rel="noreferrer">Artículos de oficina</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/search?q=articulos+de+decoracion&rlz=1C1ONGR_esAR1035AR1035&sxsrf=APwXEddMV2d3pDncZHYGC1o36rxGrWBjQA:1681246427310&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiGmdGA26L-AhUBqpUCHemKD64Q_AUoAXoECA0QAw&biw=1920&bih=937&dpr=1" target='_blanck' rel="noreferrer">Artículos de decoración</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
