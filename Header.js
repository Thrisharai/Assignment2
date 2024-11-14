import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="navbar">
      <nav>
        <a href="#home">Home</a>
        <a href="#cakes">Cakes</a>
        <a href="#categories">Categories</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
