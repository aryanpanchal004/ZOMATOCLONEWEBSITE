import React, { useState } from 'react';

const MutliConvertingArr = () => {
  const [name, SetName] = useState('');
  const [fatherName, SetFatherName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Country, SetCountry] = useState('');
  const [PhoneNum, SetPhoneNum] = useState('0');

  const [formDataArray, setfromDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed spelling
    const newEntry = {
      name,
      fatherName,
      Email,
      Country,
      PhoneNum,
    };
    setfromDataArray([...formDataArray, newEntry]);
    SetName('');
    SetFatherName('');
    SetEmail('');
    SetCountry('');
    SetPhoneNum('0');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          value={fatherName}
          onChange={(e) => SetFatherName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          value={Country}
          onChange={(e) => SetCountry(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          value={PhoneNum}
          onChange={(e) => SetPhoneNum(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Optional: Show data entries */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
        <ul className="list-disc list-inside">
          {formDataArray.map((entry, index) => (
            <li key={index}>
              {entry.name}, {entry.fatherName}, {entry.Email}, {entry.Country}, {entry.PhoneNum}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MutliConvertingArr; // Corrected export
