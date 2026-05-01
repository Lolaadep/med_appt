import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/Landing_Page/LandingPage' 
import SignUp from './Components/SignUP/SignUp'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* 👈 add this */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} /> 
          <Route path="/booking" element={<BookingConsultation />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App