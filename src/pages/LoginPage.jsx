import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === formData.email);

    if (user && user.password === formData.password) {
      alert("Login Successful ✅");
      setMessage("");
      // navigate("/dashboard");
    } else {
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
            <a href="/"> Create account</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
