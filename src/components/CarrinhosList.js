import React, { useState } from 'react';
import CarCard from './CarCard';

function ListaCarros() {
  const [carros, setCarros] = useState([]);

  const handleAddCar = (novoCarro) => {
    setCarros(prev => [...prev, novoCarro]);
  };

  return (
    <div className="container-carros">
      <h1>Lista de Carros</h1>
      
      <div className="carros-grid">
        {carros.map(carro => (
          <CarCard
            key={carro.id}
            car={carro}
            onAddToCart={handleAddCar}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCarros;
