import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUp from "./pages/Sign_Up";
import Login from "./pages/Login";
import FindDoctorSearch from "./pages/FindDoctorSearch";

function App() {
  const [message, setMessage] = useState("");

  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <Navbar />

      {message && <p style={{ textAlign: "center" }}>{message}</p>}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<FindDoctorSearch />} />
      </Routes>
    </div>
  );
}

export default App;
