import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../mylogo.png";
import "./Login.css";

function Login() {
  

  return (
    <>
      {/* HEADER */}
      <section id="section-header">
        <header className="site-header container">

          <div className="logo">
            <img src={logo} alt="StayHealthy Logo" />
          </div>

          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="#" className="nav-link">Appointments</Link>
            <Link to="#" className="nav-link">Records</Link>
            <Link to="#" className="nav-link">Reviews</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link btn-login active">Log In</Link>
          </nav>

        </header>
      </section>

      {/* LOGIN SECTION */}
      <section id="section-login">
        <div className="login-container container">
          <div className="login-card">

            <div className="card-header">
              <img src={logo} alt="StayHealthy Logo" className="card-logo" />
              <h1>Log In</h1>
              <p>Good to see you again, Log In to continue.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>

              {/* ROLE */}
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <a href="#" className="forgot-password">
                Forgot Password?
              </a>

              <button type="submit">
                Confirm Details
              </button>

              <p>
                Don’t have an account yet?{" "}
                <Link to="/signup">Sign Up</Link>
              </p>

            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default Login;