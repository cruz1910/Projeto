import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';
import AdicionarCarro from './AdicionarCarro';
import './Empresa.css';

function ListaCarros({ searchTerm, isPosting, onPostClick, onAddToCart }) {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem('carros') || '[]');
    setCarros(savedCars);
  }, []);

  useEffect(() => {
    localStorage.setItem('carros', JSON.stringify(carros));
  }, [carros]);

  const handleAddCar = (novoCarro) => {
    const existingCar = carros.find(car => car.id === novoCarro.id);
    if (existingCar) {
      console.log('Carro já existe:', novoCarro.nome);
      return;
    }
    setCarros(prev => [...prev, novoCarro]);
    onPostClick();
  };

  const filteredCars = carros.filter(car => 
    car.nome.toLowerCase().includes(searchTerm) ||
    car.marca.toLowerCase().includes(searchTerm) ||
    car.categoria.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="car-actions">
        {isPosting ? (
          <AdicionarCarro 
            onAddCar={handleAddCar} 
            onClose={onPostClick}
          />
        ) : (
          <button 
            className="post-button"
            onClick={onPostClick}
          >
            Postar Novo Carro
          </button>
        )}
      </div>

      <div className="grid-carros">
        {filteredCars.map(carro => (
          <CarCard
            key={carro.id}
            car={carro}
            onAddToCart={() => onAddToCart(carro)}
          />
        ))}
      </div>

      {filteredCars.length === 0 && !isPosting && (
        <div className="no-cars-found">
          <h3>Nenhum carro encontrado</h3>
          <p>Tente ajustar sua busca ou adicione novos carros.</p>
        </div>
      )}
    </div>
  );
}

export default ListaCarros;
