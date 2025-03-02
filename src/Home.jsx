import React, { useEffect, useState } from "react";

const Home = ({ addToCart }) => { 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm border-gray">
              <div className="image-container d-flex justify-content-center align-items-center p-3">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.title}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title.slice(0, 12)}</h5>
                <p className="card-text fw-bold">Price: ${product.price.toFixed(2)}</p>
                <button
                  onClick={() => {
                    addToCart(product); 
                    alert("Product added successfully!");
                  }}
                  className="btn btn-primary w-100 mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
