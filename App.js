import React from 'react';
import Header from './Header';
import Home from './Home';
import CakeList from './CakeList';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <CakeList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
