import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm({ doctorName, doctorSpeciality, onSubmit }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      phoneNumber
    });

    setName('');
    setPhoneNumber('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>

      <h2>Book Appointment</h2>

      <p>Doctor: {doctorName}</p>
      <p>Speciality: {doctorSpeciality}</p>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Book Now
      </button>

    </form>
  );
}

export default AppointmentForm;