import React from "react";
import { Link } from "react-router-dom";

const Home = ({ addToCart, search, sort, products }) => {
  const filteredProducts = products.filter(
    (product) => product.title && product.title.toLowerCase().includes(search)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "lowhigh") return a.price - b.price;
    if (sort === "highlow") return b.price - a.price;
    if (sort === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="container mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
        {sortedProducts.map((product) => (
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
                <h5 className="card-title text-truncate">
                  {product.title.slice(0,12)}
                </h5>
                <p className="card-text fw-bold"  style={{color:"green"}}>
                  Price: ${product.price.toFixed(2)}
                </p>

                <div className="d-flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary w-50"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/details/${product.id}`}
                    className="btn btn-primary w-100"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
