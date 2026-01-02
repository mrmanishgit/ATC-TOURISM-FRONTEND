import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
 import api from "../api/api";
const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleLogin = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    setMessage("Please fill all fields");
    return;
  }

  if (formData.password.length < 6) {
    setMessage("Password must be at least 6 characters");
    return;
  }

  try {
    // const response = await fetch("http://localhost:8080/api/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: formData.email,
    //     password: formData.password,
    //   }),
    // });


  const response = await api.post("/api/users/login", {
  email: formData.email,
  password: formData.password,
});


    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const user = await response.json();

    alert("Login Successful ✅");
    setMessage("");

    // optional: store logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

   navigate("/user");

  } catch (error) {
    console.error(error);
    setMessage("Invalid credentials ❌");
  }
};


  const forgotPassword = () => {
    if (!formData.email) {
      alert("Enter email first");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === formData.email);

    user
      ? alert(`Your password is: ${user.password}`)
      : alert("Email not registered");
  };

  return (
    <section className="login-page">
      <div className="login-box">
       
        <h2>AJA Tourism Corporation </h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {message && <p className="error-text">{message}</p>}

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <span className="forgot" onClick={forgotPassword}>
            Forgot password?
          </span>

          <p className="register-text">
            New here?
            <span
              style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => navigate("/register")}
            >
              Create account
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
