import React, { useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import './BookingConsultation.css';

const doctorsList = [
  {
    id: 1,
    name: "Dr John Doe",
    speciality: "Dentist",
    experience: 5,
    ratings: 4.5
  },
  {
    id: 2,
    name: "Dr Sarah Smith",
    speciality: "Dermatologist",
    experience: 8,
    ratings: 4.8
  },
  {
    id: 3,
    name: "Dr James Brown",
    speciality: "General Physician",
    experience: 10,
    ratings: 4.6
  }
];

const BookingConsultation = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsList);

  // search function
  const handleSearch = (searchTerm) => {
    const filtered = doctorsList.filter((doctor) =>
      doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDoctors(filtered);
  };

  return (
    <div className="booking-consultation">

      {/* SEARCH BAR */}
      <FindDoctorSearch onSearch={handleSearch} />

      {/* DOCTOR LIST */}
      <div className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
          />
        ))}
      </div>

    </div>
  );
};

export default BookingConsultation;