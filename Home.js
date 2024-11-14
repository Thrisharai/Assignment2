import React from 'react';
import './styles.css'; // Ensure this imports your styles

function Home() {
  return (
    <section id="home">
      <div className="hero">
        <h1>Welcome to Our Cake Shop</h1>
        <p>Delicious cakes for every occasion!</p>
        {/* Replace the src attribute with the actual path to your image */}
        <img 
          src={require('./cake-hero.webp.jpg')} 
          alt="Cakes" 
        />
      </div>
      <div className="about">
        <h2>About Us</h2>
        <p>We bake fresh cakes daily, using the finest ingredients. Celebrate your special moments with our delightful cakes.</p>
      </div>
    </section>
  );
}

export default Home;
