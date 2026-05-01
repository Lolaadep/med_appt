import React from 'react';
import './DoctorCard.css';

function DoctorCard({ name, speciality, experience, rating }) {
  return (
    <div className="doctor-card">

      {/* Profile Section */}
      <div className="doctor-info">
        <div className="doctor-image">
          👨‍⚕️
        </div>

        <div className="doctor-details">
          <h3>{name}</h3>
          <p>{speciality}</p>
          <p>{experience} years experience</p>
          <p>Rating: {rating}</p>
        </div>
      </div>

      {/* Button Section */}
      <button className="book-btn">
        Book Appointment
      </button>

    </div>
  );
}

export default DoctorCard;