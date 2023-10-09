import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './carousel.css';
import ModelosDeZapatillas from '../Api/zapasApi.jsx'; // Importa el arreglo de modelos

function CarruselDeZapatillas() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Divide los modelos en grupos de tres
  const chunkedModelos = [];
  for (let i = 0; i < ModelosDeZapatillas.length; i += 5) {
    chunkedModelos.push(ModelosDeZapatillas.slice(i, i + 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia al siguiente grupo de modelos cada tres segundos
      setIndex((prevIndex) => (prevIndex + 1) % chunkedModelos.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [chunkedModelos]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="my-carousel">
      {chunkedModelos.map((grupo, grupoIndex) => (
        <Carousel.Item key={grupoIndex} className="carousel-item">
          <Row>
            {grupo.map((modelo) => (
              <Col key={modelo.id} sm={4} className="carousel-col">
                <img
                  src={modelo.imagen}
                  className="d-block w-100 carousel-image"
                  alt={modelo.nombre}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselDeZapatillas;
