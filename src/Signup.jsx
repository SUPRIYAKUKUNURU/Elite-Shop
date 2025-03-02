import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let err = {};

    if (!/^[A-Z][a-z]{2,14}$/.test(name)) {
      err.name = "First letter should be capital";
    }
    if (!/^[a-zA-Z0-9]+@gmail\.com$/.test(email)) {
      err.email = "Must be a valid Gmail address";
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@+])[A-Za-z\d@+]{8,}$/.test(password)) {
      err.password =
        "Password must be at least 8 characters and include letters, numbers, and @/+";
    }
    if (password !== cPassword) {
      err.cPassword = "Passwords do not match";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful 🎉");
      setName("");
      setEmail("");
      setPassword("");
      setcPassword("");
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={onSubmit}>
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
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  value={cPassword}
                  onChange={(e) => setcPassword(e.target.value)}
                />
                {errors.cPassword && <small className="text-danger">{errors.cPassword}</small>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
