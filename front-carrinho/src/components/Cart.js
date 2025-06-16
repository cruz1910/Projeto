import React from 'react';
import './Cart.css';

function Cart({ isOpen, onClose, items, onRemove, onUpdateQuantity }) {
  const getTotal = () => {
    return items.reduce(
      (total, item) => total + (item.preco * item.quantidade),
      0
    );
  };

  return (
    <div className={`cart ${isOpen ? 'cart-open' : ''}`}>
      <div className="cart-header">
        <h2>Carrinho de Compras</h2>
        <button className="close-cart" onClick={onClose}>
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Carrinho vazio</p>
          <p>Adicione itens para começar a comprar!</p>
        </div>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.nome}</h3>
                <div className="quantity-controls">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantidade - 1)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
                <p>Preço: R$ {item.preco.toFixed(2)}</p>
                <p>Total: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
              </div>
              <button 
                className="remove-item"
                onClick={() => onRemove(item.id)}
              >
                Remover
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total da Compra: R$ {getTotal().toFixed(2)}</h3>
            <button 
              className="finalize-purchase"
              onClick={() => {
                if (window.confirm('Tem certeza que deseja finalizar a compra?')) {
                  alert('Compra finalizada com sucesso!');
                  onRemove(null); // Remove todos os itens
                }
              }}
            >
              Finalizar Compra
            </button>
            <button 
              className="empty-cart"
              onClick={() => onRemove(null)}
            >
              Esvaziar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
