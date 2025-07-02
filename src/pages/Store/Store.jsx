import React, { useState, useEffect } from 'react';
import './Store.css';
import StoreCard from '../../components/StoreCard';
import FloatingCart from '../../components/FloatingCart';

const Store = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cargar carrito del localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('portfolioCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('portfolioCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.title === item.title);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, id: Date.now() }];
      }
    });
    
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 3000);
  };

  const services = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dijh9two4/image/upload/v1751405231/10ca094fa5e921cb6f747fcf405f0ad9_azvn7t.jpg',
      title: 'Tienda Digital E-commerce',
      description: 'Un sitio web completo, perfecto para vender tus productos en línea con todas las funcionalidades modernas.',
      price: '600',
      originalPrice: '800',
      category: 'Desarrollo Web',
      features: [
        'SEO optimizado',
        'Diseño responsivo',
        'Panel de administración',
        'Pasarela de pagos integrada',
      ],
      isPopular: true,
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dijh9two4/image/upload/v1751407214/22e1cbe6a4c08c46d47548f47deb646d_aror7v.jpg',
      title: 'Portafolio Profesional',
      description: 'Un portafolio web moderno y elegante para mostrar tus proyectos y habilidades de manera profesional.',
      price: '350',
      originalPrice: '450',
      category: 'Desarrollo Web',
      features: [
        'Diseño personalizado',
        'Animaciones suaves',
        'Optimizado para móviles',
        'Hosting incluido',
      ],
      isPopular: true,
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dijh9two4/image/upload/v1751407574/7d470ed7d43311e661e130191f863350_ez5zyh.jpg',
      title: 'Mantenimiento y Soporte de Software',
      description: 'Soporte técnico y mantenimiento para asegurar que tu software funcione sin problemas.',
      price: '250',
      originalPrice: '350',
      category: 'Servicios',
      features: [
        'Soporte técnico prioritario',
        'Actualizaciones regulares',
        'Monitoreo y análisis de rendimiento',
      ],
      isPopular: false,
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dijh9two4/image/upload/v1751407704/235e16f7dfe59560c7068f64de37e176_swlhub.jpg',
      title: 'Asesoría en Tecnología y Desarrollo de Software',
      description: 'Orientación experta para ayudarte a tomar las mejores decisiones tecnológicas para tu negocio.',
      price: '1200',
      originalPrice: '1500',
      category: 'Servicios',
      features: [
        'Análisis de necesidades y requisitos',
        'Recomendaciones personalizadas',
        'Evaluación de tecnologías emergentes',
      ],
      isPopular: false,
    },
  ];

  // Funciones del carrusel
  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Cálculo del transform para el carrusel en tablets
  const getTransform = () => {
    if (isMobile) return 'translateX(0)'; // En móvil usa scroll nativo
    const cardWidth = 350; // Ancho de cada card
    const gap = 24; // Gap en px (1.5rem)
    return `translateX(-${currentSlide * (cardWidth + gap)}px)`;
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="store">
      <div className="store-header">
        <h1 className="store-title">Tienda Digital</h1>
        <p className="store-description">
          ¡Bienvenido a mi tienda digital! Aquí encontrarás servicios de desarrollo web 
          profesionales diseñados para hacer crecer tu negocio en línea.
        </p>
      </div>

      <div className="store-services">
        <div 
          className="services-container"
          style={{ transform: getTransform() }}
        >
          {services.map(service => (
            <StoreCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
              originalPrice={service.originalPrice}
              category={service.category}
              features={service.features}
              onAddToCart={handleAddToCart}
              isPopular={service.isPopular}
            />
          ))}
        </div>

        {/* Controles del carrusel - Solo en tablets */}
        {!isMobile && window.innerWidth <= 1199 && (
          <div className="carousel-controls">
            <button 
              className="carousel-btn" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              ←
            </button>
            
            <div className="carousel-indicators">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            
            <button 
              className="carousel-btn" 
              onClick={nextSlide}
              disabled={currentSlide === services.length - 1}
            >
              →
            </button>
          </div>
        )}
      </div>

      <FloatingCart
        cart={cart}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
        totalItems={getTotalItems()}
      />
    </div>
  );
};

export default Store;