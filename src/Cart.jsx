import React from "react";

function Cart({ cart }) { 
  return (
    <div className="container mt-5 pt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart.map((product, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm border-gray">
                <div className="image-container d-flex justify-content-center align-items-center p-3">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt={product.title}
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.title.slice(0, 12)}</h5>
                  <p className="card-text fw-bold">Price: ${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
