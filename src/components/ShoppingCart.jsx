import React from 'react';

const ShoppingCart = ({ cart, onRemoveItem, onUpdateQuantity }) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  return (
    <div className="carrinho-compras">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
          <div className="itens-carrinho">
            {cart.map(item => (
              <div key={item.id} className="item-carrinho">
                <div className="info-item">
                  <h3>{item.nome}</h3>
                  <p>Preço: R$ {item.preco.toFixed(2)}</p>
                  <div className="controle-quantidade">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantidade - 1)} disabled={item.quantidade <= 1}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="botao-remover">
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="resumo-carrinho">
            <p>Total: R$ {getTotal().toFixed(2)}</p>
            <button className="botao-finalizar">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
