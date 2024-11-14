import React from 'react';
import './styles.css';

function CakeCard({ cake, addToCart }) {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h3>{cake.name}</h3>
      <p>${cake.price}</p>
      <button onClick={() => addToCart(cake)}>Add to Cart</button>
    </div>
  );
}

export default CakeCard;
