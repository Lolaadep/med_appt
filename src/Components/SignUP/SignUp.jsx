import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../mylogo.png";
import "./SignUp.css";

function SignUp() {
  const [form, setForm] = useState({
    role: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
  }

  return (
    <>
      {/* HEADER */}
      <section id="section-header">
        <header className="site-header">
          <div className="header-container">

            <div className="logo">
              <img src={logo} alt="StayHealthy Logo" />
            </div>

            <nav className="main-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="#" className="nav-link">Appointments</Link>
              <Link to="#" className="nav-link">Records</Link>
              <Link to="#" className="nav-link">Reviews</Link>
              <Link to="/signup" className="nav-link active">Sign Up</Link>
              <Link to="/login" className="nav-link">Log In</Link>
            </nav>

          </div>
        </header>
      </section>

      {/* SIGNUP SECTION */}
      <section id="section-signup" className="signup-section">
        <div className="signup-container">
          <div className="signup-card">

            <div className="card-header">
              <img src={logo} alt="StayHealthy Logo" className="card-logo" />
              <h1>Sign Up</h1>
              <p>Join StayHealthy in seconds!</p>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>

              <select name="role" value={form.role} onChange={handleChange} required>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Patient">Patient</option>
                <option value="Doctor">Doctor</option>
              </select>

              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />

              <input
                name="surname"
                placeholder="Surname"
                value={form.surname}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                  required
                />
                I agree to the Terms and Conditions
              </label>

              <button type="submit">
                Create Account
              </button>

              <p>
                Already have an account?{" "}
                <Link to="/login">Log In</Link>
              </p>

            </form>

          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;