import React from "react";

const Cart = ({ cart, setCart }) => {
  
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

 
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0) 
    );
  };

  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        <>
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{item.title.slice(0, 15)}...</td>
                  <td>
                    <button className="btn btn-danger me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                    {item.quantity}
                    <button className="btn btn-success ms-2" onClick={() => increaseQuantity(item.id)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-end">Grand Total: <span className="text-primary">${grandTotal.toFixed(2)}</span></h3>
        </>
      )}
    </div>
  );
};

export default Cart;
