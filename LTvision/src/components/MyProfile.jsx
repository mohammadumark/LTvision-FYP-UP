import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

import Navigation from './Navigation';

import './MyProfile.css';

const MyProfile = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="home-container-p">
      <Navigation selectedOption={selectedOption} handleOptionClick={handleOptionClick} />
      <div className="main-content-p">
        <div className="profile-container">
          <div className="profile-header">
            <img src=".\src\assets\pro.png" alt="Profile" className="profile-image" />
            <h1>Dr. Ishaal</h1>
            <p>Hepatologist</p>
          </div>
          <div className="profile-content">
          <button className="edit-button">
              Edit Profile <FaEdit className="edit-icon" /> {/* Use the imported icon */}
            </button>
            <form className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value="Ishaal" readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value="ishaal@gmail.com" readOnly />
              </div>
              <div className="form-group">
                <label>Phone No</label>
                <input type="text" value="03484890321" readOnly />
              </div>
              <div className="form-group">
                <label>Blood Group</label>
                <input type="text" value="A+" readOnly />
              </div>
              <div className="form-group">
                <label>Hospital</label>
                <input type="text" value="Shifa International Hospital, Islamabad" readOnly />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" value="........" readOnly />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
