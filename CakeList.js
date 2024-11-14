import React, { useState } from 'react';
import CakeCard from './CakeCard';
import './styles.css';

function CakeList() {
  const [cart, setCart] = useState([]);
  
  const cakes = [
    { id: 1, name: 'Heart Shaped Black Forest Cake', price: 550, image: 'https://www.thefloralmart.com/wp-content/uploads/2020/06/TFMCK10.jpg' },
    { id: 2, name: 'Caramel Butterscotch Cake', price: 700, image: 'https://mrcake.in/wp-content/uploads/2019/10/butterscotch-caramel-cake.jpeg' },
    { id: 3, name: 'Choco-Truffle Cake', price: 550, image: 'https://media.bakingo.com/sq-choco-truffle-cake0005choc-AA.jpg' },
    { id: 5, name: 'Pineapple Cake', price: 750, image: 'https://th.bing.com/th/id/OIP.iwM8Q_MKg4Rps15zxRB4ogHaHa?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Kitkat Cake', price: 700, image: 'https://i1.wp.com/www.abajillianrecipes.com/wp-content/uploads/2014/10/DSC_0256edit.jpg' },
    { id: 7, name: 'Butterscotch Cake', price: 650, image: 'https://www.foodeat.in/wp-content/uploads/2023/06/butterscotch-nuts-cake-65339a0686d6c.webp' },
    { id: 1, name: 'Hazelnut Cake', price: 750, image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-hazelnut-crunch-chocolate-cake-500-gm--270001-m.jpg' },
    { id: 2, name: 'Oreo Cake', price: 900, image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-chocolate-oreo-cake-half-kg--145973-m.jpg' },
    { id: 3, name: 'Besan Ladoo Cake', price: 550, image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-delicious-besan-ladoo-cake-600-gm--191362-m.jpg' },
    { id: 5, name: 'Vanilla Chocolate Mousse Cake', price: 750, image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-vanilla-chocolate-mousse-cake-1-kg--188717-m.jpg' },
    { id: 6, name: 'Black-forest Cake', price: 700, image: 'https://www.orderyourchoice.com/115509-large_default/black-forest-cake-brownie-point.jpg' },
    { id: 7, name: 'Strawberry Cake', price: 950, image: 'https://sweetpeaskitchen.com/wp-content/uploads/2019/09/Strawberry-Dream-Layer-Cake1a-720x720.jpg' },
    { id: 5, name: 'Chocochip Cake ', price: 750, image: 'https://th.bing.com/th/id/OIP.k6ON5uWlTWfgNpZObYJlZAHaHa?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Cashew Cake', price: 800, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Caramel-Cashew-Cheesecake_EXPS_THSO18_16628_B04_17_1b-2.jpg' },
    { id: 7, name: 'Blueberry Cake', price: 950, image: 'https://th.bing.com/th/id/OIP.M4UQTKf0wODpoGtRIResggHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain' },
    { id: 7, name: 'Chocolate Cake', price: 850, image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-floret-chocolate-truffle-cake-500-gm--269991-m.jpg'}
  ];

  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  return (
    <section id="cakes">
      <h2>Our Cakes</h2>
      <div className="cake-grid">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default CakeList;
