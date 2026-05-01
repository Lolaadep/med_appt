import "./Navbar.css";

function Navbar() {
  return (
    <section id="section-header">
      <div className="container">
        <header className="site-header">
          <div className="logo-container">
            <img
              src="mylogo.png"
              alt="StayHealthy Logo"
              className="logo"
            />
          </div>

          <nav className="main-nav">
            <a href="../Landing_Page/LandingPage.html" className="nav-btn">
              Home
            </a>
            <a href="#" className="nav-btn">
              Appointments
            </a>
            <a href="#" className="nav-btn">
              Records
            </a>
            <a href="#" className="nav-btn">
              Reviews
            </a>
            <a href="../SignUP/SignUp.html" className="nav-btn">
              Sign Up
            </a>
            <a href="../Login/Login.html" className="nav-btn">
              Log In
            </a>
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Navbar;