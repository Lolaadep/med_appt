import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out");
  };

  return (
    <div>
      <h2>StayHealthy</h2>

      <Link to="/">Home</Link> | 
      <Link to="/search">Appointments</Link> | 

      {!user ? (
        <>
          <Link to="/login">Login</Link> | 
          <Link to="/">Sign Up</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Navbar;