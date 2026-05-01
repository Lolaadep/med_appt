function SignUp() {
  return (
    <>
      <section id="section-header">
        <header className="site-header">
          <div className="header-container">

            <a href="#" className="logo">
              <img src="/mylogo.png" alt="StayHealthy Logo" />
            </a>

            <nav className="main-nav">
              <a href="/" className="nav-link">Home</a>
              <a href="#" className="nav-link">Appointments</a>
              <a href="#" className="nav-link">Records</a>
              <a href="#" className="nav-link">Reviews</a>
              <a href="/signup" className="nav-link active">Sign Up</a>
              <a href="/login" className="nav-link">Log In</a>
            </nav>

          </div>
        </header>
      </section>

      <section id="section-signup" className="signup-section">
        <div className="signup-container">
          <div className="signup-card">

            <div className="card-header">
              <img src="/mylogo.png" alt="StayHealthy Logo" className="card-logo" />
              <h1 className="card-title">Sign Up</h1>
              <p className="card-subtitle">Join StayHealthy in seconds!</p>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>

              <div className="form-group">
                <label>User</label>
                <select className="form-control" required>
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Patient">Patient</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>Surname</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" required />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" required />
              </div>

              <div className="terms-group">
                <label>
                  <input type="checkbox" required />
                  I agree to the Terms and Conditions
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Create an Account
              </button>

            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp