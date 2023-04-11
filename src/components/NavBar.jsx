import React from 'react'
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.google.com.ar/" target="_blank"  rel="noreferrer">Tienda cosas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Categorías</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.google.com.ar/search?q=articulos+del+hogar&sxsrf=APwXEdfzsVL7UamiIGQGIqxMYAm_tGv4hQ:1681246250329&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjoip-s2qL-AhXApZUCHSqwCSEQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1" target='_blank' rel="noreferrer">Artículos del hogar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.google.com.ar/search?q=articulos+de+oficina&sxsrf=APwXEddB82C_WskON5nbts2A1l-zs6A-9Q:1681246377991&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjF8o7p2qL-AhWmqJUCHeaYB0wQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1" target='_blank' rel="noreferrer">Artículos de oficina</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.google.com/search?q=articulos+de+decoracion&rlz=1C1ONGR_esAR1035AR1035&sxsrf=APwXEddMV2d3pDncZHYGC1o36rxGrWBjQA:1681246427310&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiGmdGA26L-AhUBqpUCHemKD64Q_AUoAXoECA0QAw&biw=1920&bih=937&dpr=1" target='_blanck' rel="noreferrer">Artículos de decoración</a>
          </li>
          <CartWidget/>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
}
