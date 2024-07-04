import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Card from './Components/Card';

const App = () => {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    console.log("Cart value in App:", cart);
  }, [cart]);

  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <Product cart={cart} setCart={setCart} />
      <Footer />
      <Card cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
