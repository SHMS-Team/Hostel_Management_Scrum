import React from "react";
import "./Login.css";
import bgImage from "../assets/hostel-bg.jpg";

function Login() {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="login-card">
        <h1>Hostel Management System</h1>
        <p className="subtitle">Student Login Portal</p>

        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <p className="register">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
