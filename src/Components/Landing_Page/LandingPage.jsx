import './LandingPage.css'   // only if you have a CSS file
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section id="section-hero">
        <div className="container">
          <div className="hero-container">
            
            <h1 className="hero-title">Get Started!</h1>

            <p className="hero-description">
              Take the first step toward better healthcare with ease. Find trusted
              doctors and book appointments in just a few clicks, and manage your
              health journey all in one place.
            </p>

            <div className="hero-actions">

              <Link to="/signup">
                <button className="action-btn">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="action-btn">Log In</button>
              </Link>

              <button className="action-btn">
                Continue as guest
              </button>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage