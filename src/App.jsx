import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      phoneNumber,
      date,
      time
    });

    setName('');
    setPhoneNumber('');
    setDate('');
    setTime('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>

      <h2>Book Appointment</h2>

      <p>Doctor: {doctorName}</p>
      <p>Speciality: {doctorSpeciality}</p>

      {/* NAME */}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* PHONE */}
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      {/* DATE (REQUIRED FIX) */}
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {/* TIME (REQUIRED FIX) */}
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        Book Appointment
      </button>

    </form>
  );
};

export default AppointmentForm;
