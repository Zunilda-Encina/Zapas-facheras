import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../Navbar/Navbar.jsx';
import Product from '../Product.jsx';
import ModelosDeZapatillas from '../Api/zapasApi.jsx';
import "./producto.css"

function Productos({ modelos }) {
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroPrecio, setFiltroPrecio] = useState('');

  const modelosFiltrados = modelos.filter((modelo) => {
    // Filtrar por categoría
    if (filtroCategoria !== '' && modelo.categoria !== filtroCategoria) {
      return false;
    }

    // Filtrar por nombre de zapatillas
    if (filtroNombre !== '' && !modelo.nombre.toLowerCase().includes(filtroNombre.toLowerCase())) {
      return false;
    }

    // Filtrar por precio
    if (filtroPrecio !== '' && parseFloat(modelo.precio) > parseFloat(filtroPrecio)) {
      return false;
    }

    return true;
  });

  return (
    <>
      {/* <NavBar /> */}
      <section className="products">
        <div className="container">
          <h2 className="text-center">Todos nuestros Productos</h2>

          {/* Agregar filtros */}
          <div className="filter">
            <label>Filtrar por categoría:</label>
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="dunk">Dunk</option>
              <option value="Jordan">Jordan</option>
              {/* Agregar más opciones de categoría según tus datos */}
            </select>

            <label>Filtrar por nombre de zapatillas:</label>
            <input
              type="text"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />

            <label>Filtrar por precio máximo:</label>
            <input
              type="number"
              value={filtroPrecio}
              onChange={(e) => setFiltroPrecio(e.target.value)}
            />
          </div>

          <Product modelos={modelosFiltrados} />      
        </div>
      </section>
    </>
  );
}

export default Productos;