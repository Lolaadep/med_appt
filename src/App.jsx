import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import SignUP from './Components/SignUp/SignUP'
import LandingPage from './Components/Landing_Page/LandingPage' // 👈 add this
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* 👈 add this */}
          <Route path="/signup" element={<SignUP />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App