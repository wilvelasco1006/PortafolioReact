import React from 'react';
import './FloatingCart.css';

const FloatingCart = ({
  cart,
  isOpen,
  onToggle,
  onRemoveItem,
  onUpdateQuantity,
  totalPrice,
  totalItems
}) => {
  const handleCheckout = () => {
    if (cart.length === 0) return;
  
    const message = `¡Hola! Me interesa contratar los siguientes servicios:\n\n${cart.map(item => 
      `• ${item.title} - $${item.price} x${item.quantity}`
    ).join('\n')}\n\nTotal: $${totalPrice.toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/3164022076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <div className={`floating-cart-button ${totalItems > 0 ? 'has-items' : ''}`} onClick={onToggle}>
        <div className="cart-icon">
          🛒
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </div>
      </div>

      {/* Panel del carrito */}
      <div className={`floating-cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Mi Carrito</h3>
          <button className="cart-close" onClick={onToggle}>×</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Tu carrito está vacío</p>
              <span>🛒</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-price">${item.price}</p>
                      <div className="cart-item-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button 
                          className="remove-btn"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${totalPrice.toFixed(2)}</strong>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Contactar por WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay para cerrar el carrito */}
      {isOpen && <div className="cart-overlay" onClick={onToggle}></div>}
    </>
  );
};

export default FloatingCart;