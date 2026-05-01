import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const initialSpecialities = [
  'Dentist',
  'Gynecologist',
  'General Physician',
  'Dermatologist',
  'ENT Specialist',
  'Homeopath',
  'Ayurveda'
];

function FindDoctorSearch() {
  const [showResults, setShowResults] = useState(false);
  const [search, setSearch] = useState('');
  const [specialities] = useState(initialSpecialities);

  const navigate = useNavigate();

  const handleSelect = (speciality) => {
    setSearch(speciality);
    setShowResults(false);
    navigate(`/search?speciality=${speciality}`);
  };

  return (
    <div className="finddoctor">
      <h2>Find a Doctor</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search speciality..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 100)}
        />

        {showResults && (
          <div className="results">
            {specialities.map((item) => (
              <div
                key={item}
                className="result-item"
                onMouseDown={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FindDoctorSearch;