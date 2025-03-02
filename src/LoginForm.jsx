import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let err = {};

    if (!/^[A-Z]+[a-z]{5,14}$/.test(name)) {
      err.name = "Invalid name format";
    }
    if (!/^[a-zA-Z0-9]+@gmail\.com$/.test(email)) {
      err.email = "Enter a valid Gmail address";
    }
    if (!/^[6-9][0-9]{9}$/.test(number)) {
      err.number = "Must be 10 digits";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Submitted successfully");
      setName("");
      setEmail("");
      setNumber("");
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={onLogin}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3 ">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {errors.number && <small className="text-danger">{errors.number}</small>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
