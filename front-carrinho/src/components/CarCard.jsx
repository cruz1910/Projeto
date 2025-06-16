import React from 'react';

const CarCard = ({ car, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(car);
    }
  };

  return (
    <div className="card-carro">
      {car.foto && (
        <img 
          src={car.foto} 
          alt={car.nome}
          className="foto-carro"
        />
      )}
      <div className="info-carro">
        <h3>{car.nome}</h3>
        <p>Marc: {car.marca}</p>
        <p>Ano: {car.ano}</p>
        <p>Categoria: {car.categoria}</p>
        <p>Preço: R$ {car.preco.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart} 
          className="botao-adicionar"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default CarCard;
