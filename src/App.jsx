import bgImage from "./assets/hostel-bg.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="login-card">
        <h2>Hostel Management System</h2>
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
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="register">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default App;
