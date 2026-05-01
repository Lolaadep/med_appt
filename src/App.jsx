import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/SignUP/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

function App() {
  return (
    <div className="App">

      {/* ROUTER WRAPPER */}
      <BrowserRouter>

        {/* NAVBAR ALWAYS VISIBLE */}
        <Navbar />

        {/* ALL ROUTES */}
        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={<LandingPage />} />

          {/* SIGN UP PAGE */}
          <Route path="/signup" element={<SignUp />} />

          {/* LOGIN PAGE */}
          <Route path="/login" element={<Login />} />

          {/* INSTANT CONSULTATION PAGE */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />

          {/* BOOKING CONSULTATION PAGE */}
          <Route path="/booking" element={<BookingConsultation />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;