import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ModelosDeZapatillas from '../Api/zapasApi.jsx';
import './Search.css';

function SearchBar() {
  //inicialización de estados
  // const [clickedOutside, setClickedOutside] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === '') {
      setShowResults(false);
      setSearchResults([]);
    }else{
      const filteredResults = ModelosDeZapatillas.filter((modelo) =>
      modelo.nombre.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowResults(true);
    }

    
  };

  const handleSearchEnter = () => {
    navigate('/Productos'); // Cambié '/producto/:id' a '/producto' para que funcione con la nueva ruta
  };

  return (
    <div className="search-container" ref={searchRef}>
      <input
        type="text"
        placeholder="Buscar zapatillas por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSearchEnter();
          }
        }}
        className="search-input"
      />
      <button onClick={handleSearchEnter} className="search-button">
        Buscar
      </button>

      {showResults && (
        <div className="search-results">
          {searchResults.map((modelo) => (
            <div key={modelo.id} className="search-result">
              <img src={modelo.imagen} alt={modelo.nombre} className="search-image" />
              <div key={modelo.id} className='search-info'>
                <Link to={`/Productos/${modelo.id}`} className="search-link">
                <h2 className="search-title">{modelo.nombre}</h2>
                </Link>
                {/* <p>Color: {modelo.color}</p> */}
                <p>US$ {modelo.precio}</p>
                {/* <p>Talles: {modelo.talle.join(', ')}</p> */}
                {/* <p>{modelo.Description}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;







