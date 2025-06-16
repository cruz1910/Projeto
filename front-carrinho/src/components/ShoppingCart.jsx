import React from 'react';
import './Cart.css';

const ShoppingCart = ({ 
  cartItems, 
  isOpen, 
  onClose, 
  onRemoveItem, 
  onUpdateQuantity,
  onAddItem,
  onFinalizePurchase
}) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Carrinho de Compras</h2>
          <button className="close-cart" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Carrinho vazio</p>
            <button className="add-item-button" onClick={onAddItem}>
              Adicionar Item
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <h3>{item.nome}</h3>
                    <p>Preço: R$ {item.preco.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantidade - 1)} 
                        disabled={item.quantidade <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)} 
                    className="remove-item"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p>Total: R$ {getTotal().toFixed(2)}</p>
              <button 
                className="finalize-button" 
                onClick={onFinalizePurchase}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
