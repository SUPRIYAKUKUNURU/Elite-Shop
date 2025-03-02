import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ products }) => {
  const { id } = useParams(); 
  const product = products.find((item) => item.id === Number(id)); 

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top mx-auto d-block"
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text text-muted">{product.description}</p>
          <h4 className="text-success">${product.price.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
