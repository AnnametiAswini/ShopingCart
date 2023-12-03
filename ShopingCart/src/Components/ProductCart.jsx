// ProductCard.js
import React, { useState } from 'react';
import './ProductCart.css';

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    if (!inCart) {
      setInCart(true);
      setCartCount(1);
    } else {
      setCartCount(cartCount + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (cartCount === 1) {
      setInCart(false);
    }
    setCartCount(Math.max(cartCount - 1, 0));
  };

  const handleView = () =>{
    alert ('already sale');
  }
  return (
    <div className="product-card">
      <div className="product-info">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Price: ${product.price}</p>
        {product.isSale ? (
          <span className="sale-tag">Sale</span>
        ) : (
          <span className="Buy-tag">Buy Now</span>
        )}
        {/* <div className='Button-container'> */}
          {product.showAddToCart && (
            <button className={`cart-btn ${inCart ? 'remove-cart-btn' : ''}`} onClick={inCart ? handleRemoveFromCart : handleAddToCart}>
              {inCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          )}
          {product.showViewOptions && (
            <button onClick= {handleView}className="view-options-btn">View Options</button>
          )}
        {/* </div> */}
        {/* Add more product information, rating, etc. */}
      </div>
      <div className="product-rating">
        {/* Display product ratings */}
        Rating: {product.rating}
      </div>
    </div>
  );
};

export default ProductCard;
