import React, { useState } from 'react';
import CarrinhosList from './components/CarrinhosList';
import Cart from './components/Cart';
import './components/Cart.css';
import './components/Empresa.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handlePostClick = () => {
    setIsPosting(true);
    setCurrentPage('post');
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantidade: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId) => {
    if (itemId === null) {
      // Esvaziar carrinho completamente
      setCartItems([]);
      setIsCartOpen(false);
      return;
    }
    const newCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCart);
    if (newCart.length === 0) {
      setIsCartOpen(false);
    }
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantidade: newQuantity } : item
      )
    );
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsPosting(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">
            <h1>Carros Postados</h1>
          </div>
          <div className="nav-menu">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigate('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${currentPage === 'post' ? 'active' : ''}`}
              onClick={() => handleNavigate('post')}
            >
              Postar Carro
            </button>
            <button 
              className={`nav-link ${currentPage === 'list' ? 'active' : ''}`}
              onClick={() => handleNavigate('list')}
            >
              Carros Postados
            </button>
          </div>
          <div className="nav-actions">
            <input 
              type="text" 
              className="search-input"
              placeholder="Buscar carros..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button 
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <span>🛒</span>
              <span className="cart-count">{cartItems.length}</span>
            </button>
          </div>
        </div>
      </nav>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      <main className="main-content">
        <CarrinhosList 
          searchTerm={searchTerm}
          isPosting={isPosting}
          onPostClick={handlePostClick}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;
