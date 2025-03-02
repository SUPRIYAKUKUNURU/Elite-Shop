import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import Cart from "./Cart";
import Details from "./Details"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); 

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert("Product added successfully!");
  };

  return (
    <>
      <Navbar setSearch={setSearch} setSort={setSort} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} addToCart={addToCart} products={products} />} />
        <Route path="/details/:id" element={<Details products={products} />} /> 
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
