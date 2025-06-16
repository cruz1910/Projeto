import React from 'react';

const CartItem = ({ item, onRemove, onChangeQuantity }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <label>
          Quantidade:
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onChangeQuantity(e.target.value)}
            min="1"
          />
        </label>
      </div>
      <button onClick={onRemove}>
        Remover do Carrinho
      </button>
    </div>
  );
};

export default CartItem;
