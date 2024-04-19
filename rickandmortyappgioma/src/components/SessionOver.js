import React from 'react';

function Over() {
  return (
    <section class="contacto seccion-oscura">
    <div class="container">
      <div class="container text-center rectangulo d-flex justify-content-evenly">
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo-Hablemos">¡Hablemos!</div>
          <div class="col-12 col-md-4 descripcion">¡Contáctanos para conocer tu opinión sobre este cómic!!!</div>
          <div class="col-12 col-md-4">
            <a href="mailto: rickandmorty@yopmail.com">
              <button type="button">
                Contacto
                <i class="bi bi-envelope-check-fill"></i>
              </button>
            </a>
          </div>
        </div>        
      </div>
    </div>
  </section>
  );
}

export default Over;