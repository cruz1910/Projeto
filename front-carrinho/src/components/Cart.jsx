import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    quantity: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price) return;
    
    const newItemToAdd = {
      id: Date.now(),
      name: newItem.name,
      price: parseFloat(newItem.price),
      quantity: parseInt(newItem.quantity)
    };

    setCart(prev => [...prev, newItemToAdd]);
    setNewItem({ name: '', price: '', quantity: 1 });
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    ));
  };

  const handleCheckout = () => {
    alert('Compra finalizada!');
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h1>Carrinho de Compras</h1>
      
      <div className="add-item-form">
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          placeholder="Nome do item"
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
          placeholder="Preço"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          placeholder="Quantidade"
          min="1"
        />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <label>
                Quantidade:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  min="1"
                />
              </label>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remover
            </button>
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
