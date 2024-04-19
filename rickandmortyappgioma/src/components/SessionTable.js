import React from 'react';

function Table() {
  return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <section class='container-fluid'>
                            <div class='justify-content-center'>
                                <h1>Usuarios Registrados</h1>

                                <div class='table-responsive'>
                                    <p>
                                        <a asp-action="Insert" asp-controller="Table" class="btn btn-light">Consultar a todos los personajes</a>
                                    </p>
                                    <table id="Nombre_Tabla" class='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    IDENTIFICACIÓN
                                                </th>
                                                <th>
                                                    NOMBRE
                                                </th>
                                                <th>
                                                    DIRECCIÓN
                                                </th>
                                                <th>
                                                    TELÉFONO
                                                </th>
                                                <th>
                                                    USUARIO
                                                </th>
                                                <th>
                                                    PASSWORD
                                                </th>
                                                <th>
                                                    ROL
                                                </th>
                                                <th>
                                                    ACTUALIZAR
                                                </th>
                                                <th>
                                                    ELIMINAR
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
  );
}

export default Table;