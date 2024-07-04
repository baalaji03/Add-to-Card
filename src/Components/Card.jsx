import React, { useState } from 'react';

const Card = ({ cart, setCart }) => {
  const [btnClick, setBtnclick] = useState(true);

  const handleAddToCart = () => {
    setBtnclick(false);
    setCart(cart + 1);
  };

  const handleRemoveFromCart = () => {
    setBtnclick(true);
    setCart(cart - 1);
  };

  return (
    <div>
      
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {btnClick ? (
            <button
              className="btn btn-outline-light bg-success mt-auto"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="btn btn-outline-light bg-danger mt-auto"
              onClick={handleRemoveFromCart}
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
