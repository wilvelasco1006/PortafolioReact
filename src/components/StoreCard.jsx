import './StoreCard.css';
import React, { useState } from 'react';

const StoreCard = ({
    image,
    title,
    description,
    price,
    originalPrice,
    category,
    features = [],
    onAddToCart,
    isPopular = false,
    className = ''
}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        onAddToCart && onAddToCart({
            title,
            price,
            image
        });
        // reset despue de 2 segundos
        setTimeout(() => {
            setIsAdded(false);
        }, 2000);
    };

    return (
        <div
            className={`store-card ${isPopular ? 'store-card--popular' : ''
                } ${className}`}
            data-aos="fade-left"
        >
            {isPopular && <div className="popular-badge">Popular</div>}

            <div className="store-card-image">
                <img src={image} alt={title} />
                <div className="store-card-overlay">
                    <span className="category-badge">{category}</span>
                </div>
            </div>

            <div className="store-card-content">
                <h3 className="store-card-title">{title}</h3>
                <p className="store-card-description">{description}</p>

                {features.length > 0 && (
                    <ul className="store-card-features">
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index}>✓ {feature}</li>
                        ))}
                    </ul>
                )}

                <div className="store-card-footer">
                    <div className="store-card-price">
                        <span className="current-price">${price}</span>
                        {originalPrice && (
                            <span className="original-price">${originalPrice}</span>
                        )}
                    </div>

                    <button
                        className={`store-card-button ${isAdded ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? '✓ Añadido' : 'Añadir'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoreCard;