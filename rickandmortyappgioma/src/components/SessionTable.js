import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true); // Iniciar carga

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && !loading) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="seccionTabla">
      <div className="row">
        <div className="col-md-12">
          <section className='container-fluid'>
            <div className='justify-content-center'>
              <h1 className='TituloBuscar'>Personajes</h1>

              <div className='row'>
                <div className='col-md-4 col-sm-12 controlTabla'>
                  <button className='btn-custom' onClick={handlePrevPage} disabled={loading}>Anterior</button>
                </div>
                <div className='col-md-4 col-sm-12 controlTabla'>
                  <input type="text" className="form-control" value={currentPage} readOnly />
                </div>
                <div className='col-md-4 col-sm-12 controlTabla'>
                  <button className='btn-custom' onClick={handleNextPage} disabled={loading}>Siguiente</button>
                </div>
              </div>

              <div className='table-responsive'>
                <table id="Tabla" className='table table-striped'>
                  <thead>
                    <tr>
                      <th className='contenidoTabla'>ID</th>
                      <th className='contenidoTabla'>Nombre</th>
                      <th className='contenidoTabla'>Status</th>
                      <th className='contenidoTabla'>Especie</th>
                      <th className='contenidoTabla'>Tipo</th>
                      <th className='contenidoTabla'>Género</th>
                      <th className='contenidoTabla'>Imagen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {characters.map(character => (
                      <tr key={character.id}>
                        <td className='contenidoTabla'>{character.id}</td>
                        <td className='contenidoTabla'>{character.name}</td>
                        <td className='contenidoTabla'>{character.status}</td>
                        <td className='contenidoTabla'>{character.species}</td>
                        <td className='contenidoTabla'>{character.type}</td>
                        <td className='contenidoTabla'>{character.gender}</td>
                        <td className='contenidoTabla'><img src={character.image} alt={character.name} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Table;
