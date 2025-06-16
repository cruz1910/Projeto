import React, { useState } from 'react';
import CarCard from './CarCard';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (car) => {
    const existingCar = cart.find((item) => item.id === car.id);
    if (existingCar) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === car.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...car, quantidade: 1 }]);
    }
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    if (window.confirm('Tem certeza que deseja finalizar a compra?')) {
      alert('Compra finalizada com sucesso!');
      setCart([]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  return (
    <div className="cart-container">
      <h1>Carrinho de Compras</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.nome}</h3>
            <p>Preço: R$ {item.preco.toFixed(2)}</p>
            <div className="quantity-controls">
              <label>
                Quantidade:
                <input
                  type="number"
                  value={item.quantidade}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  min="1"
                />
              </label>
            </div>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: R$ {getTotal().toFixed(2)}</h3>
        <button onClick={handleCheckout} className="checkout-button">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
