import React from 'react';

function Navbar() {
  return (
    <section class="hero align-items-stretch">
    <nav class="navbar navbar-expand-sm navbar-light fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <i class="bi bi-fire white-icon"></i>
          </a>
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre mi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Testimonios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="Hero_Inicio" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/Images/RickAndMorty_1.jpg" class="d-block object-fit-cover" alt="1"/>
        </div>
        <div class="carousel-item">
          <img src="/Images/RickAndMorty_2.png" class="d-block object-fit-cover" alt="3"/>
        </div>
        <div class="carousel-item">
          <img src="/Images/RickAndMorty_3.jpeg" class="d-block object-fit-cover" alt="3"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#Hero_Inicio" data-bs-slide="prev">
        <span class="carousel-control-prev-icon button_next" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#Hero_Inicio" data-bs-slide="next">
        <span class="carousel-control-next-icon button_next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="overlay_Hero">
      <div class="container_Hero">
        <div class="content_Hero">
          <h1 class="texto-blanco">Rick And Morty</h1>
          <h2 class="texto-blanco">¿Cuál es tu personaje favorito?</h2>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Navbar;