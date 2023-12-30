import React, { useState } from 'react';
import './Sidebar.css';

function LogoutConfirmationPopup({ onCancel, onLogout }) {
  return (
    <div className="popup">
      <p>Are you sure you want to log out?</p>
      <div className="popup-buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onLogout}>OK</button>
      </div>
    </div>
  );
}

function Sidebar() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const handleConfirmLogout = () => {
    window.location.href = '/home'; 
  };

  return (
    <div>
      <div className="sidebar">
        <header>FAIRMED</header>
        <ul>
          <li>
            <a href="/patient-dashboard">
              <i className="fa fa-qrcode" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/medicalrecord">
              <i className="fa fa-hospital-o" />
              Medical Record
            </a>
          </li>
          <li>
            <a href="/rate-review">
              <i className="fa fa-star-o" />
              Rate and Review
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-question-circle" />
              Support
            </a>
          </li>
        </ul>
        <button className="logout_button" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
      {showConfirmation && (
        <div className="popup-container">
          <LogoutConfirmationPopup
            onCancel={handleCancelLogout}
            onLogout={handleConfirmLogout}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
