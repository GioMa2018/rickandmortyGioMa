import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/?page=2');
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="seccionTabla">
      <div className="row">
        <div className="col-md-12">
          <section className='container-fluid'>
            <div className='justify-content-center'>
              <h1 className='TituloBuscar'>Personajes</h1>

              <div className='table-responsive'>
                <table id="Tabla" className='table table-striped'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Status</th>
                      <th>Especie</th>
                      <th>Tipo</th>
                      <th>Género</th>
                      <th>Imagen</th>
                      <th>Actualizar</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {characters.map(character => (
                      <tr key={character.id}>
                        <td>{character.id}</td>
                        <td>{character.name}</td>
                        <td>{character.status}</td>
                        <td>{character.species}</td>
                        <td>{character.type}</td>
                        <td>{character.gender}</td>
                        <td><img src={character.image} alt={character.name} /></td>
                        <td>Actualizar</td>
                        <td>Eliminar</td>
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
