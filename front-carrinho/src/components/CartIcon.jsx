import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ cartItems, onOpenCart }) => {
  return (
    <div className="cart-icon" onClick={onOpenCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </div>
  );
};

export default CartIcon;
