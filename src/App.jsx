import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCard';
import CarFilter from './components/CarFilter';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import carrosData from './data/carros.json';

function App() {
  const [carros, setCarros] = useState(carrosData);
  const [filteredCarros, setFilteredCarros] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    marca: '',
    categoria: '',
    precoMin: '',
    precoMax: ''
  });

  useEffect(() => {
    const filtered = carros.filter(car => {
      const matchesMarca = !filters.marca || car.marca.toLowerCase().includes(filters.marca.toLowerCase());
      const matchesCategoria = !filters.categoria || car.categoria === filters.categoria;
      const matchesPreco = (!filters.precoMin || car.preco >= parseFloat(filters.precoMin)) &&
                         (!filters.precoMax || car.preco <= parseFloat(filters.precoMax));
      return matchesMarca && matchesCategoria && matchesPreco;
    });
    setFilteredCarros(filtered);
  }, [carros, filters]);

  const addToCart = (car) => {
    const existingItem = cart.find(item => item.id === car.id);
    if (existingItem) {
      setCart(prev => prev.map(item => 
        item.id === car.id ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCart(prev => [...prev, { ...car, quantidade: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantidade: newQuantity } : item
    ));
  };

  return (
    <div className="app-container">
      <h1>Loja de Carros</h1>
      
      <div className="main-content">
        <div className="filtro-section">
          <CarFilter onFilterChange={setFilters} />
        </div>

        <div className="catalogo-section">
          <div className="catalogo-grid">
            {filteredCarros.length === 0 ? (
              <p>Nenhum carro encontrado</p>
            ) : (
              filteredCarros.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
                  onAddToCart={addToCart}
                />
              ))
            )}
          </div>
        </div>

        <div className="carrinho-section">
          <ShoppingCart
            cart={cart}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
