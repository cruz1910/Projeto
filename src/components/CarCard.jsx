import React from 'react';

const CarCard = ({ car, onAddToCart }) => {
  return (
    <div className="car-card">
      <h3>{car.nome}</h3>
      <p>Marc: {car.marca}</p>
      <p>Ano: {car.ano}</p>
      <p>Categoria: {car.categoria}</p>
      <p>Preço: R$ {car.preco.toFixed(2)}</p>
      <button onClick={() => onAddToCart(car)} className="botao-adicionar">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default CarCard;
