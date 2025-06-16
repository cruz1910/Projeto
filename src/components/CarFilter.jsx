import React, { useState } from 'react';

const CarFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    marca: '',
    categoria: '',
    precoMin: '',
    precoMax: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilterChange(filters);
  };

  return (
    <div className="filtro-container">
      <h2>Filtrar Carros</h2>
      <div className="filtros-grupo">
        <div className="filtro-item">
          <label>Marc: </label>
          <input
            type="text"
            name="marca"
            value={filters.marca}
            onChange={handleFilterChange}
            placeholder="Digite a marca"
          />
        </div>

        <div className="filtro-item">
          <label>Categoria: </label>
          <select
            name="categoria"
            value={filters.categoria}
            onChange={handleFilterChange}
          >
            <option value="">Todas</option>
            <option value="Esportivo">Esportivo</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Muscle Car">Muscle Car</option>
          </select>
        </div>

        <div className="filtro-item">
          <label>Preço Mínimo: </label>
          <input
            type="number"
            name="precoMin"
            value={filters.precoMin}
            onChange={handleFilterChange}
            placeholder="Preço mínimo"
          />
        </div>

        <div className="filtro-item">
          <label>Preço Máximo: </label>
          <input
            type="number"
            name="precoMax"
            value={filters.precoMax}
            onChange={handleFilterChange}
            placeholder="Preço máximo"
          />
        </div>
      </div>
    </div>
  );
};

export default CarFilter;
