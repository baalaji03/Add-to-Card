import React, { useState } from 'react';

const Product = ({ cart, setCart }) => {
  const [btnClick, setBtnClick] = useState([true, true, true, true, true, true]); // Array to track button clicks for each card

  // Function to handle adding an item to cart
  const handleAddToCart = (index) => {
    setBtnClick(prevState => {
      const newBtnClick = [...prevState];
      newBtnClick[index] = false; // Set the button state for the clicked card
      return newBtnClick;
    });
    setCart(prevCart => prevCart + 1); // Update cart count
  };

  // Function to handle removing an item from cart
  const handleRemoveFromCart = (index) => {
    setBtnClick(prevState => {
      const newBtnClick = [...prevState];
      newBtnClick[index] = true; // Set the button state for the clicked card
      return newBtnClick;
    });
    setCart(prevCart => prevCart - 1); // Update cart count
  };

  // Array of products (dummy data)
  const products = [
    { name: "Fancy Product 1", price: "$40.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg" },
    { name: "Special Item 2", price: "$18.00", salePrice: "$20.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", sale: true },
    { name: "Sale Item 3", price: "$25.00", salePrice: "$50.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", sale: true },
    { name: "Popular Item 4", price: "$40.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg" },
    { name: "Sale Item 5", price: "$25.00", salePrice: "$50.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", sale: true },
    { name: "Fancy Product 6", price: "$120.00", image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg" },
  ];

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3">
            {products.map((product, index) => (
              <div className="col mb-5" key={index}>
                <div className="card h-100">
                  {product.sale && <div className="badge bg-dark text-white position-absolute">Sale</div>}
                  <img className="card-img-top" src={product.image} alt="Product" />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      {product.salePrice && (
                        <span className="text-muted text-decoration-line-through">{product.salePrice}</span>
                      )}
                      {product.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {btnClick[index] ? (
                        <button
                          className="btn btn-outline-light bg-success mt-auto"
                          onClick={() => handleAddToCart(index)}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-light bg-danger mt-auto"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          Remove from Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
