import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    const diff = today - birth;

    const ageDate = new Date(diff);

    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Age Calculator</h2>
      <label htmlFor="birthDate"><b>Enter your birth date:</b></label><br /><br />
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br /><br />
      <button
        style={{ backgroundColor: 'skyblue', color: 'white' }}
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age && <p><b>You are {age} years old.</b></p>}
    </div>
  );
};

export default AgeCalculator;
